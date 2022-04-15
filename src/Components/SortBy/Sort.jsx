import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
export default function SelectLabels() {


  return (
   <div>
        <FormControl sx={{ m: 1, minWidth: 179, border: 0}}>
          
          <Select

            displayEmpty
            style={{height: '32px', width:'179px'}}
            >
           <InputLabel id="demo-simple-select-helper-label">Sort</InputLabel>
            <MenuItem value="popularity">
              <div>Sort by: <span style={{fontWeight:'bold'}}> popularity</span></div>
            </MenuItem>
            <MenuItem value="a-z">
              <div>Name: <span style={{fontWeight:'bold'}}> A-Z</span></div>
            </MenuItem>
            <MenuItem value="low">
              <div>Price: <span style={{fontWeight:'bold'}}> lowest to highest</span></div>
              
            </MenuItem>
            <MenuItem value="high">
              <div>Price: <span style={{fontWeight:'bold'}}> highest to lowest</span></div>
              
            </MenuItem>
          </Select>
        </FormControl>
     
    </div>
  );
}
