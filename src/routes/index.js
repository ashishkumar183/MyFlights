const express = require('express');

const v1Routes = require('./v1');
const cityRoutes = require('./v1/city-routes');

const router = express.Router();

router.use('/v1',v1Routes);
router.use('/v1/cities', cityRoutes);

module.exports = router;