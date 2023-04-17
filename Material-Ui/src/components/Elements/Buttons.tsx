import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";

export const Buttons = () => {
  return (
    <>
      <Stack spacing={3}>
        <Stack spacing={2} direction={"row"} display="block">
          <Button variant="text" href="https://google.com" target="_blank">
            Text variant
          </Button>
          <Button variant="contained" color="error" disableElevation>
            contained variant
          </Button>
          <Button variant="outlined" color="error" disableRipple onClick={()=>{alert('clicked')}} >
            outlined variant
          </Button>
        </Stack>
         <Stack direction='row' spacing={2} >
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color="success">success</Button>
         </Stack>
        <Stack spacing={2} direction={"row"} display="block">
          <Button color="primary" variant="contained" size="small">
            small size
          </Button>
          <Button color="primary" variant="contained" size="medium">
            medium size
          </Button>
          <Button color="primary" variant="contained" size="large">
            large size
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"} display="block">
          <Button
            color="info"
            variant="contained"
            size="medium"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
          <Button
            color="info"
            variant="contained"
            size="medium"
            endIcon={<SendIcon />}
          >
            Send
          </Button>
        </Stack>

        <Stack spacing={2} direction={"row"} display="block">
          <IconButton color="error" aria-label="send">
            <SendIcon />
          </IconButton>
        </Stack>

        <Stack spacing={2}> 
            <Stack>
            <ButtonGroup variant="outlined" color='error' aria-label="button group alignment">
                <Button onClick={()=>{alert('Left Button clicked')}}>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            </Stack>
            <Stack direction='row'>
            <ButtonGroup variant="outlined" color='error' orientation="vertical" size='medium' aria-label="button group alignment">
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            </Stack>
        </Stack>
      </Stack>
    </>
  );
};
