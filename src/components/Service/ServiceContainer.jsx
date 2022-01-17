import React, {useState, useContext} from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './Service.css'
import { GlobalContext } from '../../Context/Context';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ServiceContainer() {
    const [smShow, setSmShow] = useState(false);
    const [entry, setEntry]=useState("")
    // const [style, setStyle]=useState("cont")
    const {setServiceData}=useContext(GlobalContext)
    const data=[
        {
        name:'A/C Service',
        hour:'2 Hours',
        des:''
    },
    {
        name:'Brake Rapairs',
        hour:'2 Hours',
        des:'Check and or replace brakes and rotors as needed.'
    },
    {
        name:'Complete Service',
        hour:'4 Hours',
        des:'Drain all oils trans, transfer case and differentials. oil change and filters and grease all fittings.'
    },
    {
        name:'Transmission Service',
        hour:'3 Hours',
        des:'Drain replace filter and refill.'
    },
    {
        name:'Service Appointment',
        hour:'1 Hours',
        des:''
    },
]

const setFunc=(e)=>{
    console.log("e",e)
    setEntry(e)
    setSmShow(true)
}

   
    //onClick={(e)=>func(setBackgroundColor('red'))}
  return (
    <Box sx={{ width: '90%', margin:'auto', paddingTop:'10px' }}>
      <Grid container rowSpacing={2} className="d-flex justify-content-between pb-3" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            data.map((item, index )=><Grid item sm={6} xs={12} style={{width:'50%'}} >
          <div  key={index} style={{display:'flex', padding:'20px',}}  onClick={()=>setServiceData(item)}>
            
              <div style={{  margin:'auto', color:'grey'}}>
              <h4> 
                 {item.name}
              </h4>
                   <h6> {item.hour}  </h6> 
                   </div>
                   <div>
                   <i class="fa fa-info-circle fa-2x d-flex flex-row-reverse" style={{color:'grey'}} aria-hidden="true" onClick={() => setFunc(item)}></i>
                   </div>
                   {/* setSmShow */}
          </div>
          <Divider variant="middle" />
          

          {/* <Divider variant="inset" component="li" /> */}
          
        </Grid>)
        }
       
        
      </Grid>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-sm">
          {entry.name}
          </Modal.Title>
        </Modal.Header>
        <i class="fa fa-info-circle fa-2x m-auto pt-2" style={{color:'blue'}} aria-hidden="true" ></i>
        <Modal.Body>

        {entry.des}
        <br/>
        <h6>Duration: {entry.hour}</h6>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => setSmShow(false)}>OK</Button>
      </Modal.Footer>
      </Modal>
    </Box>
  );
}
