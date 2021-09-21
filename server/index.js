const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config();

const envCheck = () => {
    if (!process.env.URI_DB) {
        throw new Error('[APP]: URI_DB must be defined');
    }
}
envCheck()


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))

async function starty() {
    try {
        await mongoose.connect(process.env.URI_DB, {
            useUnifiedTopology: true,
            // useCreateIndex: true,
            useNewUrlParser: true,
            // useFindAndModify: true,
        })

        app.listen(PORT, () => {
            console.log('listening on port:' + PORT)
        })

    } catch (error) {
        console.log("🔥🚀 ===> starty ===> error", error);
    }
}

starty()