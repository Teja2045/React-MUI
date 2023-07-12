import { InputAdornment, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const MUITextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField variant="outlined" label="Name"/>
        <TextField variant="filled" label="Name"/>
        <TextField variant="standard" label="Name"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" color='primary' label="Name"/>
        <TextField size="large" color='secondary' label="Name"/>
        <TextField size="medium" color='success' label="Name"/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" color='primary' required label="Form Input" value={value} error onChange={(e)=>setValue(e.target.value)}/>
        <TextField size="large" color='secondary' helperText="this is simple" label="Input" error/>
        <TextField  size="medium" color='success' type="password" label="Input" error/>
        <TextField  size="medium" color='success'  label="Read Only" InputProps={{readOnly: true}}/>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField size="small" color='primary' label="Amount" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
        <TextField size="large" color='secondary' label="Weight" InputProps={{endAdornment: <InputAdornment position="end">kg</InputAdornment>}}/>
      </Stack>
    </Stack>
  )
}

export default MUITextField
