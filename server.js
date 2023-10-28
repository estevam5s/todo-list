const express = require('express');
const { PrismaClient } = require('./prisma/generated/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Configure o middleware para servir arquivos estáticos do diretório "public"
app.use(express.static('public'));

app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { name } = req.body;
  const task = await prisma.task.create({
    data: {
      name,
    },
  });
  res.json(task);
});

app.delete('/tasks/:taskId', async (req, res) => {
  const taskId = parseInt(req.params.taskId, 10);
  await prisma.task.delete({
    where: {
      id: taskId,
    },
  });
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  // Servir o arquivo HTML quando a rota raiz for acessada
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});



