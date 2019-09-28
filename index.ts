import * as express from "express";
import * as bodyParser from "body-parser";
// cors is using to resolve CORS
import * as cors from "cors";
// imports all routes from routes module
import routes from "./src/routes";
import * as dotenv from "dotenv";
import * as mongoose from "mongoose";
import * as logger from "morgan";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // enable cors by adding cors middleware
    this.app.use(cors());

    this.app.use( logger( "dev" ) );

    // add routes
    this.app.use("/api/v1", routes);

    //
    dotenv.config({ path: ".env" });
  }

  private mongoSetup(): void {
    mongoose.connect(
      `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
      {
        useFindAndModify: false,
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

app.use( "/", ( req, res ) => {
  res.send( "API Running!" );
} );

export default app;
