import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Images = () => {

    //  const { imageData } = useContext(PixabayContext);
    // we are extracting only the imageData property from the context object
    // and assigning it to a new variable imageData.
    // we can use imageData in this component using useContext method...
    // usecontext se data fetch ya le skte ha..
    const { imageData } = useContext(PixabayContext);

    return (
        <div className="container my-5">
        <div className='flex'>
            {imageData.map((image) => {
                return (
                <div key={image.id}>
                    <div className="item">
                        <img src={image.largeImageURL} alt={image.tags} />
                    </div>
                </div>
                );
            })}
        </div>
        </div>
    )
}

export default Images