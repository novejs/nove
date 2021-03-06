# Nove

[![Travis](https://img.shields.io/travis/novejs/nove.svg)](https://github.com/novejs/nove) 
[![Codecov](https://img.shields.io/codecov/c/github/novejs/nove.svg)](https://github.com/novejs/nove) [![npm](https://img.shields.io/npm/v/nove.svg)](https://github.com/novejs/nove) [![license](https://img.shields.io/github/license/novejs/nove.svg)](https://github.com/novejs/nove)

A creative framework for building enterprise applications with TypeScript.

Inspired by [Nestjs](https://nestjs.com/) and [routing-controllers](https://github.com/typestack/routing-controllers).

## Installation

```bash
npm install nove --save
```

## Quick Start

General, you should create a main app instance, a controller and one method belong to controller for handle request at least. Quick start with a file:

```typescript
// app.ts
import { Nove, Controller, GET } from 'nove';

@Controller('/')
class MyController {
    @GET('/')
    async index () {
        return { name: 'Jason' };
    }
}

const app = new Nove({
    controllers: [MyController]
});

app.listen(3000, () => {
    console.log('server now at: http://localhost:3000/');
});
```

Use `ts-node` to run typescript directly:

```bash
ts-node app.ts
```

And then visit `http://localhost:3000/` with your browser.

## LICENSE

[MIT LICENSE](https://jas0ncn.mit-license.org/)

Copyright (c) 2017-present, JasonChen (Junyi Chen).
