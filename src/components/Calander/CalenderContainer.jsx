import React, {useContext} from 'react'
import Calenders from './Calender'
import './CalenderContainer.css'
import { GlobalContext } from '../../Context/Context'

const CalenderContainer=()=>{

  const {setSelectTime}=useContext(GlobalContext)

const times=[
  {time:'03:00 am'},{time:'03:30 am'},{time:'04:00 am'},
  {time:'04:30 am'},{time:'05:00 am'},{time:'05:30 am'},
  {time:'06:00 am'},{time:'06:30 am'},{time:'07:00 am'},
  {time:'07:30 am'},{time:'08:00 am'},{time:'08:30 am'},
  {time:'09:00 am'},{time:'09:30 am'},{time:'10:00 am'},
  {time:'10:30 am'},{time:'11:00 am'}
]
    return(<div className='Ccontainer shadow p-3 mb-3 bg-white rounded' style={{ display:'flex', width:'90%', height:'50%', margin:'auto'}}>
<div className="child1 h-100  w-100 px-2 py-2 " style={{ margin:'auto'}}>
<Calenders/>
</div>

<div className="child2 h-100 pt-3 pb-3 py-3 d-flex flex-row " style={{margin:'auto'}}>
<div class="container m-auto border " >
  <div class="row">
    {times.map((item, index)=><div className="col-3 abx p-1 m-3" key={index} onClick={()=>setSelectTime(item.time)}>
      {item.time}
    </div>)}
    {/* <div class="abx col-3   p-1 m-3">
    03:30 am
    </div>
    <div class="col-3 abx p-1 m-3">
    04:00 am
    </div>
    <div class="col-3 abx  p-1 m-3" >
    04:30 am
    </div>
    <div class="col-3  abx  p-1 m-3">
    05:00 am 
    </div>
    <div class="col-3 abx p-1 m-3">
    05:30 am
    </div>
    <div class="col-3 abx p-1 m-3" >
    6:00 am
    </div>
    <div class="col-3  abx  p-1 m-3">
    06:30 am
    </div>
    <div class="col-3 abx p-1 m-3">
    07:00 am
    </div>
    <div className="col-3 abx p-1 m-3">
      07:30 am
    </div>
    <div className="col-3 abx p-1 m-3">
      08:00 am
    </div>
    <div className="col-3 abx p-1 m-3">
      08:30 am
    </div>
    <div className="col-3 abx p-1 m-3">
      09:00 am
    </div>
    <div className="col-3 abx p-1 m-3">
      09:30 am
    </div>
    <div className="col-3 abx p-1 m-3">
      10:00 am
    </div>
    <div className="col-3 abx p-1 m-3">
      10:30 am
    </div>
    <div className="col-3 abx p-1 m-3">
      11:00 am
    </div> */}
  </div>
</div>

</div>
    </div>
    )
}

export default CalenderContainer