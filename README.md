# richlew.is

Personal website for Rich Lewis.

## Commands

The commands used for devlopment are run with `yarn [command]`.

### Development

The development server may be run using

```shell
yarn dev
```

Or to run all development processes:

```shell
yarn start
```

### Production

The production app may be built using

```shell
yarn build
```

and served using

```shell
yarn serve
```

Or run then served with

```shell
yarn start:prod
```

### Linting

Code may be linted using [eslint](https://eslint.org) with

```shell
yarn lint
```

Code is automatically linted on commit using a precommit hook using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

### Formatting

Automatic code formatting using [prettier](https://prettier.io) may be run with

```shell
yarn format
```
