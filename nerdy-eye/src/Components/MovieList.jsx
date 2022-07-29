import React from 'react'

const MovieList = ({ favComp, movies, handleClickAdd }) => {


    return (
        <div className='flex flex-wrap gap-4 items-center justify-center'>
            {
                movies.map((movie, index) =>
                    <div className=''>
                        <div>
                            <div key={index}>
                                <img src={movie.Poster} className="h-auto" alt={movie.Title} />
                            </div>
                            <div className='bg-black cursor-pointer text-white font-bold uppercase py-2 my-2 text-center' onClick={() => handleClickAdd(movie)}>{favComp}
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default MovieList