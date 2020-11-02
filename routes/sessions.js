const { Router } = require('express')
const router = Router()

router.get('/set_session', (req, res) => {
  req.session.test = 'test-'+Math.random();
  res.send('session is set to '+req.session.test)
})

router.get('/get_session', (req, res) => {
  res.send('session is '+req.session.test)
})

module.exports = router
