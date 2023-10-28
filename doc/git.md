- O arquivo `.gitconfig` não precisa ser ativado. Ele é um arquivo de configuração do Git que é lido automaticamente quando você executa comandos Git em seu sistema. No entanto, você precisa editá-lo para adicionar configurações personalizadas, como aliases.

Aqui estão os passos para editar o `.gitconfig`: 
1. **Abra o Terminal** : Abra o terminal em seu sistema operacional. 
2. **.gitconfig** : 
- Para editar o `.gitconfig` global (que se aplica a todos os seus repositórios Git), você pode usar o seguinte comando:

```css
git config --global --edit
```



Isso abrirá o arquivo `.gitconfig` em seu editor de texto padrão (geralmente o Vim ou o Nano). 
- Para editar o `.gitconfig` de um repositório específico, navegue para o diretório do projeto e use o comando:

```lua
git config --edit
```



Isso abrirá o arquivo `.git/config` específico desse repositório em seu editor. 
3. **Adicione as Configurações** :
No arquivo `.gitconfig`, você pode adicionar configurações, como aliases, conforme necessário. Por exemplo, você pode adicionar um alias da seguinte maneira:

```ini
[alias]
  # Atalhos para comandos do Git
  st = status
  co = checkout
  br = branch
  ci = commit
  unstage = reset HEAD --
  last = log -1 HEAD
  lola = log --oneline --decorate --all

  # Atalho para exibir o log de forma gráfica
  lg = log --graph --oneline --decorate --all

  # Atalhos para sincronizar com repositórios remotos
  pullpr = pull --rebase
  pushpr = push --force-with-lease

  # Atalho para criar e publicar uma nova branch
  newbranch = checkout -b
  publish = push -u origin HEAD

  # Atalhos para visualizar e configurar o Git
  aliases = config --get-regexp alias
  config-list = config --list

```



Salve as alterações e feche o arquivo. 
4. **Verifique as Configurações** :
Para verificar se as configurações foram aplicadas, você pode usar o seguinte comando:

```lua
git config --list
```

Isso exibirá todas as configurações do Git, incluindo os aliases que você adicionou.

Após adicionar as configurações ao `.gitconfig`, você pode usar os aliases personalizados no Git, como o alias `git st` para `git status`.
