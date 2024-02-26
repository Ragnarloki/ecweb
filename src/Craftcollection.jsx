import React from 'react'
import Craft from './Craft';
import contents from './contents';
  
function Craftcollection() {
  
    return (<div><Craft 
       
        key={contents[0].id}
        name={contents[0].name}        
        image={contents[0].img}/>
     </div>);  
   }


export default Craftcollection