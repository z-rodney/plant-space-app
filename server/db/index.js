const { DataTypes } = require('sequelize')
const { db } = require('./db')

const { User } = require('./user')
const { UserSetting } = require('./userSettings')

const Plant = db.define('plant', {
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  imgUrl: DataTypes.STRING
})

const Detail = db.define('detail', {
  description: DataTypes.TEXT,
  wateringFrequency: DataTypes.STRING,
  light: DataTypes.STRING
})

Plant.hasOne(Detail)
Detail.belongsTo(Plant)

User.hasOne(UserSetting)
UserSetting.belongsTo(User)

/*User.hasMany(Plant)
Plant.belongsToMany(Plant)*/


module.exports = {
  db,
  Plant,
  Detail,
  User,
  UserSetting
}
