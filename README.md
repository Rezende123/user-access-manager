
## Descrição do Projeto

API que cuida do cadastro de usuários e da quantidade de acessos ao sistema. Conecta-se a um banco de dados [Mongo DB](https://www.mongodb.com/) para salvar e acessar os dados dos usuários e utiliza a [CountAPI](https://countapi.xyz/) para fazer a contagem dos acessos do site.

## 📝 Descrevendo Solução

Aplicação desenvolvida com o framework [NestJS](https://nestjs.com/), por facilitar a implementação da **Clean Architecture** através do Typescript e dos diversos recursos estruturais do framewor. Arquitetura que foi escolhida por ser testável e pela independência das camadas de software, o que reduz os custos de manutenção.

A escrita do código seguiu os conceitos de **Clean Code** aplicados ao Typescript, ainda assim grande parte das classes e métodos estão documentadas no código, para que a leitura e o entendimento se tornem mais práticos. O [eslint](https://eslint.org/) e o [prettier](https://prettier.io/) também foram ultilizados para que seja mantido um padrão de escrita na aplicação.

Foram implementados os testes unitários dos controllers e dos serviços usando a ferramenta [Jest](https://jestjs.io/pt-BR/).

## 🚀 Instalando o projeto

```bash
$ git clone https://github.com/Rezende123/user-access-manager.git
$ cd user-access-manager
$ npm install
```

## :earth_americas: Configuração de Ambientes

O projeto foi desenvolvido na versão `14.17.5` do node, para chegar nela é possível excecutar o seguinte comando:

```bash
$ n 14.17.5
```

Os ambientes de acesso do aplicativo estão definidos na pasta ENVIRONMENTS.

* .env.dev => Variáveis para conexão com ambiente de desenvolvimento.
* .env.prod => Variáveis para conexão com ambiente de produção.

Para selecionar o ambiente a ser utilizado, deve ser utilizado o comando que se refere ao nome do ambiente (dev, prod), flexionando apenas a última palavra do comando:

```bash
$ npm run env:dev
```

## ☕ Usando o projeto

```bash
# Desenvolvimento
$ npm run start

# Modo observação
$ npm run start:dev

# Modo produção
$ npm run start:prod
```
O aplicativo rodará localmente em http://localhost:3000.

## :clipboard: Teste automatizado

```bash
# Teste geral
$ npm run test

# Modo observação
$ npm run test:watch

# Verifica a cobertura do teste no código
$ npm run test:cov
```

## :green_book: Swagger

**Ao rodar o aplicativo**, um swagger desenvolvido através do próprio NestJS que disponibiliza um [módulo](https://docs.nestjs.com/openapi/introduction) que usa a OpenApi para gerar o swagger, estará disponível em http://localhost:3000/api.

## :cloud: Deploy

O deploy foi feito utilizando a plataforma [Heroku](https://dashboard.heroku.com/), por ser uma plataforma gratuita.

A api está disponível em https://user-access-manager.herokuapp.com, desta forma o **swagger** pode ser acessado em https://user-access-manager.herokuapp.com/api.


## :heavy_minus_sign: Serverless

A Arquitetura Serverless foi implementada utilizando a própria ferramenta [serverless](https://www.serverless.com/). Para execução em desenvolvimento basta:

```bash
$ npm run start:serverless
```

Neste caso a api vai rodar em http://localhost:3000/dev e o swagger estará disponível em http://localhost:3000/dev/api.

**Obs.:** A execução das requisições a partir do swagger em modo desenvolvimento através do serverless retornarão erro, pois a openapi vai entender a url como http://localhost:3000 e não http://localhost:3000/dev, como deveria ser.