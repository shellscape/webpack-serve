[tests]: 	https://img.shields.io/circleci/project/github/shellscape/webpack-serve.svg
[tests-url]: https://circleci.com/gh/shellscape/webpack-serve

[cover]: https://codecov.io/gh/shellscape/webpack-serve/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/shellscape/webpack-serve

[size]: https://packagephobia.now.sh/badge?p=webpack-serve
[size-url]: https://packagephobia.now.sh/result?p=webpack-serve

[https]: https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener
[http2]: https://nodejs.org/api/http2.html#http2_http2_createserver_options_onrequesthandler
[http2tls]: https://nodejs.org/api/http2.html#http2_http2_createsecureserver_options_onrequesthandler

<div align="center">
	<img width="256" src="https://raw.githubusercontent.com/shellscape/webpack-serve/master/assets/serve.svg?sanitize=true" alt="webpack-serve"><br/><br/>
</div>

[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![size][size]][size-url]

# webpack-serve

{description}

A CLI for [`webpack-plugin-serve`](https://github.com/shellscape/webpack-plugin-serve) - A Webpack development server in a plugin.

<a href="https://www.patreon.com/shellscape">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

_Please consider donating if you find this project useful._

## Requirements

`webpack-serve` is an [evergreen 🌲](./.github/FAQ.md#what-does-evergreen-mean) module.

This module requires an [Active LTS](https://github.com/nodejs/Release) Node version (v8.0.0+ or v10.0.0+). The client scripts in this module require [browsers which support `async/await`](https://caniuse.com/#feat=async-functions). Users may also choose to compile the client script via an appropriately configured [Babel](https://babeljs.io/) webpack loader for use in older browsers.

## Feature Parity

{feature parity}

## Install

Using npm:

```console
npm install webpack-serve --save-dev
```

## Usage

{usage}

## Options

{link to wps options}

## Meta

[CONTRIBUTING](./.github/CONTRIBUTING.md)

[LICENSE (Mozilla Public License)](./LICENSE)
