import React, {useContext} from 'react'
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import { GlobalContext } from '../../Context/Context';


export default function Calendars() {
  const {value, setValue, selectTime}=useContext(GlobalContext)
  // const [value, setValue] = React.useState(new Date());
//console.log("set value", value)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <h6>  {selectTime} </h6> 
      <StaticDatePicker
      selected={value.from}
      minDate={new Date()}  // add this in your date componet
      
        orientation="top"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
   
    </LocalizationProvider>
  );
}
