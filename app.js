const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const taskRoutes = require('./routes/taskRoutes');


const app = express();

app.use(express.json());
app.use(logger);

app.use("/api/tasks", taskRoutes);

// app.get("/api/tasks", (req, res) => {
//     res.send("Express'ten Merhaba!!");
// })

app.use(errorHandler);

module.exports = app;