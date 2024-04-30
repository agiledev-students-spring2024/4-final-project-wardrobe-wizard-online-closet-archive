import dotenv from 'dotenv';
dotenv.config()
import jwt from 'jsonwebtoken';

const auth =  (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (!bearerHeader) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }
    /*
      since the value reads as Bearer and then the token I split them by the space and took the value in index 1 and
      checked it 
    */
    try {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const decoded = jwt.verify(bearerToken, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid token' });
    }
};
export default auth;
  