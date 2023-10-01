import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

const successDialog = ({openSuccess,setOpenSuccess,success}) => {
  return (
    <Dialog open={openSuccess} onClose={handleDialogClose}>
      <DialogTitle>Success</DialogTitle>
      <DialogContent>
        <Typography>Successfully ordered products !!!</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setOpenSuccess(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default successDialog