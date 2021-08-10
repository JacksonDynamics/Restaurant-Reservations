
exports.up = async function (knex) {
    return knex.schema.table('reservations', (table) => {
      table.string('status').notNullable().defaultTo('booked'); //Add a new column 'status'
    });
  };
  
  exports.down = async function (knex) {
    return knex.schema.table('reservations', (table) => {
      table.dropColumn('status');
    });
  };