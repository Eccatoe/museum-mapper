import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { UserContext } from "./UserContext"
import DateTimePicker from "@mui/lab/DateTimePicker"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { format } from "date-fns"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { createTheme, ThemeProvider } from "@mui/material/styles"
const THEME = createTheme({
  palette: {
    text: {
      primary: "#FFFFFF",
      secondary: "#000000",
    },
  },
})

const calendarTheme = createTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "black",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: lightBlue.A200,
        // color: "white",
      },
    },
    MuiPickersDay: {
      day: {
        color: "black",
      },
      daySelected: {
        backgroundColor: "black",
      },
      dayDisabled: {
        color: "black",
      },
      current: {
        color: "black",
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: "black",
      },
    },
  },
})

function TourForm({ selected }) {
  const navigate = useNavigate()
  const { currentUser } = useContext(UserContext)
  const [dateValue, setDateValue] = useState("")
  const [time, setTime] = useState("")
  const [ticket_price, setTicketPrice] = useState(0)
  const [tour_id, setTourId] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const user_id = currentUser?.id

  function handleBookTour(e) {
    e.preventDefault()
    fetch("/user_tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time,
        ticket_price,
        quantity,
        tour_id,
        user_id,
      }),
    }).then((r) => r.json())
    setDateValue(null)
    setTicketPrice(0)
    setTourId("")
    setQuantity(0)
    setIsSubmitted(true)
    window.open("https://buy.stripe.com/test_14k9BGdue5Wgfpm144")
  }

  const tourList = selected.tours
  const tourOptions = tourList?.map((t) => (
    <MenuItem style={{ color: "black" }} key={t.id} value={t.id}>
      {t.name}
    </MenuItem>
  ))

  function datePick(newDateValue) {
    setDateValue(newDateValue)
    const formattedDate = format(newDateValue, "EEEE, MMM d yyyy 'at' h:mmaaa")
    setTime(formattedDate.toString())
  }

  function handleTourSelect(e) {
    setTourId(e.target.value)
  }

  function filterWeekends(date) {
    return date.getDay() === 0
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value)
    selected.tours.filter((tour) => {
      if (tour.id === tour_id) {
        setTicketPrice(tour.price * quantity)
      }
    })
  }

  function handleAlert() {
    setIsSubmitted(false)
  }

  return (
<<<<<<< HEAD
    <div>
      <ThemeProvider theme={THEME}>
        {isSubmitted ? (
          <Alert severity="info" onClose={handleAlert}>
            Tour Reserved, payment pending Stripe Authorization |
            <Link style={{ textDecoration: "none" }} to="/profile">
              View Profile
            </Link>
          </Alert>
        ) : null}

        <form onSubmit={handleBookTour}>
          <Grid
            container
            style={{
              padding: "20px",
              alignItems: "center",
              backGround: "#081317",
            }}
=======
    <>
      {isSubmitted ? (
        <Alert variant="outlined" onClose={handleAlert}>
          Tour Booked!
          <Link to="/profile">View Profile</Link>
        </Alert>
      ) : null}
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
        <FormControl required>
          <InputLabel>Quantity</InputLabel>
          <Select
            size="large"
            value={quantity}
            label="Quantity"
            onChange={handleQuantityChange}
>>>>>>> lizdev
          >
            <Grid item xs={3}>
              <FormControl style={{ minWidth: 120 }} required>
                <InputLabel style={{ color: "white" }}>Tour</InputLabel>
                <Select
                  style={{ color: "black" }}
                  size="large"
                  value={tour_id}
                  label="Tour"
                  onChange={handleTourSelect}
                >
                  {tourOptions && tourOptions}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl style={{ minWidth: 120 }} required>
                <InputLabel style={{ color: "white" }}>Quantity</InputLabel>
                <Select
                  size="large"
                  value={quantity}
                  label="Quantity"
                  onChange={handleQuantityChange}
                >
                  <MenuItem style={{ color: "black" }} value={0}>
                    0
                  </MenuItem>
                  <MenuItem style={{ color: "black" }} value={1}>
                    1
                  </MenuItem>
                  <MenuItem style={{ color: "black" }} value={2}>
                    2
                  </MenuItem>
                  <MenuItem style={{ color: "black" }} value={3}>
                    3
                  </MenuItem>
                  <MenuItem style={{ color: "black" }} value={4}>
                    4
                  </MenuItem>
                  <MenuItem style={{ color: "black" }} value={5}>
                    5
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* <br /> */}
            <Grid item xs={3}>
              <ThemeProvider theme={calendarTheme}>
                <DateTimePicker
                  shouldDisableDate={filterWeekends}
                  minTime={new Date(0, 0, 0, 9)}
                  maxTime={new Date(0, 0, 0, 15)}
                  maxDate={new Date("2022-12-31")}
                  minDate={new Date()}
                  renderInput={(props) => <TextField {...props} />}
                  value={dateValue}
                  onChange={(newDateValue) => {
                    datePick(newDateValue)
                  }}
                />
              </ThemeProvider>
            </Grid>
            <Grid
              style={{ paddingLeft: "40px", justify: "center" }}
              item
              xs={3}
            >
              {ticket_price ? <p>Total: ${ticket_price}</p> : null}
              {currentUser ? (
                <Button size="large" variant="text" type="submit">
                  Book
                </Button>
              ) : (
                <Button
                  size="large"
                  variant="outlined"
                  onClick={() => navigate("/login")}
                >
                  Login to Book
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </div>
  )
}

export default TourForm
