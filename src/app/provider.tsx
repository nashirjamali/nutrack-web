'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import { initSatellite } from '@junobuild/core-peer';
import { authSubscribe, type User } from '@junobuild/core-peer';
import { AuthContext } from '@/juno/auth';

export function Providers({
  children
}: Readonly<{
  children: React.ReactElement;
}>) {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    (async () => await initSatellite())();
  }, []);

  useEffect(() => {
    const sub = authSubscribe(user => setUserData(user));

    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user: userData }}>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthContext.Provider>
  );
}
