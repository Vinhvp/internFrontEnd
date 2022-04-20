import React from 'react';
import * as styled from './Comment.styled';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Comment = () => {
    return ( 
        <>
            <styled.Comment>
                <span>
                    <b  style={{width: '104px'}}>Amber Arnold</b>
                    <p style={{fontWeight: 'normal', color:'#808080'}}>30 JUL</p>
                </span>
                <div style={{backgroundColor:"#f9f9f9"}}>
                    <h4>Adorable but tight!!</h4>
                    <div style={{width:'fit-content', 
                    display:'flex', height:'20px',
                    margin:'0',padding:'0'}}>
                        <StarIcon style={{width: '16px', height: '15px' , fill:'yellow'}}/>
                        <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                        <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                        <StarIcon style={{width: '16px', height: '15px', fill:'yellow'}}/>
                        <StarBorderIcon style={{width: '16px', height: '15px'}}/>
                    </div>
                    <div style={{ margin: '23px 0 0 0',
                    padding: '0',
                    }}>
                        <article>
                        I purchased this dress thinking it fit loose as pictured, but it fits like a glove, its very cute.
                        I purchased this dress thinking it fit loose as pictured, but it fits like a glove, its very cute
                        </article>
                    </div>
                </div>
            </styled.Comment>
        </>
     );
}
 
export default Comment;