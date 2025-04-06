import express from 'express'
import { client } from 'db/client'

const app = express()


app.use(express.json())

// ➕ Add Todo
app.post('/todo', async (req, res) => {

  try {
    const todo = await client.todo.create({
      data: {
        name:Math.random().toString(),
        done: false,
        userId:"1",
      },
    })
    res.status(201).json(todo)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create todo' })
  }
})

// 📃 Get All Todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await client.todo.findMany()
    res.json(todos)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch todos' })
  }
})

const PORT = 8080
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
