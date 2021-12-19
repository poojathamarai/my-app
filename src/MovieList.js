import { Movie } from './Movie';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export function MovieList({ movies,setMovieList }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary },index) => (
        <Movie deleteButton={
            <IconButton
             onClick={()=>{
             const deleteIndex=index;
             const remainingMovies=movies.filter((mv,idx)=>deleteIndex!==idx); 
                setMovieList(remainingMovies) 
     }}><DeleteIcon color="error"/></IconButton>
     }
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} />
      ))}
    </div>
  );
}
