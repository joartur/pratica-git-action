import dotenv from 'dotenv';
dotenv.config();

import app from './app';
import AppConfig from './configs';

// Start the API
const server = app.listen(AppConfig.APP_PORT, async () => {
  console.info(`API running on port ${AppConfig.APP_PORT}`);
  console.info(`Environment: ${AppConfig.NODE_ENV}`);
});

// Shutdown when receive a signal
const handlerSignal = (signal: string) => {
  console.info(`Proccess received a ${signal}, shutting down`);

  server.close(async () => {
    console.info('Server closed');
    process.exit();
  });
  // Force shutdown after 10s
  setTimeout(() => process.exit(1), 10000).unref();
};

process.on('SIGINT', handlerSignal);
process.on('SIGTERM', handlerSignal);
process.on('SIGHUP', handlerSignal);
