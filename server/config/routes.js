var task = require('../controllers/quotes.js')

module.exports = function(app){

    app.get('/all', task.show);
      
      app.post('/new', task.add);
      
      app.delete('/remove/:id/', task.delete);
      
      app.get('/show/:id', task.info);
      
      app.put('/edit/:id', task.update);
}