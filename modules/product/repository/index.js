const table = 'products'

module.exports = (knex) => {
    module.getAllProducts = () => knex.select().table(table)

    module.getProductById = (id) => knex.select()
        .where("id", id).first()
        .table(table)

    module.createProduct = (body) => knex.table(table).insert(body)

    module.updateProduct = (id, body) => knex.table(table)
        .where("id", id)
        .update(body)

    module.deleteProduct = (id) => knex.table(table)
        .where("id", id)
        .del()
        
    return module
}