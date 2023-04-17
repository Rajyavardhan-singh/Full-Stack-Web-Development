import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Share } from "@mui/icons-material";
function Cards() {
    function handleClick(){
       alert('details are shared')

    }
  return (
    <>
      <Card elevation={4} sx={{ borderRadius: "10px", width: "350px", margin:'20px' }}>
        <CardMedia
          component="img"
          height="180"
          image="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JleXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <CardContent>
          <Typography variant="h5" fontWeight="bold">
            Best In Class
          </Typography>
          <Typography textAlign="justify" variant="h6">
            This is the best in class material build for long lasting effect and
            durability is guaranteed for almost life time and you can rely on
            this
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="error">Learn More</Button>
          <Button variant="outlined" onClick={handleClick} endIcon={<Share/>}>Share</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Cards;
