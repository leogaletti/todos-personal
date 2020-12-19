module.exports = app => {
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`API Runnig at port ${PORT}`)
  });
  
  app.use((request, response, next) => {
    response.status(404).send()
  }) 
}