import app from "./app";
import logger from "./config/logger.config";
// import connectDB from "./config/db/connectDB";

// import { PORT } from "./utils/variables";

const PORT = process.env.PORT || 1997;

// connectDB();
let server = app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

// Exit process on unhandled promise rejection
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  logger.error(error);
  exitHandler();
};

process.on("unhandledRejection", unexpectedErrorHandler);
process.on("uncaughtException", unexpectedErrorHandler);

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (server) {
    server.close();
    logger.info("Server closed");
    process.exit(1);
  }
});
