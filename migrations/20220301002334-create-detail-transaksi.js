'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_transaksi', {
      transaksi_id: {
        type: Sequelize.INTEGER,
        llowNull: false,
        references: {
          model: "transaksi",
          key: "transaksi_id"
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        llowNull: false,
        references: {
          model: "product",
          key: "product_id"
        }
      },
      price: {
        type: Sequelize.DOUBLE
      },
      qty: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('detail_transaksis');
  }
};