import {Link} from "react-router-dom"
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
import TourIcon from '@mui/icons-material/Tour'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

function MuseumContainer({ museums }) {


  const createMuseumCard = museums.map((item, index) => (
    <Card key={index} sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
      />
      <Typography variant="h5">{item.name}</Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" href={item.link}>
          <ShareIcon />
        </IconButton>
        <Button startIcon={<TourIcon/>}> <Link to={{pathname: `/museums/${item.id}`}}>Book a Tour</Link></Button>
      </CardActions>
    </Card>
  ))

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
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
