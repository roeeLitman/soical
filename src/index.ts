import exp,{Express} from 'express';

// load enviroment variables
import  'dotenv/config'
import authController from './controllers/authControllers'
import userController from './controllers/userControllers'
import postController from './controllers/postControllers'

//main variable
const app: Express = exp();

//mw
app.use("/auth",authController)
app.use("/user",userController)
app.use("/post",postController)

// listen to port 
app.listen(process.env.PORT, ():void => console.log(`your server is : http:localhost${process.env.PORT}`));



