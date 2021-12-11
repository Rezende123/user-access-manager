
## Descrição do Projeto

API que cuida do cadastro de usuários e da quantidade de acessos ao sistema. Conecta-se a um banco de dados [Mongo DB](https://www.mongodb.com/) para salvar e acessar os dados dos usuários e utiliza a [CountAPI](https://countapi.xyz/) para fazer a contagem dos acessos do site.

## 📝 Descrevendo Solução

Aplicação desenvolvida com o framework NestJS, por facilitar a implementação da **Clean Architecture** através do Typescript e dos diversos recursos estruturais do framewor. Arquitetura que foi escolhida por ser testável e pela independência das camadas de software, o que reduz os custos de manutenção.

A escrita do código seguiu os conceitos de **Clean Code** aplicados ao Typescript, ainda assim grande parte das classes e métodos estão documentadas no código, para que a leitura e o entendimento se tornem mais práticos.

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
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
O aplicativo rodará localmente em `http://localhost:3000`

## Swagger

**Ao rodar o aplicativo**, um swagger detalhando o uso dos endpoints da API estará disponível em `http://localhost:3000/api`
