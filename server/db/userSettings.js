const { db } = require('./db')
const { DataTypes } = require('sequelize')


const UserSetting = db.define('setting', {
  imageURL: DataTypes.STRING,
  location: DataTypes.STRING,
  bio: DataTypes.TEXT
})

module.exports = { UserSetting }
