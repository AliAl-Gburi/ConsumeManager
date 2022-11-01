import express, {Request, Response} from 'express';
import * as movieModel from '../model/movie';
import axios from 'axios'

const movieRouter = express.Router();

const obj = async(data) => {
    if(data) {
    for(let i = 0; i < data.length; i++) {
    const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=${data[i].name}`)

    const path = res.data.results[0].poster_path;
    
    const imglink = `http://image.tmdb.org/t/p/w500/${path}`
    data[i].img = imglink;
    //console.log(imglink)
   // console.log(data)
   
    }
    return data
}
    
    
  }

movieRouter.get('*', (req: Request, res: Response) => {
    const name = req.query.name;

    movieModel.getMoviesWithName(name, (err: Error, data: any) => {
        if(err) {
            res.status(500).json({error: err.message})
        } else {
            
            const nd = async() => {
               const xd = await obj(data);
               console.log(xd)
               res.status(200).json(xd)
            }
            nd()
            
            
        }
    })
})

export { movieRouter }