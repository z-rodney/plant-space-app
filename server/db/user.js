const { db } = require('./index')
const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

const User = db.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

User.authenticate = function (username, password) {
  
}

User.beforeCreate('hash password', async (user) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
})

module.exports = {
  User
}
