from flask import request, jsonify
from flask_jwt_extended import jwt_required
from sqlalchemy.exc import IntegrityError

from src.extensions import db
from src.utils.utils import has_role, is_body_json
from src.plans import plans
from src.plans.models import Plan


@plans.route('/', methods=['POST'])
@is_body_json
@has_role(role='ADMIN')
def create_plans():
    """
        Create new application plan.
            * only admin users can do this
        arguments:
            body:
                {
                    title: str
                    description: str
                    price: float
                }
        return:
            error -> {'errors': '...'}
            ok ->   "plan": {
                        "creation_datetime": "...",
                        "description": "...",
                        "id": ...,
                        "price": ...,
                        "title": "..."
                  }
        response_codes:
            400
            500
            201
    """
    title = request.get_json().get('title')
    description = request.get_json().get('description')
    price = request.get_json().get('price')

    if not title or not description or not price:
        return {'errors': 'Invalid arguments'}, 400

    try:
        plan = Plan()
        plan.title = title
        plan.description = description
        plan.price = price
        db.session.add(plan)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        return {'errors': e._message()}, 500

    res = {'id': plan.id, 'title': title, 'description': description, 'price': price,
           'creation_datetime': plan.creation_datetime}

    return {'plan': res}, 201


@plans.route('/', methods=['GET'])
@jwt_required
def get_plans():
    """
        Retrieve all plans
        return:
            [
                {
                    "id": ..',
                    "title": "...",
                    "description": "...",
                    "price": ...
                },
                ...
            ]
        response_codes:
            200
    """
    all_plans = Plan.query.all()

    plan_arr = [
        {
            'id': plan.id,
            'title': plan.title,
            'description': plan.description,
            'price': plan.price
        } for plan in all_plans
    ]

    return jsonify(plan_arr), 200


@plans.route('/<int:id>/', methods=['PUT'])
@is_body_json
@has_role(role='ADMIN')
def modify_plans(id):
    """
        Change plan values if plan exists
            * only admin users can access to this route
        arguments:
            id: path_variable
            body:
                {
                    title (optional): str,
                    description (optional): str,
                    price (optional): float
                }
        return:
            error -> {'errors: '...'}
            ok -> {}
        response_codes:
            400
            404
            500
            204
            200
    """
    title = request.get_json().get('title')
    description = request.get_json().get('description')
    price = request.get_json().get('price')
    if not title and not description and not price:
        return {}, 204

    plan = Plan.query.filter(Plan.id == id).first()
    if not plan:
        return {'errors': 'Plan not found'}, 404

    try:
        if title:
            plan.title = title
        if description:
            plan.description = description
        if price:
            plan.price = price
        db.session.add(plan)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        return {'errors': 'Something bad happened'}, 500

    return {'message': 'Plan changed'}, 200


@plans.route('/<int:id>/', methods=['DELETE'])
@has_role(role='ADMIN')
def delete_plan(id):
    """
        Delete plan if plan exists
            * only admin users can access to this route
        arguments:
            id: path_variable
        return:
            errors -> {'errors', '...'}
            ok -> {}
        response_codes:
            404
            500
            204
    """
    plan = Plan.query.filter(Plan.id == id).first()
    if not plan:
        return {'errors': 'Plan not exists'}, 404
    try:
        db.session.delete(plan)
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        return {'errors': 'Something bad happened'}, 500
    return {}, 204
