import React from 'react'
import { useFechGifs } from '../hooks/useFechGif'
// import { getGif } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFechGifs( categoria);

    return (
    <div className='container'>
        <h3 className='animate__animated animate__fadeInLeft animate__delay-1s'>{categoria}</h3>

        {loading && <p className='animate__animated animate__flash'>Loading</p>}
            {
                images.map( elemento => (
                    <GifGridItem 
                        key={elemento.id}    
                        {...elemento}
                    />
                ))
            }
    </div>
  )
}
