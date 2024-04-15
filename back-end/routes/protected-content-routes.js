import dotenv from 'dotenv';
dotenv.config()
import jwt from 'jsonwebtoken';

const auth =  (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    //console.log(bearerHeader)
    if (!bearerHeader) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }

    try {
      // Split at the space and get token from array
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
        // console.log(bearerToken)
      // Verify the token
      const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
      console.log(decoded)
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
};
export default auth;
  