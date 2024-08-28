'use client';

import {initSatellite} from '@junobuild/core-peer';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true
        }
      }))();
  }, []);

  return (
    <div className="relative isolate min-h-[100dvh]">
      <main className="mx-auto max-w-screen-2xl py-16 px-8 md:px-24 tall:min-h-[calc(100dvh-128px)]">
        <h1 className="dark:text-white text-5xl md:text-6xl font-extrabold md:pt-16">
          Welcome to Juno
        </h1>
      </main>
    </div>
  );
}
