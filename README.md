Teste para desenvolvedor da Stiff Code
==============================

Olá candidato,

Esse teste consiste em 2 etapas para avaliarmos seu conhecimento em PHP e Front-End (HTML5, CSS e JavaScript)

Para realizar o teste, você deve dar um fork neste repositório, gerar a partir do laravel os itens abaixo.

Crie um branch com seu nome, e quando finalizar todo o desenvolvimento, você deverá enviar um pull-request com sua versão.

O teste
--------

### Back-End/PHP

A primeira etapa será o desenvolvimento **backend/PHP + Laravel**:

**Descrição:**

- Você deverá desenvolver uma 'mini api' para que seja possível realizar operações CRUD do objeto Carro.
> **Obs:**
> - Você deve utilizar o banco de dados MySQL
> - Cada carro deve ter ID, Marca, Modelo, Ano.

Sugerimos as seguintes rotas:

 - `/carros` - [GET] deve retornar todos os carros cadastrados.
 - `/carro` - [POST] deve cadastrar um novo carro.
 - `/carro/{id}`[GET] deve retornar o carro com ID especificado.
 - `/carro/{id}`[PUT] deve atualizar os dados do carro com ID especificado.
 - `/carro/{id}`[DELETE] deve apagar o carro com ID especificado.

### Front-End

Para a segunda etapa do teste, você deverá desenvolver uma SPA (Single Page Application) e nela deve ser possível:

- Ver a lista de carros cadastrados
- Criar um novo carro
- Editar um carro existente
- Apagar um carro existente
- Gerar um arquivo XLS com todos os carros cadastrados

> **Obs:**
> - A página deve ser responsiva.
> - A página deve funcionar 100% via AJAX, sem outros carregamentos de páginas.
> - Ao criar/editar um carro, o campo "marca" deverá ser um `SELECT`

### Observações importantes:

- Você pode usar ferramentas de automação (Grunt, Gulp), mas deverá informar o uso completo para funcionamento do teste.
- Será considerado ponto positivo no teste a utilização de JS puro, orientação a objetos, design patterns e rotinas para testes.
- Será considerado ponto positivo o tempo gasto na realização do teste. Menos tempo e tudo funcionando conforme pedido será melhor avaliado.
- Será considerado ponto positivo caso os ID tenha uma hash correspondente e um bind para o ID dentro do arquivo routes.
