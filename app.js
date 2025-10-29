import express from 'express'
import router from './routers/posts.js';
import routeNotFound from './middleware/routeNotFound.js';
import errorHandler from './middleware/errorHandler.js';
//importo il file di connessione per il db
import connection from './db.js';


const app = express();
// metto questa parte per fare in modo che si possa leggere il json
app.use(express.json());
app.use('/posts', router);
app.use('/images', express.static('images'));
app.get('/', (req, res) => res.send('server del mio blog'));


//path per provare errore interno.
app.get('/test-error', (req,res, next) => {
    next(new Error("errore prova"));
});

// importo il middleware per le path non esistenti
app.use(routeNotFound)
// gestisce gli errori interni al server.
app.use(errorHandler);
app.listen(3000, () => console.log('Server attivo su http://localhost:3000'));
