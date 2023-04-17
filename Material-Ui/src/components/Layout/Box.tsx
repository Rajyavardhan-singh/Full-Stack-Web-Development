import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import GridComp from "./Grid";

export const BoxComponent = () => {
  return (
    <Stack spacing={4}>
      <Stack>
        <Box
          component="span"
          sx={{
            textAlign: "center",

            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography variant="h3">Box Component</Typography>
        </Box>
      </Stack>
      <Stack >
          <GridComp/>
      </Stack>
    </Stack>
  );
};
