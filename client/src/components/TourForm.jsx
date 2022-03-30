import { useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { format } from "date-fns";

function TourForm({ selected }) {
  const { currentUser } = useContext(UserContext);
  const [dateValue, setDateValue] = useState("");
  const [tourFormData, setTourFormData] = useState({
    time: "",
    price: 0,
    tour_id: "",
    user_id: currentUser.id,
  });

  const tourList = selected.tours;
  const tourOptions = tourList?.map((t) => (
    <MenuItem key={t.id} value={t.id}>
      {t.name}
    </MenuItem>
  ));
console.log(tourFormData)

  function datePick(newDateValue) {
    setDateValue(newDateValue);
    tourFormData.time = dateValue;
    console.log(dateValue);
  }

  function handleTourSelect(e) {
    const objKey = e.target.name;
    const objValue = e.target.value;
    setTourFormData({ ...tourFormData, [objKey]: objValue });
  }

  return (
    <>
      <FormControl required>
        <InputLabel>Tour</InputLabel>
        <Select
          name="tour_id"
          value={tourFormData.tour_id}
          label="Tour"
          onChange={handleTourSelect}
        >
          {tourOptions && tourOptions}
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


// TourForm.defaultProps = {
//     slected: {tours: []}
// }
