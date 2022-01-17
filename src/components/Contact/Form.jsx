import React from 'react'


const Inputs =()=>{


    return(<form>
        <div class="row">
          <div class="col m-3 pt-3">
            <input type="text" required class="form-control" placeholder="Name"/>
            <br/>
            <input type="text" class="form-control" placeholder="Email (optional)"/>
            <br/>
            <input type="text" required class="form-control" placeholder="Phone number"/>
            <br/>
            <input type="text" class="form-control" placeholder="Truck # (optional)"/>
          </div>
          <div class="col m-3 pt-3">
              <p>Please let us know if you have any special requests. Thank you.</p>
          <div class="form-group">
    
    <textarea class="form-control " placeholder="Notes (optional) " id="exampleFormControlTextarea1" rows="5"></textarea>
  </div>
          </div>
       
        </div>
        <div style={{paddingTop:'20px'}}>
        <button style={{width:'160px', height:'40px', backgroundColor:'#1976d2', color:'white'}}>Book</button>
        </div>
        
      </form>)
}


export default Inputs