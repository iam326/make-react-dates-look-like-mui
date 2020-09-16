import React from 'react';

import MuiDatePicker from './MuiDatePicker';
// import ReactDatesDateRangePicker from './ReactDatesDateRangePicker';
import CustomReactDatesDateRangePicker from './CustomReactDatesDateRangePicker';

const MainContent: React.FC = () => {
  return (
    <>
      <div>
        <h3>Material UI - DatePicker (inline mode)</h3>
        <MuiDatePicker />
      </div>
      {/* <div>
        <h3>react-dates - DateRangePicker</h3>
        <ReactDatesDateRangePicker />
      </div> */}
      <div style={{ marginTop: '20px' }}>
        <h3>Custom react-dates DateRangePicker</h3>
        <CustomReactDatesDateRangePicker />
      </div>
    </>
  );
};

export default MainContent;
