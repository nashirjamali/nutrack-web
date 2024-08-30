'use client';

import { Button, Input, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/types';
import { submit } from './handler';
import { signIn } from '@junobuild/core-peer';

export default function Register() {
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<number>(0);
  const [gestationalAge, setGestationalAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [medicalHistory, setMedicalHistory] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [dailyBudget, setDailyBudget] = useState<number>(0);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function submitFormHandler() {
    setLoading(true);
    const data: User = {
      name,
      birthDate,
      gestationalAge,
      weight,
      height,
      medicalHistory,
      address,
      dailyBudget
    };

    await submit(data);
    await signIn();
    localStorage.setItem('register', '1');
    setLoading(false);
  }

  useEffect(() => {
    if (localStorage.getItem('register')) router.push('/home');
  }, [router]);

  return (
    <div className="flex w-full h-screen">
      <div className="basis-1/2">
        <img
          className="w-full h-dvh object-cover object-center"
          src="/assets/img/register-img.jpg"
          alt="nature image"
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        {/* <Card className="w-4/5"> */}
        <div className="w-full bg-white p-36 flex flex-col gap-4 rounded-xl">
          <Typography variant="h1" className="text-grey">
            Register
          </Typography>
          <Typography color="gray" className="mb-8">
            Untuk mengetahui nutrisimu
          </Typography>
          <Input
            label="Nama"
            value={name}
            onChange={e => setName(e.target.value)}
            crossOrigin={''}
          />
          <Input
            label="Usia"
            value={birthDate}
            type="number"
            onChange={e => setBirthDate(parseInt(e.target.value))}
            crossOrigin={''}
          />
          <Input
            label="Usia Kehamilan (minggu)"
            type="number"
            value={gestationalAge}
            onChange={e => setGestationalAge(parseInt(e.target.value))}
            crossOrigin={''}
          />
          <Input
            label="Berat badan"
            type="number"
            value={weight}
            onChange={e => setWeight(parseInt(e.target.value))}
            crossOrigin={''}
          />
          <Input
            label="Tinggi badan"
            type="number"
            value={height}
            onChange={e => setHeight(parseInt(e.target.value))}
            crossOrigin={''}
          />
          <Input
            label="Riwayat penyakit"
            value={medicalHistory}
            onChange={e => setMedicalHistory(e.target.value)}
            crossOrigin={''}
          />
          <Input
            label="Lokasi tempat tinggal"
            value={address}
            onChange={e => setAddress(e.target.value)}
            crossOrigin={''}
          />
          <Input
            label="Biaya makanan harian"
            type="number"
            value={dailyBudget}
            onChange={e => setDailyBudget(parseInt(e.target.value))}
            crossOrigin={''}
          />
          <div className="flex gap-4">
            <Button
              variant="outlined"
              onClick={() => window.history.back()}
              className="mt-8 w-full"
            >
              Back
            </Button>
            <Button
              loading={loading}
              color="green"
              onClick={submitFormHandler}
              className="mt-8 w-full"
            >
              Submit
            </Button>
          </div>
        </div>
        {/* </Card> */}
      </div>
    </div>
  );
}
