exports.seed = async (knex) => {
  // Deletes ALL existing entries
  return knex('coupons').del()
   .then( () => knex('coupons').insert([
       { id: 1, code: 'AKHIRTAHUN', description: "This is coupon for shop on last year" },
       { id: 2, code: 'HASBOLNAS', description: "This is coupon for shop on shooping online day" },
       { id: 3, code: 'GAJIAN', description: "This is coupon for shop when employee's payroll landed" },
       { id: 4, code: 'THR', description: 'This is coupon for shop on last day ramadhan' }
   ]))
}
