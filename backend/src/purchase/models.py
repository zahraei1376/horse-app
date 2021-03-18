from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Float, DateTime

from src.extensions import db


class Plan(db.Model):
    __tablename__ = 'plans'

    id = Column(Integer, primary_key=True)
    title = Column(String(255), nullable=False, unique=True)
    description = Column(Text, nullable=False)
    price = Column(Float(precision=2), nullable=False)
    creation_datetime = Column(DateTime, default=datetime.now)
    modified_datetime = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    def __repr__(self) -> str:
        return self.title
