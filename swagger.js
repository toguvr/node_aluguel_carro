const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./src/swagger_output.json";
const endpointsFiles = [
  "./src/routes/categories.routes.ts",
  "./src/routes/specifications.routes.ts",
];

swaggerAutogen(outputFile, endpointsFiles);
