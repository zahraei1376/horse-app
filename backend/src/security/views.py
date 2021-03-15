from datetime import datetime

from flask import request
from sqlalchemy.exc import IntegrityError
from src.main import db
from src.security import auth
from src.security.models import User, Verification
@auth.route('/register/', methods=['POST'])
def create_user():
    """
        Create user if not exists and send opt code to phones for validate use
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

