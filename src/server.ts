import express from 'express';
import { serverConfig } from './config';
import logger from './config/logger.config';
import sequelize from './db/models/sequelize';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT,async () => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);
    await sequelize.authenticate();
    logger.info('Database connection has been established successfully.');
});
