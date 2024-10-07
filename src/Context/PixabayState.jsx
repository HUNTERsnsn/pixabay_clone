import React, { useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = (props) => {

    const api_key = "46362927-bbc7427d70c09a1655583888c";

    // We are getting image data from the url.
    const [imageData, setImageData] = useState([]);  // data is coming in array of object.

    // For search the data, the by default value is london
    const [query, setQuery] = useState("london");   // by default the value is london..
    
    
    // For data Fetch..

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pixabay.com/api/?key=${api_key}&
            q=${query}&image_type=photo&per_page=100`);      // fetch the data

            const data = await response.json();  // parse the response...

            setImageData(data.hits);
            console.log(data.hits);   // object = hits.  array = data.  
        }
        fetchData();
    }, [query]);       // as a dependancy, we can not pass setQuery on it...it need a variable..

    // we give the category in function and it is automatically updated in the state.

    const fetchImageByCategory = async(cat)=>{
       
            const response = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${cat}&image_type=photo`);      // fetch the data

            const data = await response.json();  // parse the response...

            setImageData(data.hits);
}

    return (
        <PixabayContext.Provider value={{imageData,fetchImageByCategory,setQuery}}> 
            {props.children}
        </PixabayContext.Provider>

    )
}

export default PixabayState