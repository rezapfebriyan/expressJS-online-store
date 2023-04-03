exports.seed = async (knex) => {
  // Deletes ALL existing entries
  return knex('products').del()
    .then( () => {
      return knex('products').insert([
        {id: 1, name: 'Laptop', description: "This is product laptop", image: 'https://placeimg.com/480/480/tech', price: 227000},
        {id: 2, name: 'HP Android', description: "This is product android", image: 'https://placeimg.com/480/480/tech', price: 138000},
        {id: 3, name: 'HP Iphone', description: "This is product iphone", image: 'https://placeimg.com/480/480/tech', price: 165000}
      ]);
    })
};
