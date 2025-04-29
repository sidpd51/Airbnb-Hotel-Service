'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface) {
   await queryInterface.sequelize.query(`
    Alter table hotels 
    add column rating decimal(3,2) default null,
    add column rating_count int default null;
    `);
  },

  async down (queryInterface:QueryInterface) {
   await queryInterface.sequelize.query(`
    Alter table hotels 
    drop column rating,
    drop column rating_count;
    `);
  }
};
