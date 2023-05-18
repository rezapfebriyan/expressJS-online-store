const table = 'coupons'

module.exports = (knex) => {
    module.getAllCoupons = () => knex.select().table(table)

    module.getCouponById = (id) => knex.select()
        .where("id", id).first()
        .table(table)

    module.createCoupon = (body) => knex.table(table).insert(body)

    module.updateCoupon = (id, body) => knex.table(table)
        .where("id", id)
        .update(body)

    module.deleteCoupon = (id) => knex.table(table)
        .where("id", id)
        .del()
        
    return module
}