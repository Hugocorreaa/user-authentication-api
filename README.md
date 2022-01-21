# Microserviço de autenticação com Nodejs

Este é um projeto desenvolvido durante o Bootcomp INTER dentro da [DIO](https://digitalinnovation.one/), uma plataforma de cursos gratuíta que todo DEV deveria conhecer! :wink:

Neste projeto criei um **microserviço de autenticação** :hammer::wrench:

## Composição do projeto

Neste projeto temos alguns **Endpoints Base** que podem ser extendidos da forma mais adequada para seu contexto. 

São eles:

### Usuários

* GET /users
* GET /users/:uuid
* POST /users
* PUT /users/:uuid
* DELETE /users/:uuid

### Autenticação

* POST /token
* POST /token/validate
