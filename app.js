const express = require('express')
const config = require('config')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = config.get('port') || 4000

function start() {
    app.listen(PORT, () => {
        console.log(`Server is started on port ${PORT}`)
    })
}

start()
