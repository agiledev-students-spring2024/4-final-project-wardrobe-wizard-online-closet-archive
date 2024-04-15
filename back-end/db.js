import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
dotenv.config();

const username_password = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'user'});

username_password.pre("save", function (next) {
    const user = this
    // if the password has not changed, no need to hash it
    if (!user.isModified("password")) return next()
    // otherwise, the password is being modified, so hash it
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) return next(err)
      user.password = hash // update the password to the hashed version
      next()
    })
})

username_password.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

username_password.methods.generateJWT = function () {
    const today = new Date()
    const exp = new Date(today)
    exp.setDate(today.getDate() + process.env.JWT_EXP_DAYS) // assuming an environment variable with num days in it
  
    return jwt.sign(
      {
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
      },
      process.env.JWT_SECRET
    )
}
username_password.methods.toAuthJSON = function () {
    return {
      username: this.username,
      token: this.generateJWT(),
    }
}

const User = mongoose.model("User", username_password);

// export default User;


const clothing_item = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    articleType: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }

}, {collection: 'clothing'});

const Clothes = mongoose.model("Clothing", clothing_item);
export default {User, Clothes};


