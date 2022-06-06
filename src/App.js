import './App.css';
// import TimePicker from "rc-time-picker";
// import "rc-time-picker/assets/index.css";
// import moment from "moment";
// import React from "react";
 import Timepickertest from './test/Timepickertest';
function App() {
  // const [dispatchTime, setDispatchTime] = React.useState(moment());

  // const handleValueChange = value => {
  //   setDispatchTime(value);
  //   console.log("value" + value);
  // };
  return (
    <div className="App">
   <Timepickertest></Timepickertest>
      {/* <TimePicker
        value={dispatchTime}
        onChange={handleValueChange}
        showSecond={false}
        allowEmpty
      /> */}
    </div>
  );
}

export default App;
