const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const BookSlots = sequelize.define("slots", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numberofslots: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = BookSlots;
