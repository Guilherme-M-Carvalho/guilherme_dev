import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors';
import cors from "cors";
import AppDataSource from "./data-source";
import { Route }  from "./route";
import cookieParser from "cookie-parser"
import session from 'express-session';
import path from "path";
import https from "https"
import fs from "fs"

const app = express();

const corsOptions = {
     origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(session({
     secret: 'keyboard cat',
     cookie: {
          maxAge: 10000, // 30 minutos
     },
     resave: false,
     saveUninitialized: true,
}))

// const uploadFolder = path.resolve(__dirname, '../uploads')
// app.use(
//      '/files', express.static(uploadFolder)
// )

new Route().handler(app);
// const pathReact = __dirname + '/views/';
// app.use(express.static(pathReact));
// app.get('*', function (req, res) {
//      res.sendFile(pathReact + "index.html");
// });

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
     if (err instanceof Error) {
          try {
               JSON.parse(err.message)
          } catch (error) {
               return res.status(400).json({
                    error: err.message
               });
          }
          return res.status(400).json(JSON.parse(err.message));
     }

     return res.status(500).json({
          status: 'error',
          message: "Internal server error"
     });

});

AppDataSource.initialize().then(async () => {
     console.log('BD Conectado!');
     app.listen(80,() => console.log("deu certo"));
});