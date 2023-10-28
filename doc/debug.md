- Para configurar a depuração de um projeto Node.js, você pode usar a ferramenta integrada do Node.js chamada Inspector. Vou mostrar como configurar a depuração no seu projeto e adicionar um script ao arquivo `package.json`. 
1. **package.json** :

Abra o arquivo `package.json` e adicione o seguinte script:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon",
  "debug": "node --inspect=0.0.0.0:9229 server.js",
  "build": "webpack --mode production",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```



Neste script, estamos configurando um novo comando chamado "debug". Ele usará o Node.js Inspector para depurar o arquivo `server.js`. O `--inspect=0.0.0.0:9229` permite que você se conecte a partir de qualquer endereço IP e use a porta 9229 para depuração. 
2. **Instale o pacote de depuração para o Node.js** :

Execute o seguinte comando no terminal para instalar o pacote `inspect`:

```bash
npm install inspect
``` 
3. **Inicie o servidor com depuração** :

Para iniciar o servidor com depuração, execute o seguinte comando:

```bash
npm run debug
```



O servidor agora está em modo de depuração e está ouvindo na porta 9229. Você pode se conectar a ele usando ferramentas de depuração, como o Visual Studio Code, ou acessando `chrome://inspect` no Google Chrome. 
4. **Depuração no Visual Studio Code** :

Se estiver usando o Visual Studio Code, você pode adicionar uma configuração de depuração ao arquivo `.vscode/launch.json` para facilitar a depuração. Aqui está um exemplo de configuração:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Process",
      "port": 9229
    }
  ]
}
```



Agora, você pode iniciar a depuração diretamente no Visual Studio Code usando a configuração "Attach to Process".

Com essas configurações, você poderá depurar seu projeto Node.js de forma eficiente.