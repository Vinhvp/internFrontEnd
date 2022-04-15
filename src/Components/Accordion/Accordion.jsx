import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import * as styled from './Accordion.styled';
import DiscreteSliderLabel from './Slider';
export default function SimpleAccordion() {
  return (
    <div>
     <Accordion style={{margin:'0'}}>
        <AccordionSummary style={{margin: '0px', padding: '0 16px 0 0', height:'68px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Size</p>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display: 'flex'}}>
              <styled.Size bgcolor='var(--pale-orange)' color='var(--white)'>
                S
              </styled.Size>
              <styled.Size bgcolor='var(--white-two)' color='var(--dark-grey)'>
                M
              </styled.Size >
              <styled.Size bgcolor='var(--white-four)' color='var(--greyish-brown)'>
                L
              </styled.Size >
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary style={{margin: '0px', padding: '0 16px 0 0', height:'68px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <p>Color</p>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display: 'flex'}}>
            <CircleIcon style={{width:'30px',
                height: '30px',
                color: '#ff5f6d'
            }}/>
            <CircleIcon style={{width:'30px',
                height: '30px',
                color: 'var(--light-gold-40)'
            }}/>
            <CircleIcon style={{width:'30px',
                height: '30px',
                color: 'var(--cornflower-40)'
            }}/>
            <CircleIcon style={{width:'30px',
                height: '30px',
                color: 'var(--pale-orange-40)'
            }}/>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary style={{margin: '0px', padding: '0 16px 0 0', height:'68px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <p>Brand</p>
        </AccordionSummary>
        <AccordionDetails>
            <styled.Checkbox>   
                <label for="Zara">Zara</label>
                <input type="checkbox" id="1" name="Zara" value="Zara" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
            <styled.Checkbox>   
                <label for={`H&M`}>{`H&M`}</label>
                <input type="checkbox" id="2" name={`H&M`} value={`H&M`} style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
            <styled.Checkbox>   
                <label for={`Pull&Bear`}>{`Pull&Bear`}</label>
                <input type="checkbox" id="3" name={`Pull&Bear`} value={`Pull&Bear`} style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
            <styled.Checkbox>   
                <label for="Dior">Dior</label>
                <input type="checkbox" id="4" name="Dior" value="Dior" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
            <styled.Checkbox>   
                <label for="Chanel">Chanel</label>
                <input type="checkbox" id="5" name="Chanel" value="Chanel" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary style={{margin: '0px', padding: '0 16px 0 0', height:'68px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <p>Price</p>
        </AccordionSummary>
        <AccordionDetails>
          <DiscreteSliderLabel />
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', height:'11px'}}>
                <p>$50</p>
                <p>$300</p>
            </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary style={{margin: '0px', padding: '0 16px 0 0', height:'68px'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
        <p>Available</p>
        </AccordionSummary>
        <AccordionDetails>
            <styled.Checkbox>   
                <label for="In-store">In-store</label>
                <input type="checkbox" id="6" name="In-store" value="In-store" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
            <styled.Checkbox>   
                <label for="Out of stock">Out of stock</label>
                <input type="checkbox" id="7" name="Out of stock" value="Out of stock" style={{filter: "hue-rotate(180deg)", height: "15px", width: "15px" }}/>
            </styled.Checkbox>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
