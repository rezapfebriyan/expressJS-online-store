exports.up = function(knex) {
    return knex.schema
      .createTable('products', function (table) {
          table.increments('id');
          table.string('name', 30).notNullable();
          table.string('description', 100).notNullable();
          table.string('image', 100).notNullable();
          table.decimal('price').notNullable();
        })
};
  
exports.down = function(knex) {
return knex.schema
    .dropTable('products');
};