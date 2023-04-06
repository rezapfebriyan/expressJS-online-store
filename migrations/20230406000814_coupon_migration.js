exports.up = function(knex) {
    return knex.schema
        .createTable('coupons', function (table) {
            table.increments('id');
            table.string('code', 20).notNullable();
            table.string('description', 100).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('coupons');
};