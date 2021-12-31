'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
        type:Sequelize.DATE,
        allowNull: true,

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Pessoas', 'deletedAt');
  }
};