module.exports = (app, usecase) => {
    const getAllCoupons = async (_, res) => {
        try {
            const data = await usecase.getAllCoupons()
            res.json({
                'status': 200,
                data
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const getCouponById = async (req, res) => {
        try {
            const data = await usecase.getCouponById(req.params.id)
            res.json({
                'status': 200,
                data
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }       
    }

    const createCoupon = async (req, res) => {
        try {
            let code = req.body.code
            let description = req.body.description

            await usecase.createCoupon({ code, description })

            res.json({ 
                'status': 201,
                message: 'Coupon has been created'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    const updateCouponById = async (req, res) => {
        try {
            let id = req.params.id
            let code = req.body.code
            let description = req.body.description
            const body = { code, description }

            await usecase.updateCoupon( id, body )

            res.json({ 
                'status': 200,
                message: 'Coupon has been updated'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }              
    }

    const deleteCouponById = async (req, res) => {
        try {
            await usecase.deleteCoupon(req.params.id)

            res.json({ 
                'status': 200,
                message: 'Coupon has been deleted'
            })
        } catch (err) {
            res.json({
                'status': 500,
                message: err
            })
        }
    }

    app.get("/coupons", getAllCoupons)
    app.get("/coupons/:id", getCouponById)
    app.post("/coupons", createCoupon)
    app.put("/coupons/:id", updateCouponById)
    app.delete("/coupons/:id", deleteCouponById)
}