from functools import wraps

from flask import request
from flask_jwt_extended import get_jwt, verify_jwt_in_request


def is_body_json(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not request.is_json or not request.get_json(silent=True):
            return {'errors': 'Invalid arguments'}, 400
        return func(*args, **kwargs)

    return wrapper


def has_role(role='USER'):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            verify_jwt_in_request()
            current_role = get_jwt().get('role')
            if current_role != role:
                return {'errors': 'You haven\'t permit'}, 403
            return func(*args, **kwargs)

        return wrapper

    return decorator
