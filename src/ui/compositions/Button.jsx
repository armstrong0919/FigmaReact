import * as React from 'react';
import { Button as MuiButton } from '@mui/material'; 


export const Button = ({ ...props }) => {
    return <MuiButton {...props}>{props.label}</MuiButton>; 
  };