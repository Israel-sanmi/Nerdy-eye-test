import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from './Context'


const MovieHeading = ({ value }) => {
    const { setSearchValue } = useContext(Context)
    return (
        <div className='md:flex block justify-between flex-wrap px-4 pb-10 pt-4'>
            <Link to='/'><div className='font-bold md:text-left text-center text-4xl text-white'>Israel-Movies</div></Link>
            <div>
                <input type="text" placeholder='Type to Search' value={value} className="py-2 px-14 rounded-md md:text-right text-center md:w-auto w-full md:my-0 my-4 capitalize" onChange={() => setSearchValue(event.target.value)} />
                <Link className='font-bold uppercase md:w-auto w-full bg-black py-2 md:py-0 md:ml-5 ml-0 text-center text-2xl text-white px-4' to="/favourites">Favourites</Link>
            </div>
        </div>
    )
}

export default MovieHeading