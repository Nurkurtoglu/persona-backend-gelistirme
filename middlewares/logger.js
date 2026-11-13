const logger = (req, res, next) => {
    
    console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    next();
}

module.exports = logger;