const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadastro-orm', 'root', '', {
    dialect: 'mysql',
    host: '127.0.0.1'
})
const models = {}
const fs = require('fs')
const path = require('path')
fs
    .readdirSync(__dirname)
    .filter((file) => file !=='index.js')
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        models[model.name] = model
    })

const pessoa = 

module.exports = {
    sequelize,
    models
}
