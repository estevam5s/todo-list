# Use a imagem oficial do SQLite como base
FROM sqlite:latest

# Copie o arquivo de banco de dados SQLite (dev.db) para a pasta do SQLite
COPY prisma/dev.db /var/lib/sqlite
