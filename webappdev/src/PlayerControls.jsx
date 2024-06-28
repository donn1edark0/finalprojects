import React from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import Stop from '@mui/icons-material/Stop';
import SkipNext from '@mui/icons-material/SkipNext';
import SkipPrevious from '@mui/icons-material/SkipPrevious';

function PlayerControls({ isPlaying, onPlay, onPause, onStop }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
      <IconButton color="primary" onClick={onPlay} disabled={isPlaying}>
        <PlayArrow />
      </IconButton>
      <IconButton color="primary" onClick={onPause} disabled={!isPlaying}>
        <Pause />
      </IconButton>
      <IconButton color="primary" onClick={onStop}>
        <Stop />
      </IconButton>
      <IconButton color="primary">
        <SkipPrevious />
      </IconButton>
      <IconButton color="primary">
        <SkipNext />
      </IconButton>
    </Box>
  );
}

export default PlayerControls;

