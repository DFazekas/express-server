import express from 'express'
import crmRoutes from './src/routes/crmRoutes'

const app = express()
const PORT = 3000

crmRoutes(app)
app.get('/', (req, res) => res.send(`Hello World!`))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
