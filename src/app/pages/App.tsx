import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Box sx={{ background: '#000' }}>
      Navbar
      <Routes>
        <Route path="/" element={<div>Feed</div>} />
        <Route path="/video/:id" element={<div>VideoDetail</div>} />
        <Route path="/channel/:id" element={<div>ChannelDetail</div>} />
        <Route path="/search/:searchTerm" element={<div>SearchFeed</div>} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
