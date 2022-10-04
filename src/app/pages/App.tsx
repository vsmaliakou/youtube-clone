import React from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from 'common/components';

const App = () => (
  <BrowserRouter>
    <Box className="app">
      <Navbar />
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
