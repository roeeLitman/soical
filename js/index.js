import exp from 'express';
// load enviroment variables
import 'dotenv/config';
import authController from './controllers/authControllers';
import userController from './controllers/userControllers';
import postController from './controllers/postControllers';
//main variable
const app = exp();
//mw
app.use("/auth", authController);
app.use("/user", userController);
app.use("/post", postController);
// listen to port 
app.listen(process.env.PORT, () => console.log(`your server is : http:localhost${process.env.PORT}`));
