import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import * as styled from './List.styled';
import { width } from '@mui/system';

export default function TransitionsPopper() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
};
  const item = ['Tops','Bottoms','Dresses','Jackets', 'Shoes', 'Accesories','Sale'];
  const sub = item.map((e)=> 
  <styled.Li>
    <a href='#'>{e}</a>
  
  </styled.Li>)
  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;
  return (
    <div>
      <p aria-describedby={id} type="button" onClick={handleClick}>
        <ArrowDropDownIcon style={{cursor:'pointer', transform: 'translate(0px,2px)',}}/>
      </p>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{boxShadow: 1, width: '620px' ,border: 'solid 0.5px var(--white-six)', bgcolor: 'background.paper', padding:0,transform: 'translate(50px,10px)'}}>
               <ul style={{
                   listStyle: 'none',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent:'center',
                   width: '620px',
                   transform: 'translate(-43px,0px)'
               }}>{sub}</ul>
            </Box>
          </Fade>
        )}
      </Popper>
    </div>
  );
}