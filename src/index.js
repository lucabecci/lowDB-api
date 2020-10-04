const app = require("./app");
const { createConnection } = require('./database/database')
async function main() {
  await app.listen(4000)
  await createConnection()
  console.log("Server on port:", 4000);
}
main();
