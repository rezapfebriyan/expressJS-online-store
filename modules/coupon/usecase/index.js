module.exports = (repository) => {
    module.getAllCoupons = () => repository.getAllCoupons()

    module.getCouponById = (id) => repository.getCouponById(id)

    module.createCoupon = (body) => repository.createCoupon(body)

    module.updateCoupon = (id, body) => repository.updateCoupon(id, body)

    module.deleteCoupon = (id) => repository.deleteCoupon(id)
    
    return module
}