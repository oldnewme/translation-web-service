# translation-web-service
## To run locally
1. run npm install to set up dependencies
2. Set up a mysql server and provide credentials in src/integration/dao.js (row 5-9)
3. run npm start in parent folder
4. routes are now accesible at port 8080

## Provided api routes
GET /translation/{or at language_id}/{key} => gets translation matching the language_id and key
POST /translation => given a json object with language_id, key and translation it will be persisted in the database

