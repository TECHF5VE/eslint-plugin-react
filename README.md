# @tech-f5ve/eslint-plugin-react

Some eslint rules ,if you use react ,they will be useful.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `@tech-f5ve/eslint-plugin-react`:

```
$ npm install @tech-f5ve/eslint-plugin-react --save-dev
```

## Usage

Add `@tech-f5ve/react` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@tech-f5ve/react"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@tech-f5ve/react/rule-name": 2
  }
}
```

## Supported Rules

- JSXExpression-right-not-node
- space-between-word
