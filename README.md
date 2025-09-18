# Artwork API

API para gerenciamento de obras de arte, construída com **NestJS** e integrada com **PostgreSQL**, utilizando **Docker Compose** para orquestração.

## Requisitos

- **Docker** e **Docker Compose** instalados.
- **Node.js** (versão 18 ou superior, apenas para desenvolvimento local fora do Docker).
- **NPM** (para instalar dependências, se necessário).
- Porta **3005** disponível para a API.
- Porta **5433** disponível para o PostgreSQL.


## Como Executar via Docker Compose

### Passo a passo para subir a aplicação

1. **Clone o repositório** (se aplicável):
   ```bash
   $ git clone <URL_DO_REPOSITORIO>
   $ cd projeto
   ```

2. **Suba os serviços com Docker Compose**:
   Utilize este comando para construir e iniciar os containers em modo detached:
   ```bash
   $ docker compose -f ./deploy/docker-compose.yml up -d --build
   ```

3. **Verifique os serviços rodando**:
   ```bash
   $ docker compose -f ./deploy/docker-compose.yml ps
   ```

### Instruções para derrubar os recursos

1. **Pare e remova os containers**:
   ```bash
   $ docker compose -f ./deploy/docker-compose.yml down
   ```

2. **(Opcional) Remova volumes para limpar dados do PostgreSQL**:
   ```bash
   $ docker compose -f ./deploy/docker-compose.yml down -v
   ```

3. **(Opcional) Limpe imagens e cache do Docker**:
   ```bash
   $ docker system prune -f
   ```

## Endpoints CRUD para API

A API oferece operações CRUD para gerenciamento de obras de arte (artworks). Acesse a documentação Swagger em `http://localhost:3005/api`.

## URL para frontend

`http://localhost:3000`.


### **1. Listar todas as obras**
- **Método**: GET
- **URL**: `/artwork`
- **Exemplo de Requisição**:
  ```bash
  curl http://localhost:3005/artwork
  ```
- **Exemplo de Resposta**:
  ```json
  [
    {
      "id": 1,
      "title": "Mona Lisa",
      "artist": "Leonardo da Vinci",
      "year": 1503
    },
    {
      "id": 2,
      "title": "The Starry Night",
      "artist": "Vincent van Gogh",
      "year": 1889
    }
  ]
  ```

### **2. Buscar uma obra por ID**
- **Método**: GET
- **URL**: `/artwork/:id`
- **Exemplo de Requisição**:
  ```bash
  curl http://localhost:3005/artwork/1
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "id": 1,
    "title": "Mona Lisa",
    "artist": "Leonardo da Vinci",
    "year": 1503
  }
  ```

### **3. Criar uma nova obra**
- **Método**: POST
- **URL**: `/artwork`
- **Body** (JSON):
  ```json
  {
    "title": "The Scream",
    "artist": "Edvard Munch",
    "year": 1893
  }
  ```
- **Exemplo de Requisição**:
  ```bash
  curl -X POST http://localhost:3005/artwork \
  -H "Content-Type: application/json" \
  -d '{"title":"The Scream","artist":"Edvard Munch","year":1893}'
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "id": 3,
    "title": "The Scream",
    "artist": "Edvard Munch",
    "year": 1893
  }
  ```

### **4. Atualizar uma obra**
- **Método**: PUT
- **URL**: `/artwork/:id`
- **Body** (JSON):
  ```json
  {
    "title": "The Scream Updated",
    "artist": "Edvard Munch",
    "year": 1895
  }
  ```
- **Exemplo de Requisição**:
  ```bash
  curl -X PUT http://localhost:3005/artwork/3 \
  -H "Content-Type: application/json" \
  -d '{"title":"The Scream Updated","artist":"Edvard Munch","year":1895}'
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "id": 3,
    "title": "The Scream Updated",
    "artist": "Edvard Munch",
    "year": 1895
  }
  ```

### **5. Deletar uma obra**
- **Método**: DELETE
- **URL**: `/artwork/:id`
- **Exemplo de Requisição**:
  ```bash
  curl -X DELETE http://localhost:3005/artwork/3
  ```
- **Exemplo de Resposta**:
  ```json
  {
    "message": "Artwork deleted successfully"
  }
  ```

## Notas Adicionais

- **Swagger**: Acesse `http://localhost:3005/api` para a documentação interativa da API.
- **Hot Reload**: Para desenvolvimento, o volume mapeado no `docker-compose.yml` permite refletir mudanças no código sem rebuild (em modo `start:dev`).
- **Limpeza de Recursos**: Use `docker compose -f ./deploy/docker-compose.yml down -v` para remover containers e volumes.
- **Logs**: Verifique erros ou logs com `docker compose -f ./deploy/docker-compose.yml logs -f nestjs`.