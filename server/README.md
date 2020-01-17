# Generate DB migration
`npx sequelize-cli migration:generate --name alter-table-or-else`

# Initialize and migrate DB
`npx sequelize-cli db:migrate`

# Undo migration
- Revert most recent migration.
`npx sequelize-cli db:migrate:undo`

- Revert back to initial state by undoing all migrations with  command. 
`npx sequelize-cli db:migrate:undo:all`

-Revert back to a specific migration by passing its name in --to option.
`npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-user.js`


# Seed data
- Create seed data
`npx sequelize-cli seed:generate --name demo-user` where demo-user is the name suffix for the seed data file

- Populate DB with seed data
`npx sequelize-cli db:seed:all`

- Seed a particular file
`npx sequelize-cli db:seed --seed 20191117003257-categories`


- Undo seed data
If you wish to undo most recent seed
`npx sequelize-cli db:seed:undo`

If you wish to undo a specific seed
`npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`

If you wish to undo all seeds
`npx sequelize-cli db:seed:undo:all`

# DB Alter
```
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'openapi_categories',
      'completed',
     Sequelize.BOOLEAN
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'openapi_categories',
      'completed',
    );
  }
};
````