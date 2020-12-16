const { Router } = require('express')
const request = require('request')

const router = Router()

router.get('/teleport', (req, res) => {
    request('https://ad.admitad.com/tpt/r889udt5ea7ae3e44f49a499575f91/', (err, response, body) => {
        if(err)
            return res.status(500).send({message: err})

        return res.send(body)
    })
})

module.exports = router