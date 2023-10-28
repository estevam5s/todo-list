# Introdução

## Estrutura do projeto:

```bash
my-todo-app/
  ├── .github/
  ├── db/
  ├── devops/
  ├── doc/
  ├── node_modules/
  ├── prisma/
  │    ├── generated/
  │    ├── dev.db
  │    ├── schema.prisma
  ├── public/
    ├── src/
    │    ├── server.js
    │    ├── controllers/
    │    │    ├── taskController.js
    │    ├── routes/
    │    │    ├── taskRoutes.js
  ├── .editorconfig
  ├── .env
  ├── .gitignore
  ├── docker-compose.yml
  ├── dockerfile
  ├── git.sh
  ├── LICENSE
  ├── package-lock.json
  ├── package.json
  ├── README.md
  ├── server.js
```

* Criar um aplicativo de lista de tarefas com HTML, CSS e JavaScript é uma tarefa razoavelmente extensa,
mas posso lhe dar um exemplo simples de código para iniciar.
* No entanto, salvar os dados em um banco de dados requer um servidor e uma tecnologia de back-end, como Node.js e SQLite, daria para fazer com o MongoDB,
mas como o professor quer que você saiba tudo, coloquei o mais simples possível.

* Você precisará configurar isso separadamente com o prisma

* Para fazer a conexão com um servidor Node.js e usar o Prisma como ORM (Object-Relational Mapping), você precisa seguir alguns passos:

* Primeiro, você deve configurar o projeto Node.js e instalar as dependências necessárias.
* Em seguida, você pode usar o Prisma para interagir com seu banco de dados.

1. Certifique-se de que você tenha o Node.js instalado em seu sistema.

2. Execute no terminal para criar um projeto em Node:

```bash
npm init
```

3. Instale as dependências necessárias, como Express (para o servidor HTTP), Prisma (para a interação com o banco de dados)

```bash
npm install express @prisma/client
```

4. Instalar o Prisma CLI: Certifique-se de que você tenha o Prisma CLI instalado globalmente.

```bash
npm install -g prisma
```

5. Inicializar um Projeto Prisma: Navegue até a pasta raiz do seu projeto e execute o seguinte comando para inicializar um projeto Prisma:

```bash
prisma init
```

6. Escolher o Banco de Dados: O assistente lhe perguntará qual banco de dados você deseja usar.
Selecione o banco de dados que deseja configurar (por exemplo, PostgreSQL, MySQL, SQLite, etc.).
Para ser mais fácil, vamos usar o sqlite e usar o dbeaver

7. Configurar as Conexões do Banco de Dados: Você precisará configurar as conexões de banco de dados, incluindo a URL de conexão.

8. Gerar o Prisma Client: Após a configuração, você pode gerar o Prisma Client executando o seguinte comando:

```bash
prisma generate
ou
npx prisma generate
ou
sudo npx prisma generate
ou
sudo prisma generate
```

8. Criar um Modelo Prisma: No assistente, você pode definir os modelos de dados do seu aplicativo no arquivo schema.prisma. Aqui está um exemplo simple:

```js
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Task {
  id        Int      @id @default(autoincrement())
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

9. Crie um arquivo .env no diretório raiz do seu projeto para armazenar a URL do banco de dados:

```bash
DATABASE_URL="file:./dev.db"
```

9. Executar Migrações (Opcional):
Se você estiver usando o Prisma Migrate para gerenciar as alterações no banco de dados, pode criar migrações usando o seguinte comando:

```bash
prisma migrate dev
```

9.  Execute as migrações iniciais do Prisma:

Para criar a tabela no banco de dados, execute o seguinte comando:

```bash
npx prisma db push
```

10. Usar o Prisma no seu Projeto:
Agora você pode usar o Prisma Client gerado em seus controladores e rotas no seu projeto Node.js, conforme mostrado nos exemplos anteriores.
Não vamos utilizar o prisma client, não precisar

11. Inicie o servidor Node.js: No seu terminal, execute o arquivo principal do seu servidor Node.js. Normalmente, esse arquivo é chamado de server.js.

```bash
node server.js
```

> Acesse o aplicativo no navegador ou via ferramentas de API:
Abra um navegador da web e acesse http://localhost:3000 (ou a porta que você especificou) para interagir com seu aplicativo. 