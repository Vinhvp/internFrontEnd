import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: '150px' }}>
      <Slider
        aria-label="Always visible"
        defaultValue={300}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="on"
        max={300}
        min={50}
        style={{color:' var(--pale-orange)'}}
      />
    </Box>
  );
}
