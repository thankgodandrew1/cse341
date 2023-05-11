const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/contacts.js'];

const docs = {
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'An API to manage contacts'
    },
    host: 'cse341-web-service.onrender.com',
    basePath: '/contacts',
    schemes: ['https']
  };

swaggerAutogen(outputFile, endpointsFiles, docs).then(() => {
  console.log('Swagger documentation has been generated successfully!');
}).catch((error) => {
  console.error(error);
});