module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.get("/api/goods", function(req, res) {
          res.json({
            code: 0,
            list: [
              { id: 1, text: "Java架构师", price: 200 },
              { id: 2, text: "前端架构师", price: 20000 },
              { id: 3, text: "PHP架构师", price: 100 }
            ]
          });
        });
      }
    }
  }
};
