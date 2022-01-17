import React from 'react'
import ServiceContainer from './ServiceContainer'


const Service=()=>{

    return(
        <div className='pt-3 mb-3 shadow bg-white rounded' style={{ width:'90%', height:'50%', margin:'auto'}}>
            <h5 style={{margin:'auto', paddingBottom:'10px', color:'grey'}}>Service Appointment</h5>
            <ServiceContainer/>
        </div>
    )
}

export default Service