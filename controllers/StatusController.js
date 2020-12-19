module.exports = app => {
  app.get('/', (request, response) => {
    response.json({
      version: '1.0.0'
    });
  });
}