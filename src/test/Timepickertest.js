import React from 'react'
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";

function Timepickertest() {
    const [dispatchTime, setDispatchTime] = React.useState(moment());

    const handleValueChange = value => {
      setDispatchTime(value);
      console.log("value" + value);
    };
  return (
    <div>
        <div>Test</div>
         <TimePicker
        value={dispatchTime}
        onChange={handleValueChange}
        showSecond={false}
        allowEmpty
      />

    </div>
   
  )
}


export default Timepickertest
