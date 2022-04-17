# backend_leme

Aplicação de criação de cliente e pedidos.

## Configuração Inicial:

É necessário configurar as variáveis do arquivo .env

| Variável             | Configuração                         |
| -------------------- | ------------------------------------ |
| DB_POSTGRES_USER     | Nome do usuário do banco de dados    |
| DB_POSTGRES_PASSWORD | Senha do usuáŕio do banco de dados   |
| DB_POSTGRES_HOST     | Host de hospedagem do banco de dados |
| DB_POSTGRES_NAME     | Nome do banco de dados               |

## Rotas:

## Criar Cliente:

`POST /clientes`

REQUEST FORMAT

```json
{
  "nome": "arthur",
  "cpf": "109.374.154-65",
  "data_nasc": "08/19/1993",
  "telefone": "81983498699",
  "ativo": 1
}
```

---

RESPONSE FORMAT STATUS 201

```json
{
  "nome": "Arthur",
  "cpf": "10937123415",
  "data_nasc": "08/17/1993",
  "telefone": "81983498699",
  "ativo": 1,
  "id": 1
}
```

---

## Criar Pedido:

`POST /pedidos/:cliente_id`

REQUEST FORMAT

```json
{
  "produto": "calça",
  "valor": 20.2,
  "data": "04/10/2022",
  "ativo": 1
}
```

---

RESPONSE FORMAT STATUS 201

```json
{
  "produto": "calça",
  "valor": 20.2,
  "data": "04/10/2022",
  "ativo": 1,
  "cliente_id": "1",
  "cliente": {
    "nome": "Arthur",
    "cpf": "10937123415",
    "data_nasc": "08/17/1993",
    "telefone": "81983498699",
    "ativo": 1,
    "id": 1
  },
  "id": 1,
  "pedido_status_id": 1
}
```

---

## Enviar imagem:

`POST /imagem/pedido/:pedido_id`

REQUEST FORMAT

Multipart Form
Nome do campo: file

Escolhe o arquivo que deseja enviar

---

RESPONSE FORMAT STATUS 201

```json
{
  "imagem": "nomeDaImagem.extensão",
  "capa": "nomeDaImagem.extensão",
  "pedido_id": 1,
  "id": 1
}
```

---

## Visualizar clientes:

`GET /clientes`

REQUEST FORMAT

```json
No body
```

---

RESPONSE FORMAT STATUS 200

```json
[
  {
    "nome": "Arthur",
    "cpf": "10937123415",
    "data_nasc": "08/17/1993",
    "telefone": "81983498699",
    "ativo": 1,
    "id": 1
  }
]
```

---

## Visualizar pedidos:

`GET /pedidos`

REQUEST FORMAT

```json
No body
```

---

RESPONSE FORMAT STATUS 200

```json
[
  {
    "id": 1,
    "produto": "calça",
    "valor": 20.2,
    "data": "2022-04-10T03:00:00.000Z",
    "ativo": 1,
    "cliente_id": 1,
    "pedido_status_id": 1
  }
]
```

---

## Created User:

`GET /download/csv`

REQUEST FORMAT

```json
No body
```

---

RESPONSE FORMAT STATUS 200

Gera e exporta um arquivo CSV com todos os pedidos

---
