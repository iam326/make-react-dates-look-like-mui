import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';

const useStyles = makeStyles(() =>
  createStyles({
    datePicker: {
      width: '30ch',
    },
  })
);

const MuiDatePicker: React.FC = () => {
  const classes = useStyles();
  const [selectDate, setSelectDate] = useState<string | null>(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <KeyboardDatePicker
        className={classes.datePicker}
        disableToolbar
        variant="inline"
        inputVariant="standard"
        format="yyyy/MM/dd"
        id="@material-ui/pickers"
        label="@material-ui/pickers"
        value={selectDate}
        onChange={(_, selectDate) => {
          if (selectDate !== undefined) {
            setSelectDate(selectDate);
            console.log(selectDate);
          }
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MuiDatePicker;
