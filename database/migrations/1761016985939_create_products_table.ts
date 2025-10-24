import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 100).notNullable
      table.integer('price').notNullable()
      table.string('img', 255).notNullable()
      table.string('varietas', 50).notNullable()
      table.string('flavor_notes', 100).notNullable()
      table.string('netto', 20).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
