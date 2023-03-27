<h1 align="center">Insperal</h1>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Dir tree
* [src/](.\Insperal\src)
  * [auth/](.\Insperal\src\auth)
    * [auth.controller.ts](.\Insperal\src\auth\auth.controller.ts)
    * [auth.module.ts](.\Insperal\src\auth\auth.module.ts)
    * [auth.service.ts](.\Insperal\src\auth\auth.service.ts)
    * [jwt-auth.guard.ts](.\Insperal\src\auth\jwt-auth.guard.ts)
    * [roles-auth.decorator.ts](.\Insperal\src\auth\roles-auth.decorator.ts)
    * [roles.guard.ts](.\Insperal\src\auth\roles.guard.ts)
  * [exeptions/](.\Insperal\src\exeptions)
    * [validationException.ts](.\Insperal\src\exeptions\validationException.ts)
  * [pipes/](.\Insperal\src\pipes)
    * [validation.pipes.ts](.\Insperal\src\pipes\validation.pipes.ts)
  * [roles/](.\Insperal\src\roles)
    * [dto/](.\Insperal\src\roles\dto)
      * [create-role.dto.ts](.\Insperal\src\roles\dto\create-role.dto.ts)
    * [enums/](.\Insperal\src\roles\enums)
      * [role.enum.ts](.\Insperal\src\roles\enums\role.enum.ts)
    * [roles.controller.ts](.\Insperal\src\roles\roles.controller.ts)
    * [roles.model.ts](.\Insperal\src\roles\roles.model.ts)
    * [roles.module.ts](.\Insperal\src\roles\roles.module.ts)
    * [roles.service.ts](.\Insperal\src\roles\roles.service.ts)
    * [user-roles.model.ts](.\Insperal\src\roles\user-roles.model.ts)
  * [users/](.\Insperal\src\users)
    * [dto/](.\Insperal\src\users\dto)
      * [add-role.dto.ts](.\Insperal\src\users\dto\add-role.dto.ts)
      * [ban-user.dto.ts](.\Insperal\src\users\dto\ban-user.dto.ts)
      * [create-user.dto.ts](.\Insperal\src\users\dto\create-user.dto.ts)
    * [users.controller.ts](.\Insperal\src\users\users.controller.ts)
    * [users.model.ts](.\Insperal\src\users\users.model.ts)
    * [users.module.ts](.\Insperal\src\users\users.module.ts)
    * [users.service.ts](.\Insperal\src\users\users.service.ts)
  * [women-accounting/](.\Insperal\src\women-accounting)
    * [dto/](.\Insperal\src\women-accounting\dto)
      * [create-WA.dto.ts](.\Insperal\src\women-accounting\dto\create-WA.dto.ts)
      * [delete-WA.dto.ts](.\Insperal\src\women-accounting\dto\delete-WA.dto.ts)
      * [update-WA.dto.ts](.\Insperal\src\women-accounting\dto\update-WA.dto.ts)
    * [enums/](.\Insperal\src\women-accounting\enums)
      * [index-card.enum.ts](.\Insperal\src\women-accounting\enums\index-card.enum.ts)
      * [locality.enum.ts](.\Insperal\src\women-accounting\enums\locality.enum.ts)
      * [rank.enum.ts](.\Insperal\src\women-accounting\enums\rank.enum.ts)
      * [sex.enum.ts](.\Insperal\src\women-accounting\enums\sex.enum.ts)
      * [vlk-result.enum.ts](.\Insperal\src\women-accounting\enums\vlk-result.enum.ts)
    * [women-accounting.controller.ts](.\Insperal\src\women-accounting\women-accounting.controller.ts)
    * [women-accounting.model.ts](.\Insperal\src\women-accounting\women-accounting.model.ts)
    * [women-accounting.module.ts](.\Insperal\src\women-accounting\women-accounting.module.ts)
    * [women-accounting.service.ts](.\Insperal\src\women-accounting\women-accounting.service.ts)
  * [app.module.ts](.\Insperal\src\app.module.ts)
  * [main.ts](.\Insperal\src\main.ts)
* [test/](.\Insperal\test)
  * [app.e2e-spec.ts](.\Insperal\test\app.e2e-spec.ts)
  * [jest-e2e.json](.\Insperal\test\jest-e2e.json)
* [.eslintrc.js](.\Insperal\.eslintrc.js)
* [.example.env](.\Insperal\.example.env)
* [.gitignore](.\Insperal\.gitignore)
* [.prettierrc](.\Insperal\.prettierrc)
* [docker-compose.yml](.\Insperal\docker-compose.yml)
* [Dockerfile](.\Insperal\Dockerfile)
* [nest-cli.json](.\Insperal\nest-cli.json)
* [package-lock.json](.\Insperal\package-lock.json)
* [package.json](.\Insperal\package.json)
* [README.md](.\Insperal\README.md)
* [tsconfig.build.json](.\Insperal\tsconfig.build.json)
* [tsconfig.json](.\Insperal\tsconfig.json)
