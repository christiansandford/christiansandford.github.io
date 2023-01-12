import React from "react";
import { Avatar, Box, Card, List, ListItemText, Typography } from "@mui/material";
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
    <>
      <Box
        aria-label="resume-page-header"
        display="flex"
        width="100%"
        sx={{
          backgroundColor: '#b7410e',
          height:250,
          borderRadius: 2,
          marginTop: 2,
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
      </Box>
      <Card sx={{ width: 300, height: 300, marginTop: 2}}>
        Work History
      </Card>
    </>
  )
}

export default ResumePage;
