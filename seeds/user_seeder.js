exports.seed = async (knex) => /* Deletes ALL existing entries*/ knex('users').del()
    .then(() => {
        return knex('users').insert([
            { id: 1, name: 'Reza Putra Febriyan', email: 'rezafebriyan00@gmail.com', password: 'persija1928', phone: 6287837255556 }
        ]);
    })
