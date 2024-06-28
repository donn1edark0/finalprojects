import React, { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';

function Playlist({ onSongSelect }) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/music')
      .then(response => setSongs(response.data))
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  return (
    <Box>
      <Typography variant="h6" color="primary" gutterBottom>Playlist</Typography>
      <List>
        {songs.map((song, index) => (
          <Box key={index}>
            <ListItem button onClick={() => onSongSelect(song)}>
              <ListItemText primary={song.title} />
            </ListItem>
            <Divider />
          </Box>
        ))}
      </List>
    </Box>
  );
}

export default Playlist;

