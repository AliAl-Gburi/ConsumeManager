import { db } from '../database';

const getMoviesWithName = async (quer:any, onResult: (error: Error, data:any) => void) => {

        db.many(`SELECT name, year
                FROM content.movies
                where name ~* '^${quer}' 
                order by nvotes desc
                fetch first 5 rows only`)
                .then((data:any) => {
                onResult(null, data)
        })
        .catch((error:any) => {
        onResult(error, null)
        })
    
}

export { getMoviesWithName }
