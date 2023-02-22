import quizRouter from './quizRoute';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('hello wold');
    });

    // app.use('/api/user', userRouter);
    // app.use('/api/auth', authRouter);
    // app.use('/api/products', productsRouter);
    app.use('/api', quizRouter);
  }
}
