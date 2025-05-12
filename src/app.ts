import express from 'express';
import routes from './routes';

const app = express();

// Set up middleware for request parsing, logging, etc.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load up the routes
app.use('/', routes);

export default app;
