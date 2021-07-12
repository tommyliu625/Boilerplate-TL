const router = require('express').Router();

// api/test route
router.get('/', (req, res, next) => {
  res.send({ message: 'hello' });
});

module.exports = router;
