import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';

import 'moment/locale/ja';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      width: '25ch',
    },
  })
);

const CustomReactDatesDateRangePicker: React.FC = () => {
  const classes = useStyles();
  const dateFormat = 'YYYY/MM/DD';
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<'startDate' | 'endDate'>(
    'startDate'
  );
  const [display, setDisplay] = useState<boolean>(false);

  return (
    <>
      <TextField
        className={classes.textField}
        label="react-dates"
        value={
          startDate && endDate
            ? `${startDate.format(dateFormat)} ~ ${endDate.format(dateFormat)}`
            : ''
        }
        onFocus={() => setDisplay(true)}
      />
      {display && (
        <DayPickerRangeController
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          navPrev={
            <IconButton>
              <NavigateBeforeIcon />
            </IconButton>
          }
          navNext={
            <IconButton>
              <NavigateNextIcon />
            </IconButton>
          }
          onFocusChange={(focusedInput) => {
            setFocusedInput(!focusedInput ? 'startDate' : focusedInput);
          }}
          onDatesChange={(selectedDates) => {
            if (focusedInput === 'startDate') {
              setStartDate(selectedDates.startDate);
            } else {
              setEndDate(selectedDates.endDate);
            }
          }}
          onOutsideClick={() => setDisplay(false)}
        />
      )}
    </>
  );
};

export default CustomReactDatesDateRangePicker;
