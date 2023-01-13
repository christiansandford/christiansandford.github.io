import React from "react";
import { Avatar, Box, Button, Card, CardContent, CardMedia, IconButton, List, ListItemText, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GMLogo from "../img/general-motors-logo.png"
import ChristianPic from "../img/christian_pic.jpg"

// storage for the old resume page - delete later
const oldPage = (    <Box display="flex" flexDirection="column" backgroundColor="default">
<Box display="flex" justifyContent="center">
  <Typography variant="h1">Resume</Typography>
</Box>
<Box display="flex" justifyContent="center">
  <Typography variant="h2">Tech Employment History</Typography>
</Box>
<Box display="flex" justifyContent="center">
  <img src={GMLogo} alt="gm_logo" width="100" height="100" />
  <Box display="flex" flexDirection="column" marginLeft={1}>
    <Typography variant="p1">General Motors (July 2021 - Present)</Typography>
    <Typography variant="p2">Role: Software Developer - Full Stack</Typography>
  </Box>
</Box>
<Box display="flex" flex-direction="column" justifyContent="center" alignItems="center" px={2}>
  <Box>
    <Typography variant="h4">Accomplishments</Typography>
    <List>
      <ListItemText>Worked on Advisor Workbench Software</ListItemText>
      <ListItemText>Unit testing</ListItemText>
      <ListItemText>Application support tickets</ListItemText>
      <ListItemText>Completed SAFE Agile training and acquired certification</ListItemText>
    </List>
  </Box>
  <Box>
    <Typography variant="h4">Tech Stack</Typography>
    <List>
      <ListItemText>Javascript, React</ListItemText>
      <ListItemText>Java, Spring Framework</ListItemText>
      <ListItemText>Oracle Siebel</ListItemText>
    </List>
  </Box>
</Box>
</Box>)

/**
 * Resume Page Component
 * @returns null
 */
function ResumePage() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        aria-label="resume-page-header"
        display="flex"
        width="80%"
        justifyContent="center"
        sx={{
          backgroundColor: '#ff8b13',
          height:250,
          borderRadius: 2,
          marginTop: 2,
          marginLeft: "10%",
        }}
      >
        <Avatar
          alt="Christian Sandford"
          src={ChristianPic}
          sx={{ 
            width: 250,
            height: 250,
          }}
        >
        </Avatar>
        <Typography variant="h1">
          Christian Sandford
        </Typography>
        <IconButton sx={{ width: 200, height: 200 }}>
          <LinkedInIcon />
        </IconButton>
      </Box>
      <Card
        sx={{
          borderRadius: 6,
          width: 500,
          height: 500,
          marginTop: 2,
          marginLeft: "20%",
          textAlign: "center",
        }}>
        <CardMedia
          sx={{ height: 150, width: 150, marginX: 21, marginTop: 2 }}
          image={GMLogo}
          title="General Motors"
        />
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
            General Motors
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '10px' }}>
            Software Developer - Full Stack
          </Typography>
          <Box border={1}>
            <List>
              <ListItemText>Worked on Advisor Workbench Software</ListItemText>
              <ListItemText>Unit testing</ListItemText>
              <ListItemText>Application support tickets</ListItemText>
              <ListItemText>Completed SAFE Agile training and acquired certification</ListItemText>
            </List>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ResumePage;
