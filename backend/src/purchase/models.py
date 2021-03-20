from sqlalchemy import Column, Integer, String, Text, Float, Boolean, ForeignKey

from src.extensions import db


class Horse(db.Model):
    __tablename__ = 'horses'

    id = Column(Integer, primary_key=True)
    price = Column(Float(precision=2))
    breed = Column(String(128), nullable=False)
    eye_color = Column(String(128), nullable=False)
    body_color = Column(String(128), nullable=False)
    opt_color = Column(String(16), nullable=False)
    sex = Column(Boolean, nullable=False)
    age = Column(Integer, nullable=False)
    state = Column(String(128), nullable=False)
    description = Column(Text)
    plan_id = Column(Integer, ForeignKey('plans.id'))
