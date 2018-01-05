const Debug = require('debug')
const express = require('express')
const Wrapper = require('express-debug-async-wrap')
const sef = require('sequelize-express-findbyid')

const router = express.Router()

module.exports = ({
                    model,
                    debug = Debug(`routes:${model.name.toLowerCase()}s`),
                    routes = ['create', 'readAll', 'read', 'update', 'delete'],
                    exclude = []
                  }) => {
  routes = routes.filter(r => !exclude.includes(r))
  const wrapper = Wrapper(debug)
  const findById = sef(model)

  if (routes.includes('create')) {
    router.post('/', wrapper(async (req, res) => {
      res.status(201).send(await model.create(req.body))
    }))
  }

  if (routes.includes('readAll')) {
    router.get('/', wrapper(async (req, res) => {
      res.send(await model.findAll({order: [['id', 'ASC']]}))
    }))
  }

  if (routes.includes('read')) {
    router.get('/:id', wrapper(async (req, res) => {
      res.send(await findById(req.params.id))
    }))
  }

  if (routes.includes('update')) {
    router.patch('/:id', wrapper(async (req, res) => {
      let result = await findById(req.params.id)
      res.send(await result.update(req.body))
    }))
  }

  if (routes.includes('delete')) {
    router.delete('/:id', wrapper(async (req, res) => {
      let result = await findById(req.params.id)
      await result.destroy()
      res.send(result)
    }))
  }

  return router
}
