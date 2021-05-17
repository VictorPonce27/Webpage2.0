import React from 'react';
import Button from '@material-ui/core/Button';

function SimpleSnackbar(Props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
      <div>
        <Button onClick={handleClick}> {Props.image}   {Props.value} </Button>
      </div>
    );
  }

export default SimpleSnackbar;