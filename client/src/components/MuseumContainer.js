import React from "react"
import { Route, Routes } from "react-router-dom"
import Map from "./Map"
import MuseumCard from "./MuseumCard"
import Container from "@mui/material/Container"
import Masonry from "@mui/lab/Masonry"
import TourForm from "./TourForm"
import Login from "./Login"
import "../App.css"
import { styled } from "@mui/material/styles"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Collapse from "@mui/material/Collapse"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Link from "@mui/material/Link"

function MuseumContainer({ museums }) {
  const museum = museums.map((museum) => (
    <MuseumCard key={museum.id} museum={museum} />
  ))

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }))

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <Container sx={{ maxWidth: "lg", alignItems: "center" }}>
              <Masonry columns={3} spacing={2}>
                {museums.map((item, index) => (
                  <Card key={index} sx={{ maxWidth: 345 }}>
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
                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography>{item.address}</Typography>
                        <Typography variant="p">
                          Categories: {item.category}
                        </Typography>
                      </CardContent>
                    </Collapse>
                    <Link href="/login" />
                    {/* <TourForm />
                    <Login /> */}
                  </Card>
                ))}
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
