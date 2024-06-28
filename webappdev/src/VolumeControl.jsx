import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

function VolumeControl({ onVolumeChange }) {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <Typography variant="body2" color="primary">Volume</Typography>
      <Slider
        defaultValue={50}
        color="primary"
        style={{ marginLeft: 16, width: '200px' }}
        onChange={(e, value) => onVolumeChange(value)}
      />
    </Box>
  );
}

export default VolumeControl;

