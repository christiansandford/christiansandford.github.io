import React from "react";
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import GoNCover from "../img/gangs_of_nexon_cover.png";

const gonDescription = "In the city of Nexon only greed wins.";

/**
 * Books Page Component
 * @returns null
 */
function BooksPage() {
  return (
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
  );
}

export default BooksPage;
