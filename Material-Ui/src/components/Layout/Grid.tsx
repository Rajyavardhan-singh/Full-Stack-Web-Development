// import React from "react";
// import { Box, Grid } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Stack } from "@mui/material";
// const GridComp = () => {
//   return (
//     <>
//       <Stack  spacing={3} alignItems='center'>
//         <Typography variant="h3" >
//           Hi there this is a grid component example
//         </Typography>
//         <Grid container spacing={2} >
//             <Grid item  bgcolor={"primary.light"} lg xs md={5} sm={12}>item1</Grid>
//             <Grid item  bgcolor={"primary.light"} lg xs md={5} sm={12}>item2</Grid>
//             <Grid item  bgcolor={"primary.light"} lg xs md={5} sm={12}>item3</Grid>
//             <Grid item  bgcolor={"primary.light"} lg xs md={5} sm={12}>item4</Grid>
//         </Grid>
//       </Stack>
//     </>
//   );
// };

// export default GridComp;
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const GridComp = () => {
  return (
    <>
      <Stack spacing={3} alignItems='center'>
        <Typography variant="h3" >
          Hi there this is a grid component example
        </Typography>
        <Grid container spacing={2}>
            <Grid item bgcolor={"primary.light"} lg xs md={5} sm={12}>item1</Grid>
            <Grid item bgcolor={"primary.light"} lg xs md={5} sm={12}>item2</Grid>
            <Grid item bgcolor={"primary.light"} lg xs md={5} sm={12}>item3</Grid>
            <Grid item bgcolor={"primary.light"} lg xs md={5} sm={12}>item4</Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default GridComp;
