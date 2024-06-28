import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, Container, CssBaseline, ThemeProvider, Box, Paper } from '@mui/material';
import theme from './theme';
import PlayerControls from './PlayerControls';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';
import './App.css';

function App() {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (currentSong) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleVolumeChange = (volume) => {
    audioRef.current.volume = volume / 100;
  };

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    audioRef.current.src = song.url;
    audioRef.current.play();
    setIsPlaying(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <audio ref={audioRef} />
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="app-title">
            AIMP Music Player
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="main-container">
        <Box my={4}>
          <Paper elevation={3} className="player-container">
            <PlayerControls isPlaying={isPlaying} onPlay={handlePlay} onPause={handlePause} onStop={handleStop} />
            <VolumeControl onVolumeChange={handleVolumeChange} />
            <Playlist onSongSelect={handleSongSelect} />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;

