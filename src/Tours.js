import React, { useState } from 'react';
import Loading from './Loading';

const Tours = ({places}) => {

  const [read, setRead] = useState(false)




  return (<div>
    {places.map((item, index)=>{

const {id, image, info, name,price} = item
      return(
        <div key={index} style={{display:'flex' ,justifyContent:'center', alignItems:'center' ,flexDirection:'column' }}>
          <img src={image} alt="" />
          <div style={{display:"flex" , justifyContent:'space-between'}}>
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <div style={{width:'75%'}}>
            {read  ? info : `${info.substring(0,200)}...`}
            
            <button onClick={()=>setRead(!read)}>{read ? 'show less' : 'read more'}</button>
            </div>

          
          </div>


      )
    })}
   

  </div>);
};

export default Tours;
