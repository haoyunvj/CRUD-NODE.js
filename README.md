# API REST de Seleções

Este é um projeto de API RESTful simples para gerenciar informações de seleções. A API permite a realização das operações CRUD (Create, Read, Update, Delete) para seleções, com persistência de dados usando MySQL.


## Funcionalidades

A API oferece as seguintes rotas:

- `GET /selecoes` - Retorna todas as seleções cadastradas.
- `GET /selecoes/:id` - Retorna uma seleção específica pelo seu ID.
- `POST /selecoes` - Cria uma nova seleção.
- `PUT /selecoes/:id` - Atualiza uma seleção existente.
- `DELETE /selecoes/:id` - Deleta uma seleção.

## Dependências

Este projeto utiliza as seguintes dependências:

- **express**: Framework para construção de APIs em Node.js.
- **mysql**: Driver MySQL para Node.js.
- **nodemon** (devDependency): Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.


