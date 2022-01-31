import jwt from 'jsonwebtoken';
import config from 'config';

export default function auth(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'Auth token is required' }] });
  }
  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));
    req.user = decoded.data.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
}
