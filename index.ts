import * as express from "express";
import * as bodyParser from "body-parser";
// cors is using to resolve CORS
import * as cors from "cors";
// imports all routes from routes module
import routes from "./src/routes";

import * as dotenv from "dotenv";

import * as mongoose from "mongoose";

class App {
  public app: express.Application;
  // public mongoUrl: string = 'mongodb://dalenguyen:123123@localhost:27017/CRMdb';

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // enable cors by adding cors middleware
    this.app.use(cors());

    // add routes
    this.app.use("/api/v1", routes);

    //
    dotenv.config({ path: ".env" });
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(
      `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

const app = new App().app;

app.listen(process.env.PORT_BASE, () => {
  console.log("Express server listening on port " + process.env.PORT_BASE);
});
