# Syncano Socket for storing Event type of data

[![Syncano Socket](https://img.shields.io/badge/syncano-socket-blue.svg)](https://syncano.io)
[![CircleCI branch](https://img.shields.io/circleci/project/github/eyedea-io/syncano-socket-event/master.svg)](https://circleci.com/gh/eyedea-io/syncano-socket-event/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/eyedea-io/syncano-socket-event/master.svg)](https://codecov.io/github/eyedea-io/syncano-socket-postal-address/)
[![npm](https://img.shields.io/npm/dw/@eyedea-sockets/postal-address.svg)](https://www.npmjs.com/package/@eyedea-sockets/postal-address)
![license](https://img.shields.io/github/license/eyedea-io/syncano-socket-event.svg)
[![schama.org](https://img.shields.io/badge/based_on-schema.org-990001.svg)](https://schema.org/Event)

Main Socket features:

* **event/add** — add Event object
* **event/update** — update Event object
* **event/delete** — delete Event object

## Getting Started

Install package in your project:

```sh
cd my_project
npm install @syncano/cli --save-dev
npm install @eyedea-sockets/event --save
npx s deploy
```

Use it:

```js
import Syncano from '@syncano/client'

const s = new Syncano(<instaneName>)

// PostalAddress params
const params = {
  name: 'TypeScript training',
  startDate: '1948-09-06T04:36:47.236Z',
  endDate: '1960-04-24T02:02:29.279Z'
}

const suggestions = await s.post('event/add', params)
```
