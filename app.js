const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.json(
        {
            'teamid' : 11,
            'name' : "Roaring Tigers",
            'mem1' : "John",
            'mem2' : "Doe",
            'mem3' : "Jamie"
        }
    )
})

app.listen(3000)