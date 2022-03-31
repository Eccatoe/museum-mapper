import { useState, useContext, useEffect } from "react"
import { UserContext } from "./UserContext"
import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { format } from "date-fns"

function TourForm({ selected }) {
  const { currentUser } = useContext(UserContext)
  const [dateValue, setDateValue] = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState(0)
  const [tour_id, setTourId] = useState("")
  const user_id = currentUser.id

  function handleBookTour(e) {
    e.preventDefault()
    fetch("/user_tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time,
        price,
        tour_id,
        user_id,
      }),
    }).then((r) => r.json())
  }

  const tourList = selected.tours
  const tourOptions = tourList?.map((t) => (
    <MenuItem key={t.id} value={t.id}>
      {t.name}
    </MenuItem>
  ))

  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    console.log(formattedDate)

    setTime(dateValue.toString())
  }

  function handleTourSelect(e) {
    setTourId(e.target.value)
  }

  function filterWeekends(date) {
    // Return false if Sunday
    return date.getDay() === 0
  }

  return (
    <>
      <form onSubmit={handleBookTour}>
        <FormControl required>
          <InputLabel>Tour</InputLabel>
          <Select
            size="large"
            value={tour_id}
            label="Tour"
            onChange={handleTourSelect}
          >
            {tourOptions && tourOptions}
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
        <br />
        <DateTimePicker
          shouldDisableDate={filterWeekends}
          minTime={new Date(0, 0, 0, 9)}
          maxDate={new Date("2022-12-31")}
          minDate={new Date()}
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={dateValue}
          onChange={(newDateValue) => {
            datePick(newDateValue)
          }}
        />
        <Button size="large" variant="outlined" type="submit">
          Book
        </Button>
      </form>
    </>
  )
}

export default TourForm
