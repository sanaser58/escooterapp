import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())



app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

// const __dirname = path.resolve()

//if not in production * get any things that are not API routes
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../escooters-frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'escooters-frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

app.use(notFound)
app.use(errorHandler)

  const PORT = process.env.PORT || 3009

  app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
  )