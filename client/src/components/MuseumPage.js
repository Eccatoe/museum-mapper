import Swipe from "./Swipe";
import TourForm from './TourForm';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";

function Form() {
  const [selected, setSelected] = useState({});
  const [value, setValue] = useState("1");

  const { id } = useParams();
  useEffect(() => {
    fetch(`/museums/${id}`)
      .then((r) => r.json())
      .then((selected) => setSelected(selected));
  }, []);

  function handleTourSelect(e, newValue) {
    setValue(newValue);
  }


  return (
    <>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${selected.image})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} elevation={6} square>
          <TabContext value={value}>
            <Box
              sx={{
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography align="center" variant="h6">
                Not sure which tour is right for you?
              </Typography>
              <Tabs
                value={value}
                onChange={handleTourSelect}
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab value="1" label="Standard Tour" />
                <Tab value="2" label="Extended Tour" />
                <Tab value="3" label="Private Tour" />
              </Tabs>
              <TabPanel value="1" index={0}>
                Standard group size: 20 people Time: 2 hours Learn from
                experienced professionals who are passionate about history and
                culture.
              </TabPanel>
              <TabPanel value="2" index={1}>
                Standard group size: 10 people Time: 4 hours A hands on tour
                with a small group and extra attention to details. Make a day of
                it!
              </TabPanel>
              <TabPanel value="3" index={2}>
                Just you and your guests Time: 3 hours Skip the line and take
                advantage of small groups and professional guides who will adapt
                the tour to your interests and answer all of your questions.
              </TabPanel>
            </Box>
          </TabContext>

          <Box
            sx={{
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h2" align="center">
              {selected.name}
            </Typography>
            <Typography variant="caption">-{selected.address}-</Typography>
            <Typography variant="h6">{selected.about}</Typography>
          </Box>
              <TourForm/>

        </Grid>
      </Grid>
      
      <Swipe />
    </>
  );
}

export default Form;
