import express from 'express';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
import authorsRouter from './authors/index.js';
import blogsRouter from './blogs/index.js';
import {
  badRequestErrorHandler,
  notFoundErrorHandler,
  forbiddenErrorHandler,
  catchAllErrorHandler,
} from './errorHandlers.js';

const server = express();

const port = 3001;

// ******** GLOBAL MIDDLEWARES ************ //
server.use(cors());

server.use(express.json());

// ******** GLOBAL MIDDLEWARES ************ //

// ******** ROUTES ************ //

server.use('/authors', authorsRouter);

server.use('/blogs', blogsRouter);

// ******** ROUTES ************ //

// ******** ERROR MIDDLEWARES ************ //

server.use(badRequestErrorHandler);
server.use(notFoundErrorHandler);
server.use(forbiddenErrorHandler);
server.use(catchAllErrorHandler);

// ******** ERROR MIDDLEWARES ************ //

console.table(listEndpoints(server));

server.listen(port, () => {
  console.log('Server is running on port:', port);
});

// server.on('error', (error) =>
//   console.log(`server is not running due to ${error}`)
// );
