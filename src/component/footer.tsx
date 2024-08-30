'use client';

import { Typography } from "@material-tailwind/react";

const Footer = () => {
  return (
    <footer className="py-8 bg-green-900 text-white">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div>
          <Typography variant="small">&copy; 2024 NuTrack Team. All rights reserved.</Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
