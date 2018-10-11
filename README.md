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

### Storybook

The components of the website are detailed in a [storybook](https://storybook.js.org).
This may be run using:

```shell
yarn storybook
```

It can be built using

```shell
yarn storybook:build
```

## Contributing

Pull requests are welcome! Please stick to the code formats enforced by the linting tooling.
Also bear in mind that commit messages must conform to the [conventional commits specification](https://www.conventionalcommits.org/); to this end, the repo uses [commitlint](http://marionebl.github.io/commitlint/) to ensure this.

### File generation

The project uses [plop](https://plopjs.com) to generate boilerplate when scaffolding new functionality, for example when adding a new component.
Plop may be run using

```shell
yarn generate
```
