// During the test the env variable is set to test
process.env.NODE_ENV = "test";

const chai = require( "chai" );

const chaiHttp = require( "chai-http" );

import app from "../index";

const contact = require( "./modules/contact" );


const should = chai.should();

console.log(app ) 


chai.use( chaiHttp );
contact( chai, app, should );



