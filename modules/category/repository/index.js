const table = 'categories'

module.exports = (knex) => {
    module.getAllCategories = () => knex.select().table(table)

    module.getCategoryById = (id) => knex.select()
        .where("id", id).first()
        .table(table)

    module.createCategory = (body) => knex.table(table).insert(body)

    module.updateCategory = (id, body) => knex.table(table)
        .where("id", id)
        .update(body)

    module.deleteCategory = (id) => knex.table(table)
        .where("id", id)
        .del()
        
    return module
}