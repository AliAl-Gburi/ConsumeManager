import * as dotenv from 'dotenv';
import express from 'express';
import { db } from './database';
import { movieRouter } from './routes/movie-router';


const app = express();
dotenv.config();

/*db.many('SELECT * from content.movies fetch first 2 rows only')
  .then((data) => {
    console.log('DATA:', data)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
*/

app.use('/movie', movieRouter)

app.get('/', (req, res) => {
    return res.status(200).send();
})

app.get('/status', (req, res) => {
    res.json({ message: 'Backend is running...'});
});



app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}.`);
})



