import React from "react";
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import GoNCover from "../img/gangs_of_nexon_cover.png";

const gonDescription = "In the city of Nexon only greed wins.";

/**
 * Books Page Component
 * @returns null
 */
function BooksPage() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            title="The Gangs of Nexon"
            subheader={gonDescription}
            sx={{ textAlign: "center" }}
          />
          <CardMedia 
            sx={{ height: 250 }}
            image={GoNCover}
            title="Gangs of Nexon"
          />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Releasing 2023
            </Typography>
            <Button disabled={true} variant="contained">
              Pre-order Now
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default BooksPage;
