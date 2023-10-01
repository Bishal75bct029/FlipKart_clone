import React from 'react'
import PageNotFoundImage from './notfound.png';

const PageNotFound = () => {
  return (
    <div style={{display:'flex',flexDirection:'column', justifyContent:'center',height:'80%'}}>

    <div style={{height:'50%',width:'50%',margin:'0 auto'}}>
        <img src={PageNotFoundImage} alt="Failed to show" style={{minHeight:400,width:'100%',margin:'auto auto'}} />
    </div>
    </div>
  )
}

export default PageNotFound