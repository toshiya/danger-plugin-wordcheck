# danger-plugin-wordcheck

[![CircleCI](https://circleci.com/gh/toshiya/danger-plugin-wordcheck.svg?style=svg)](https://circleci.com/gh/toshiya/danger-plugin-wordcheck)
[![npm version](https://badge.fury.io/js/danger-plugin-wordcheck.svg)](https://badge.fury.io/js/danger-plugin-wordcheck)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> check the suspicous words in your codes: e.g. debugger, todo, foo, bar etc.

## Usage

Install:

```sh
yarn add danger-plugin-wordcheck --dev
```

At a glance:

create a wordcheck file. Single word per line 
```
echo "TODO\ndebugger\n" > wordcheck.txt 
```

feed the filename to wordcheck() function in dangerfile.js
```js
var wordcheck = require('danger-plugin-wordcheck').default
schedule(wordcheck("./.github/WORDCHECK.txt"))
```
## Changelog

See the GitHub [release history](https://github.com/toshiya/danger-plugin-wordcheck/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
