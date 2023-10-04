import tab from '../tab';
import React from 'react';
import Players from './Players';
const AllPlayres=()=>{
    return(
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <Players {...tab[0]} />
            <Players {...tab[1]} />
            <Players {...tab[2]} />
        </div>
    );
}
export default AllPlayres;