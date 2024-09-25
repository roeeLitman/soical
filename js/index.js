"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// load enviroment variables
require("dotenv/config");
const authControllers_1 = __importDefault(require("./controllers/authControllers"));
const userControllers_1 = __importDefault(require("./controllers/userControllers"));
const postControllers_1 = __importDefault(require("./controllers/postControllers"));
//main variable
const app = (0, express_1.default)();
//mw
app.use("/auth", authControllers_1.default);
app.use("/user", userControllers_1.default);
app.use("/post", postControllers_1.default);
// listen to port 
app.listen(process.env.PORT, () => console.log(`your server is : http:localhost:${process.env.PORT}`));
