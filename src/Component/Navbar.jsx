import React from 'react';
import { useContext } from 'react';
import PixabayContext from '../Context/PixabayContext';


const Navbar = () => {
  const { fetchImageByCategory } = useContext(PixabayContext);
  const {setQuery} = useContext(PixabayContext);

  return (
    <>
    <div className='container text-center my-3'>
      <button onClick={() => { fetchImageByCategory("nature") }} type="button" className="btn btn-outline-primary mx-3">Nature</button>
      <button onClick={() => { fetchImageByCategory("science") }} type="button" className="btn btn-outline-secondary mx-3">Science</button>
      <button onClick={() => { fetchImageByCategory("computer") }} type="button" className="btn btn-outline-success mx-3">Computer</button>
      <button onClick={() => { fetchImageByCategory("buildings") }} type="button" className="btn btn-outline-danger mx-3">Building</button>
      <button onClick={() => { fetchImageByCategory("transportation") }} type="button" className="btn btn-outline-warning mx-3">Transportation</button>
      <button onClick={() => { fetchImageByCategory("travel") }} type="button" className="btn btn-outline-info mx-3">Travel</button>
      <button onClick={() => { fetchImageByCategory("food") }} type="button" className="btn btn-outline-light mx-3">Food</button>
      <button onClick={() => { fetchImageByCategory("sports") }} type="button" className="btn btn-outline-primary mx-3">Sport</button>
    </div>
    <div className="container" style={{width:"800px"}}>
    <input onChange={(e)=>setQuery(e.target.value)} type="text" class="form-control bg-dark text-light" />
    </div>
    </>
  );
};

export default Navbar;