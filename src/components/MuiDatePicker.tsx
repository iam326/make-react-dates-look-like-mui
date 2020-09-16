import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';

const useStyles = makeStyles(() =>
  createStyles({
    datePicker: {
      width: '25ch',
    },
  })
);

const MuiDatePicker: React.FC = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedData] = useState<MaterialUiPickersDate>(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={jaLocale}>
      <DatePicker
        className={classes.datePicker}
        disableToolbar
        variant="inline"
        inputVariant="standard"
        format="yyyy/MM/dd"
        id="@material-ui/pickers"
        label="@material-ui/pickers"
        value={selectedDate}
        onChange={setSelectedData}
      />
    </MuiPickersUtilsProvider>
  );
};

export default MuiDatePicker;
