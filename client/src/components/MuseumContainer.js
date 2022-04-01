import { Link, useNavigate } from "react-router-dom"
import Map from "./Map"
import Container from "@mui/material/Container"
import Masonry from "@mui/lab/Masonry"
import "../App.css"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import TourIcon from "@mui/icons-material/Tour"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import PinDropIcon from "@mui/icons-material/PinDrop"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const THEME = createTheme({
  palette: {
    text: {
      primary: "#000",
    },
  },
})

function MuseumContainer({ museums }) {
  const heights = ["150", "300", "500"]
  const widths = ["200", "400", "600"]
  let navigate = useNavigate()
  const createMuseumCard = museums.map((item, index) => (
    <ThemeProvider theme={THEME}>
      <Card key={index} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height={heights[Math.floor(Math.random() * heights.length)]}
          image={item.image}
          alt={item.name}
        />
        <Typography color="textPrimary" variant="h5">
          {item.name}
        </Typography>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
            <PinDropIcon size="large" />
          </IconButton>
          <IconButton aria-label="share" onClick={() => window.open(item.link)}>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <TourIcon
              size="large"
              onClick={() => navigate(`/museums/${item.id}`)}
            />
          </IconButton>
          <Link
            style={{ fontSize: "15px", textDecoration: "none" }}
            to={{ pathname: `/museums/${item.id}` }}
          >
            Book a Tour
          </Link>

          {/* <Button startIcon={<TourIcon style={{ color: grey[500] }} />}>
          {" "} */}

          {/* </Button> */}
        </CardActions>
      </Card>
    </ThemeProvider>
  ))

  return (
    <>
      <Box style={{ padding: "10px" }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Container
              sx={{
                maxWidth: "lg",
                alignItems: "center",
                overflow: "auto",
                maxHeight: 900,
              }}
            >
              <Masonry columns={3} spacing={2}>
                {createMuseumCard}
              </Masonry>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Map />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MuseumContainer
