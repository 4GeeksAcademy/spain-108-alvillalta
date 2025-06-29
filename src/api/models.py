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
    

class Media(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    media_type = db.Column(db.Enum("image", "video", "audio", name="media_type"))
    url = db.Column(db.String())
    

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String())


class Followers(db.Model):
    id = db.Column(db.Integer, primary_key=True)


class CharacterFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)


class Characters(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    height = db.Column(db.Float)
    mass = db.Column(db.Integer)
    hair_color = db.Column(db.String(), nullable=True)
    skin_color = db.Column(db.String(), nullable=True)
    eye_color = db.Column(db.String(), nullable=True)
    birth_year = db.Column(db.Date())
    gender = db.Column(db.Enum("none", "male", "female", "other", name="gender"))

class PlanetFavorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)

class Planets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), unique=True)
    diameter = db.Column(db.Integer)
    rotation_period = db.Column(db.Integer)
    orbital_period = db.Column(db.Integer)
    gravity = db.Column(db.Integer)
    population = db.Column(db.Integer, nullable=True)
    climate = db.Column(db.String())
    terrain = db.Column(db.String())