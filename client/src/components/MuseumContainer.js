import React from "react";
import Map from "./Map";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";
import "../App.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function MuseumContainer({ museums }) {

  // function handleMouseOver(e) {
  //   function highlightPin(e){
  //     const name = museums.filter((m) => {
  //       if (m.name === e.target.alt) {
  //         console.log(m.name);
  //       }
  //     });
  //   }
  // }

  const createMuseumCard = museums.map((item, index) => (
    <Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt={item.name}
        // onMouseOver={handleMouseOver}
      />
      <Typography variant="h5">{item.name}</Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" href={item.link}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));

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
  );
}

export default MuseumContainer;
