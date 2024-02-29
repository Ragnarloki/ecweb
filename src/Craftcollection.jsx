import React from 'react'
import Craft from './Craft';
import contents from './contents';
 
function Craftcollection({handleClick}) {

  
    return (<div>
      {
            contents.map((item)=>(
                <Craft item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
     </div>);  
   }


export default Craftcollection