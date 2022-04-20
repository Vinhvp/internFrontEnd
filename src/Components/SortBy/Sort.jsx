import * as React from 'react';
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {useLocation} from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SelectLabels(props) {
  const [select, setSelect] = useState('popularity');
  props.setSort(() =>{
    return select;
  }
    
  );
  const handleChange = (e) => {
    setSelect(e.target.value);
  }

  let name = useQuery().get("name"); //link qery name
  let urlSort = `/category?name=${name}&sort=${select}`; //link query khi sort
  return (
   <div>
          
        <FormControl sx={{ m: 0, minWidth: 179, border: 0}} >
          <Select
            onChange={handleChange}
            displayEmpty
            style={{height: '32px', width:'210px'}}
            >
           <InputLabel id="demo-simple-select-helper-label">Sort By: {select}</InputLabel>
            
              <MenuItem value={'popularity'}>
                <Link to={urlSort} style={{textDecoration: 'none'}}>
                  <div>Sort by: <span style={{fontWeight:'bold'}}> popularity</span></div>
                </Link>
              </MenuItem>

              <MenuItem value={'az'}>
              <Link to={urlSort} style={{textDecoration: 'none'}}>
                  <div>Name: <span style={{fontWeight:'bold'}}> A-Z</span></div>
                </Link>
              </MenuItem>

            <MenuItem value={'lowest'}>
              <Link to={urlSort} style={{textDecoration: 'none'}}>
                <div>Price: <span style={{fontWeight:'bold'}}> lowest to highest</span></div>
              </Link>
            </MenuItem>
            <MenuItem value={'highest'}>
              <Link to={urlSort} style={{textDecoration: 'none'}}>
               
                <div>Price: <span style={{fontWeight:'bold'}}> highest to lowest</span></div>
              </Link>
            </MenuItem>
          </Select>
        </FormControl>
     
    </div>
  );
}
