'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('users', ['location'], {
      type: 'SPATIAL',
      name: 'spatial_index_location',
      using: 'GIST'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('users', 'spatial_index_location');
  }
};
