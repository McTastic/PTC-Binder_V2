import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default function TextFieldHiddenLabel() {
  return (
      <>
    <Stack
      component="form"
      sx={{
        width: '25ch',
        margin: "auto"
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
      <Button variant="contained">Contained</Button>
    </Stack>
    </>
  );
}