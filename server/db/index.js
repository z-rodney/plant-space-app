const Sequelize = require("sequelize")
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost/plant-space'
const db = new Sequelize(dbUrl, {
  logging: false
})
const { DataTypes } = Sequelize 

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


module.exports = {
  db,
  Plant,
  Detail,
  //User
}
