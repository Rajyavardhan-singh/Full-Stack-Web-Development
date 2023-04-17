import { Box, Paper, Typography } from "@mui/material";

function PaperComponent() {
  return (
    <Box  mt={4} sx={{
        
        backgroundColor:"#eeeeee",
        padding:"20px"
    }} >
      <Paper elevation={4} sx={{
        padding:"10px",
        border:"2px solid primary.main",
        borderRadius:"10px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",

      }}>
        <Typography variant="h5" color={"primary"}>
          This is a paper component
        </Typography>
      </Paper>
    </Box>
  );
}
export default PaperComponent;
