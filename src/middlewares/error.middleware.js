const middlewareError = ((err, _req, res, next) => {
  const { status, message } = err;
  res.status(status).json({ message });
  next();
});

module.exports = middlewareError;