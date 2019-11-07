 
exports.up = function (knex) {
  return knex.schema.createTable('campList', table => {
    table.increments('id').primary()
    table.string('Name')
    table.string('Address')
    table.boolean('PoweredSite')
    table.boolean('UnpoweredSite')
    table.boolean('Tent')
    table.boolean('Campervan')
    table.boolean('PotableWater')
    table.boolean('KitchenFacitilies')
    table.boolean('hotShower')
    table.boolean('coldShower')
    table.boolean('flushToilet')
    table.boolean('beachFront')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('campList')
}
