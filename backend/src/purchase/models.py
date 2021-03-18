from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Float, DateTime, Boolean, ForeignKey
from sqlalchemy.orm import relationship

from src.extensions import db


class Plan(db.Model):
    __tablename__ = 'plans'

    id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False, unique=True)
    description = Column(Text, nullable=False)
    price = Column(Float(precision=2), nullable=False)
    creation_datetime = Column(DateTime, default=datetime.now)
    modified_datetime = Column(DateTime, default=datetime.now, onupdate=datetime.now)
    horses = relationship('Horse', backref='plan')

    def __repr__(self) -> str:
        return self.title


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
