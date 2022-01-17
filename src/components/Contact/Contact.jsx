import React from 'react'
import Inputs from './Form'


const Contact=()=>{

    return(
        <div className='pt-3 pb-5 mb-3 shadow  bg-white rounded' style={{ width:'90%', height:'50%', margin:'auto'}}>
            <h5 style={{margin:'auto', paddingBottom:'10px', color:'grey'}}>Add Your Detail</h5>
        <Inputs/>
        </div>
    )
}

export default Contact