exports.up = function(knex) {
    return knex.schema
        .createTable('users', function (table) {
            table.increments('id');
            table.string('name', 30).notNullable();
            table.string('email', 30).notNullable();
            table.string('password', 200).notNullable();
            table.string('phone', 14).notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('users');
};