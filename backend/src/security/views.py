from datetime import datetime

from flask import request
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity

from src.main import db
from src.security import auth
from src.security.models import User, Verification
from src.security.utils import send_otp_code, generate_verification, generate_user


@auth.route('/register/', methods=['POST'])
def create_user():
    """
        Create user if not exists
        arguments:
            {
                username: str,
                password: str
            }    
    """
    if not request.is_json:
        return {'errors': 'invalid argument'}, 400

    username = request.get_json().get('username')
    password = request.get_json().get('password')

    if not username or not password:
        return {'errors': 'Invalid Username/Password'}, 400

    user = User.query.filter_by(username=username).first()

    if user:
        return {'errors': 'Duplicate Username'}, 400

    try:
        user = generate_user(username, password)
        db.session.add(user)
        db.session.commit()
    except ValueError as e:
        db.session.rollback()
        return {'error': f'{e}'}, 400
    except IntegrityError:
        db.session.rollback()
        return {'error': 'User is duplicated'}, 400

    return {'message': 'Account created successfully'}, 201


@auth.route('/activate/<string:username>/', methods=['GET'])
def generate_active_code(username):
    """
        Generate otp code and send sms to user
        arguments:
            username: str -> path_variable
    """
    user = User.query.filter_by(username=username).first()
    if not user:
        return {'errors': 'username not found'}, 404
    
    if user.active == False:
        # send opt code
        
        try:
            verification = generate_verification()
            user.verifications.append(verification)
            db.session.add(user)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return {'errors': 'opt code not created'}, 500

        send_otp_code(username, verification.auth_code)
        return {'message': 'otp code sent'}, 200
    return {'message': 'your account allready activated'}, 200


@auth.route('/activate/', methods=['POST'])
def active_user():
    """
        Activate user by otp code
        arguments:
            {
                username:str,
                auth_code:str
            }     
    """
    if not request.is_json:
        return {'errors': 'invalid argument'}, 400

    username = request.get_json().get('username')
    auth_code = request.get_json().get('auth_code')

    if not username or not auth_code:
        return {'errors': 'Invalid username/auth_code'}, 400

    user = User.query.filter_by(username=username).first()

    if not user:
        return {'errors': 'username/auth_code not'}, 401

    verification = Verification.query.filter_by(user_id=user.id, auth_code=auth_code).first()

    if not verification:
        return {'errors': 'username/auth_code not'}, 401

    if verification.expire_datetime < datetime.now():
        return {'errors': 'auth_code expired'}, 401

    # Activate user
    user.active = True

    try:
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return {'errors': 'server error'}, 500

    return {}, 204


@auth.route('/token/', methods=['POST'])
def generate_tokens():
    """
        Generate access token and refresh token if user exists
        arguments:
            {
                username: str,
                password: str
            }
    """

    if not request.is_json:
        return {'errors': 'invalid argument'}, 400

    username = request.get_json().get('username')
    password = request.get_json().get('password')

    if not username or not password:
        return {'errors': 'Invalid Username/Password'}, 400

    user = User.query.filter_by(username=username).first()

    if not user or not user.check_password(password):
        return {'errors': 'Username/password not found'}, 404

    access_token = create_access_token(identity=user.username, fresh=True, additional_claims={'role': user.role})
    refresh_token = create_refresh_token(identity=user.username)
    return {'access_token': access_token, 'refresh_token': refresh_token}, 200


@auth.route('/token/', methods=['PUT'])
@jwt_required(refresh=True)
def generate_access_token():
    """
        regenerate access-token and refresh-token
    """
    username = get_jwt_identity()
    
    user = User.query.filter_by(username=username).first()

    access_token = create_access_token(identity=username, fresh=False, additional_claims={'role': user.role})
    refresh_token = create_refresh_token(identity=username)
    return {'access_token': access_token, 'refresh_token': refresh_token}, 200