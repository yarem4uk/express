import Express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import flash from 'flash';

export default () => {
  const app = new Express();
  app.disable('x-powered-by');
  app.use(morgan('dev'));
  app.use(methodOverride('_method'));
  app.set('view engine', 'pug');
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/assets', Express.static('/home/alex/hexlet/js/node_modules'));
  app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false,
  }));
  app.use(flash());


  app.get('/', (req, res) => {
    res.send('Hello Express');
  });

  return app;
};
