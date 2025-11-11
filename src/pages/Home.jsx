import React, { useEffect } from 'react';
import api from '../api';
import Card from '../components/Card';

function Home() { 
  const [movieData, setMovieData] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);
    useEffect(()=>{
          api.getMovieData({s:"Guardians of the Galaxy Vol"}).then(data=> {
              console.log("movie data",data);
              const movies = data?.Search ?? [];
              const uniqueMovies = Array.from(new Map(movies.map(m=> [m.imdbID,m])).values());
              setMovieData(uniqueMovies);
              const totalResults = parseInt(data?.totalResults || "0",10);
              setTotalPages(Math.ceil(totalResults / 10));
          });
         },[])
    

    return (
      <>
        <h1 className="text-3xl font-bold underline text-center mt-10">Home page</h1>
        <div>
          {movieData && movieData.length > 0 ? (
            <>
              {movieData.map(movie => (
                <Card key={movie.imdbID} movie={movie} />
              ))}
            </>
          ) : (
            <p>Loading movies.....</p>
          )}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setPage(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${page === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </>
    );
}

export default Home