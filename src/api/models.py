from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        # do not serialize the password, its a secur
        return {"id": self.id, 
                "email": self.email, 
                "is_active": self.is_active}
    

class Posts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(), nullable=True)
    description = db.Column(db.String(), nullable=True)
    body = db.Column(db.String(), nullable=True)
    date = db.Column(db.Date())
    image_url = db.Column(db.String())
    

class Medias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.Enum("image", "video", "audio", name='media_type'))
    url = db.Column(db.String())