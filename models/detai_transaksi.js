'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detai_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.menu)
      this.belongsTo(models.transaksi)
    }
  }
  detai_transaksi.init({
    id_transaksi: DataTypes.INTEGER,
    id_menu: DataTypes.INTEGER,
    harga: DataTypes.INTEGER,
    qty: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'detai_transaksi',
  });
  return detai_transaksi;
};