
import React, { useState, useEffect, ComponentType } from "react";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    background: {
      default:'#E5E5E5',
    },

  },
});

export default theme;