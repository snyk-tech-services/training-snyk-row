const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Snyk CX ROW!'))
app.get('/antoine', (req,res) => {
					res.send('Hello Antoine')
					console.log('somebody reached Antoine')
				})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
