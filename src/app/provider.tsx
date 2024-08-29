'use client';

import React from 'react';
import { ThemeProvider } from '@material-tailwind/react';

export function Providers({
  children
}: Readonly<{
  children: React.ReactElement;
}>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
