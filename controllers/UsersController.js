module.exports = app => {
  app.get('/users', (request, response) => {
    const sql = "select * from user"
    const params = []
    try {
      const users = app.configs.db.run(sql)  
      
      response.json({
        "message":"success",
        "data": users
      })
    } catch (error) {
      response.status(400).json({"error":err.message});
      return;
    }
  })
}