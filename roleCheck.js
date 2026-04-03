module.exports = function(allowedRoles) {
    return (req, res, next) => {
      const role = req.headers.role;
  
      if (!role) {
        return res.status(400).json({ message: "Role missing in header" });
      }
  
      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ message: "Access denied" });
      }
  
      next();
    };
  };