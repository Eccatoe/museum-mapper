import { useState, useContext } from "react";
import { UserContext } from "./UserContext";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { format } from "date-fns";

function TourForm() {
  const { currentUser } = useContext(UserContext);
  const { setCurrentUser } = useContext(UserContext);

  const [dateValue, setDateValue] = useState("");
  const [tourFormData, setTourFormData] = useState({
    time: "",
    type: "",
    price: null,
    tour_id: null,
    user_id: null,
  });

  function datePick(newDateValue){
      setDateValue(newDateValue)
      tourFormData.time=dateValue
      console.log(dateValue)
  }
  function handleTourSelect(e){
      const objKey=e.target.name
      const objValue=e.target.value
      setTourFormData({...tourFormData, [objKey]: objValue})
  }
console.log(tourFormData)
  return (
    <>
      <FormControl required>
        <InputLabel>Tour</InputLabel>
        <Select name="type" value={tourFormData.type} label="Tour" onChange={handleTourSelect}>
          <MenuItem value="Standard">Standard</MenuItem>
          <MenuItem value="Extended">Extended</MenuItem>
          <MenuItem value="Private">Private</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="DateTimePicker"
        value={dateValue}
        onChange={(newDateValue) => {
          datePick(newDateValue);
        }}
      />
    </>
  );
}

export default TourForm;

// const result = format(
    //     new Date(2014, 1, 11, 15, 30),
    //     "EEEEEE, MMM d yyyy h:mmaaa"
    //   );
    //   console.log(result);