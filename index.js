const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const app = require('./app');
const Todo = require('./todos.controller');
// const uri = 'mongodb+srv://pyr:9401@novm-7ugeg.mongodb.net';
const uri = 'mongodb+srv://9pyr:9401@novm-europe-2iz6a.mongodb.net';
MongoClient.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err)
      console.log('\x1b[31m', `\n database error: ${err} \n`, '\x1b[37m');
    else console.log('\x1b[32m', `\n database Connect \n`, '\x1b[37m');

    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
      console.log('\x1b[37m', `\n App listening on port ${PORT}! \n`);
    });

    //! Collection
    const db = client.db('novm');

    exports.todos = db.collection('todos');

    //! Request
    const route = app;
    route.use(function (req, res, next) {
      res.header(
        'Access-Control-Allow-Methods',
        'POST, GET, PUT, PATCH, DELETE, OPTIONS'
      );
      next();
    });

    route.get('/todos', Todo.findAll);
    route.post('/todo', Todo.create);
    route.put('/todo', Todo.update);
    route.delete('/todo', Todo.delete);
  }
);
