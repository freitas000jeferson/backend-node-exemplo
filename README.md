# backend-node

### Projeto Filmes

### Jeferson Gonçalves de Freitas

#### Tabelas de Relacionamentos
![img](https://github.com/freitas000jeferson/backend-node-exemplo/blob/main/Banco%20de%20filmes.png)

#### [endpoints no postman](https://www.getpostman.com/collections/bef02cefa5692f67d6b2) 📃
    - https://www.getpostman.com/collections/bef02cefa5692f67d6b2

### Utilizado
   - javascript
   - node js 
   - sequelize
   - express
   - ESlint e Prettier
   - Testes com jest (*ainda incompleto*) 😞
   - Docker (crie com [ex]: docker create --name postgres-1 -e POSTGRES_PASSWORD=admin123 -p 5432:5432 postgres)
   - api do MailTrap.io para uns testes rsrs

### Breve Descrição

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
  - listagem (paginado e com filtro por *titulo, beginDate e endDate pelo lançamento, sinopse, classificação etária, duração, filmes ativos*)
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


### Algumas regras de negocios
  - o admin pode desabilitar um usuario(depende do motivo, vai q ele seja chato...)
  - o usuario so desabilita a si msm
  - so o admin pode desabilitar um filme, assim como cadastra-lo e altera-lo
  - no cadastro do filme coloca os ids dos atores, escritores, diretores, categorias, apos isso so sera adicionado e removido unitariamente
  - nos filmes ta levando a media das notas e outros dados como atores, categorias ...
  - alguns get by id e find all estão livres de token(menos os _get users_), pra facilitar quem entra e achar algo sem precisar se cadastrar
  - pra inserir uma nota será necessário um cadastro, e nao pode votar 2 vezes no msm filme(pode so alterar a nota)
  - [obs: Deu uns erros como: _SequelizeDatabaseError: missing FROM-clause entry for table "Category"_, que não soube como resolver (não teve stackoverflow a ajudasse 😢), queria uma ajuda dps rsrs]
  




