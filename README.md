# backend-node

### Projeto Filmes

### Jeferson Gonçalves de Freitas

#### Tabelas de Relacionamentos
![img](https://github.com/freitas000jeferson/backend-node-exemplo/blob/main/Banco%20de%20filmes.png)

#### [endpoints no postman](https://www.getpostman.com/collections/bef02cefa5692f67d6b2)
    - https://www.getpostman.com/collections/bef02cefa5692f67d6b2

##### Admin
  - Cadastro
  - token
  - refresh token
  - desabilitar outros usuarios

##### Usuario
  - Cadastro
  - habilitar e desablilitar usuario pelo token
  - listagem
  - update
  
##### Atores, diretores, escritores, categorias 
  - create
  - update
  - delete
  - find by id(traz todos os filmes relacionados)
  - find all(paginado e traz todos os filmes relacionados)

##### Filmes
  - listagem (paginado e com filtro por *titulo, endDate, beginDate, sinopse, classificação etária, duração, filmes ativos*)
  - update(adição e remoção de *ator, diretor, escritor, categoria*)
  - habilitar e desablilitar filme
  - create

##### Midias do filme
  - adição de url de filmes e fotos
  - exclusão
  - alteração
  - listagem
 
##### Avaliação
  - adicionar titulo, descrição, nota e se é spoiler
  - listagem (paginado avaliações pelo *filme, nota, usuario, title, description, isSpoiler*)
  - alterar (so altera *title, description, isSpoiler, nota*)






