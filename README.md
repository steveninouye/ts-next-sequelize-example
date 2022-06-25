# Typescript Next JS App using Sequelize Example

It took me a week to figure out how to add Sequelize to my Next JS app so I wanted to share my approach so others can steal the pattern as well as welcome feedback.

## Installation

1. Create a `.env` file with the following values

```
// .env

DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=ts_next_sequelize_example
DB_PORT=5432
```

2. Run the following commands

```bash
# Install node packages
$ npm install
# Create the database
$ npm run db:create
# Run the migrations that will create the tables
$ npm run db:migrate
# Run the seed
$ npm run db:seed
```

## Development

1. Run the command

```bash
$ npm run dev
```
2. Visit http://localhost:3000