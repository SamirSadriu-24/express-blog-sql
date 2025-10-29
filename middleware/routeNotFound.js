

function routeNotFound(req, res, next) {
    res.status(404).send("La pagina che hai cercato non esiste.");
}

export default routeNotFound