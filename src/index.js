const express = require("express");
const db = require("./models/ConnectDatabase");

const app = express();
const port = 3000;

// Conexão com o banco de dados
db.testConnection().catch((err) => {
  console.error(
    "Não foi possível conectar ao banco de dados. Encerrando o aplicativo."
  );
  process.exit(1);
});

app.use(express.json());

// Rotas (antigo routes.js embutido aqui)
app.get("/", (request, response) => {
  console.log(request.query);
  response.json({ message: "Professor Lucas" });
});

app.post("/users", (request, response) => {
  console.log(request.body);
  response.json({ message: "Rota /users METODO POST" });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
