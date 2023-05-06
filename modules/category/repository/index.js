const table = 'categories'

module.exports = (knex) => {
    module.getAllCategories = () => {
        return knex.select().table(table)
    }
    module.getCategoryById = (id) => {
        return knex.select()
            .where("id", id).first()
            .table(table)
    }
    module.createCategory = (body) => {
        return knex.table(table).insert(body)
    }
    module.updateCategory = (id, body) => {
        return knex.table(table)
            .where("id", id)
            .update(body)
    }
    module.deleteCategory = (id, body) => {
        return knex.table(table)
            .where("id", id)
            .del()
    }
    return module
}