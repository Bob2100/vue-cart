module.exports = {
  configureWebpack: {
    devServer: {
      before(app) {
        app.get("/api/goods", function (req, res) {
          function* IdGenerator() {
            let id = 0;
            while (true) {
              yield id++;
            }
          }
          const idGenerator = IdGenerator();
          res.json({
            code: 0,
            list: [
              { id: idGenerator.next().value, text: "Java架构师", price: 200 },
              { id: idGenerator.next().value, text: "前端架构师", price: 20000 },
              { id: idGenerator.next().value, text: "PHP架构师", price: 100 }
            ]
          });
        });
      }
    }
  }
};
