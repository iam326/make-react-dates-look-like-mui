import React from 'react';

import MuiDatePicker from './MuiDatePicker';
import ReactDatesDateRangePicker from './ReactDatesDateRangePicker';

const MainContent: React.FC = () => {
  return (
    <>
      <div>
        <MuiDatePicker />
      </div>
      <div>
        <ReactDatesDateRangePicker />
      </div>
    </>
  );
};

export default MainContent;
