# Projeto de TODO List com Prisma, Node, HTML, CSS e JavaScript

## Introdução

Este é um projeto de exemplo que demonstra um sistema de TODO List usando tecnologias como Prisma, Node.js, HTML, CSS e JavaScript. Ele fornece uma estrutura básica para criar e gerenciar tarefas a fazer em um banco de dados SQLite usando o Prisma como ORM.

## Tecnologias

As principais tecnologias utilizadas neste projeto incluem:

- **Node.js:** A plataforma de servidor JavaScript usada para executar o servidor do aplicativo.
- **HTML, CSS e JavaScript:** Para a criação da interface do usuário e interações no lado do cliente.
- **Prisma:** Um ORM (Object-Relational Mapping) para interagir com o banco de dados.
- **SQLite:** O banco de dados embutido usado para armazenar os dados do aplicativo.

## Funcionamento do Banco de Dados

Este projeto utiliza um banco de dados SQLite para armazenar as tarefas da lista TODO. O Prisma é usado como ORM para interagir com o banco de dados. O arquivo `dev.db` na pasta `prisma` contém o banco de dados, que é criado e gerenciado automaticamente pelo Prisma. Certifique-se de que o arquivo `dev.db` esteja presente e corretamente configurado com a estrutura do banco de dados.

## DevOps e Docker

O projeto inclui um ambiente de desenvolvimento configurado com Docker e Docker Compose para facilitar a configuração e execução dos serviços. O Docker é uma plataforma de contêineres que garante a consistência do ambiente de desenvolvimento em diferentes sistemas.

### Instalação dos Softwares para o Projeto

Antes de executar o projeto, você deve ter o Docker e o Docker Compose instalados. Certifique-se de ter essas ferramentas configuradas em seu ambiente.

- **Docker:** [Instruções de instalação do Docker](https://docs.docker.com/get-docker/)
- **Docker Compose:** [Instruções de instalação do Docker Compose](https://docs.docker.com/compose/install/)

### Executando o Projeto com Docker

Siga estas etapas para executar o projeto:

1. Clone este repositório em sua máquina:

```bash
git clone https://github.com/
```
 
1. Navegue até o diretório do projeto:

```bash
cd seu-projeto
``` 
2. Inicie o aplicativo usando Docker Compose:

```bash
docker-compose up
``` 
3. O Docker Compose construirá as imagens dos contêineres e executará o aplicativo e o banco de dados. 
4. Acesse o aplicativo em seu navegador em `http://localhost:3000`.
### Comandos Úteis do Docker 
- Para parar a execução dos contêineres do Docker, pressione `Ctrl + C` no terminal. 
- Para iniciar os contêineres em segundo plano, use o seguinte comando:

```bash
docker-compose up -d
``` 
- Para parar e remover os contêineres, execute:

```bash
docker-compose down
```
## Contribuindo

Este é um projeto de exemplo e está aberto a contribuições. Sinta-se à vontade para criar problemas, enviar solicitações pull e melhorar o projeto.
## Licença

Este projeto é distribuído sob a licença [MIT](LICENSE) .