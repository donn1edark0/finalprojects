const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

const musicDirectory = path.join(__dirname, '../public/music');

app.get('/api/music', (req, res) => {
  fs.readdir(musicDirectory, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    const songs = files.filter(file => file.endsWith('.flac')).map(file => ({
      title: path.basename(file, '.flac'),
      url: `/music/${file}`
    }));
    res.json(songs);
  });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

