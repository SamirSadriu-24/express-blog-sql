
function errorHandler (err,req, res, next) {
    const status = err.status || 500;
    res.status(status).send( err.message || "C'è stato un errore imprevisto")
}

export default errorHandler;