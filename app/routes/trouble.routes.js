module.exports = (app) => {
  const trouble = require("../controllers/trouble.controller.js");

  // Create a new Customer
  app.post("/trouble", trouble.create);

  // Retrieve all Customers
  app.get("/trouble", trouble.findAll);

  // Retrieve a single Customer with customerId
  app.get("/trouble/:troubleId", trouble.findOne);

  // Update a Customer with customerId
  app.put("/trouble/:troubleId", trouble.update);

  // Delete a Customer with customerId
  app.delete("/trouble/:troubleId", trouble.delete);

  // Create a new Customer
  app.delete("/trouble", trouble.deleteAll);
};
