# express-sequelize-crud-router [![npm](https://img.shields.io/npm/v/express-sequelize-crud-router.svg?style=flat-square)]() [![npm](https://img.shields.io/npm/dm/express-sequelize-crud-router.svg?style=flat-square)]() [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![npm](https://img.shields.io/npm/l/express-sequelize-crud-router.svg?style=flat-square)](LICENSE)
express async wrapper that passes custom debug instance and returns 400 as default error code

## Install

```
npm i -S express-sequelize-crud-router
or
npm install --save express-sequelize-crud-router
```

## Use

Require and initialize with the sequelize and an **optional** `debug` instance:

```js
const debug = require('debug')('backend:routes:doc')
const CRUDRouter = require('express-sequelize-crud-router')

const model = require('./my-sequelize-models').model

const router = CRUDRouter({model, debug})

// More routes
router.get('/custom', ...)

module.exports = router
```

## Related

- [express-route-autoloader](https://github.com/DiegoRBaquero/express-route-autoloader)
- [express-debug-async-wrap](https://github.com/DiegoRBaquero/express-debug-async-wrap)
- [sequelize-express-findbyid](https://github.com/DiegoRBaquero/sequelize-express-findbyid)

## License

MIT Copyright © [Diego Rodríguez Baquero](https://diegorbaquero.com)