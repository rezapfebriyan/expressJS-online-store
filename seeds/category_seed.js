exports.seed = async (knex) => {
    // Deletes ALL existing entries
    return knex('categories').del()
    .then( () => {
        return knex('categories').insert([
            {id: 1, name: 'Learn Go Fiber'},
            {id: 2, name: 'Learn Spring Boot'},
            {id: 3, name: 'Learn Nest JS'},
            {id: 4, name: 'Learn Ruby on Rails'},
            {id: 5, name: 'Learn Python Django'}
        ]);
    })
}
