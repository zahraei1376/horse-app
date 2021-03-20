from functools import wraps

from flask import request

def is_body_json(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not request.is_json or not request.get_json(silent=True):
            return {'errors': 'Invalid arguments'}, 400
        return func(*args, **kwargs)

    return wrapper


