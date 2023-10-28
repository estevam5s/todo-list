# Documentação do Docker para o Projeto

Este documento fornece informações detalhadas sobre como configurar e usar o Docker para o seu projeto de TODO List com Prisma, Node.js, HTML, CSS e JavaScript.

## Conteúdo

1. [Introdução](#introdução)
2. [Instalação do Docker](#instalação-do-docker)
3. [Instalação do Docker Compose](#instalação-do-docker-compose)
4. [Executando o Projeto com Docker](#executando-o-projeto-com-docker)
5. [Comandos Úteis do Docker](#comandos-úteis-do-docker)

## Introdução

O Docker é uma plataforma de contêineres que permite empacotar aplicativos e suas dependências em contêineres leves e portáteis. Esses contêineres podem ser executados consistentemente em diferentes ambientes, garantindo a consistência do ambiente de desenvolvimento e produção.

Neste projeto, usamos o Docker para criar um ambiente de desenvolvimento que inclui o aplicativo Node.js, o banco de dados SQLite e o Prisma. O Docker Compose é usado para gerenciar a configuração e a execução de múltiplos contêineres.

## Instalação do Docker

Antes de iniciar, verifique se você tem o Docker instalado em sua máquina. Se o Docker ainda não estiver instalado, siga as instruções em [Instalação do Docker](https://docs.docker.com/get-docker/) para o seu sistema operacional.

Após a instalação do Docker, verifique se ele está funcionando corretamente executando o seguinte comando no terminal:

```bash
docker --version
```

Você deve ver a versão do Docker instalada.
## Instalação do Docker Compose

O Docker Compose é uma ferramenta que permite definir e executar aplicativos Docker multicontêiner em um único arquivo. Para instalar o Docker Compose, siga as instruções em [Instalação do Docker Compose](https://docs.docker.com/compose/install/) .

Após a instalação, verifique se o Docker Compose está funcionando corretamente executando o seguinte comando:

```bash
docker-compose --version
```

Você deve ver a versão do Docker Compose instalada.
## Executando o Projeto com Docker

Siga estas etapas para executar o projeto usando Docker: 
1. Clone este repositório em sua máquina:

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

Certifique-se de substituir `"seu-usuario/seu-projeto.git"` pelo URL real do seu repositório. 
2. Navegue até o diretório do projeto:

```bash
cd seu-projeto
``` 
3. Inicie o aplicativo usando Docker Compose:

```bash
docker-compose up
``` 
4. O Docker Compose construirá as imagens dos contêineres e executará o aplicativo e o banco de dados. 
5. Acesse o aplicativo em seu navegador em `http://localhost:3000`.
## Comandos Úteis do Docker

Aqui estão alguns comandos úteis do Docker e Docker Compose para gerenciar o ambiente do projeto: 
- Para parar a execução dos contêineres do Docker, pressione `Ctrl + C` no terminal. 
- Para iniciar os contêineres em segundo plano, use o seguinte comando:

```bash
docker-compose up -d
``` 
- Para parar e remover os contêineres, execute:

```bash
docker-compose down
```