const table = 'users'

module.exports = (knex) => {
    module.getAllUsers = () => knex.column(
        'id','name', 'email', 'phone'
    ).table(table)

    module.getUserById = (id) => knex.column(
        'id', 'name', 'email', 'phone'
    ).where("id", id).first()
    .table(table)

    module.createUser = (body) => knex.table(table).insert(body)

    module.updateUser = (id, body) => knex.table(table)
        .where("id", id)
        .update(body)

    module.deleteUser = (id) => knex.table(table)
        .where("id", id)
        .del()
        
    return module
}