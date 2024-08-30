'use client';

import {
  Button,
  Input,
  List,
  ListItem,
  Typography
} from '@material-tailwind/react';
import { useState } from 'react';
import InputDatePicker from '@/components/InputDatePicker';
import { User } from '@/types';
import { submit } from './handler';

export default function Register() {
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<Date>();
  const [gestationalAge, setGestationalAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [medicalHistoryTmp, setMedicalHistoryTmp] = useState<string>('');
  const [allMedicalHistory, setAllMedicalHistory] = useState<string[]>([]);
  const [address, setAddress] = useState<string>('');
  const [dailyBudget, setDailyBudget] = useState<number>(0);

  function addMedicalHistory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllMedicalHistory(prevValue => [...prevValue, medicalHistoryTmp]);
    setMedicalHistoryTmp('');
  }

  function removeMedicalHistory(index: number) {
    setAllMedicalHistory(prevValue => [
      ...prevValue.filter((_: string, i: number) => index !== i)
    ]);
  }

  async function submitFormHandler() {
    const data: User = {
      name,
      birthDate: birthDate ?? new Date(),
      gestationalAge,
      weight,
      height,
      medicalHistory: allMedicalHistory,
      address,
      dailyBudget
    };

    await submit(data);
  }

  return (
    <div className="bg-black min-h-screen flex flex-col gap-6 p-10">
      <Typography variant="h1" className="text-white">
        Register
      </Typography>
      <div className="bg-white p-10 flex flex-col gap-4 rounded-xl">
        <Input
          label="Nama"
          value={name}
          onChange={e => setName(e.target.value)}
          crossOrigin={''}
        />
        <InputDatePicker
          label="Tanggal lahir"
          value={birthDate}
          onChange={setBirthDate}
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
        <div className="flex flex-row gap-2">
          <form className="basis-1/2" onSubmit={addMedicalHistory}>
            <Input
              label="Riwayat penyakit"
              value={medicalHistoryTmp}
              onChange={e => setMedicalHistoryTmp(e.target.value)}
              crossOrigin={''}
            />
          </form>
          <List className="basis-1/2 border border-blue-gray-300 rounded-md flex flex-row">
            {allMedicalHistory.map((medHistory: string, i: number) => (
              <ListItem
                key={i}
                className="px-3 py-2 w-fit bg-gray-200 flex flex-row items-center gap-2"
              >
                <Typography variant="paragraph">{medHistory}</Typography>
                <Button
                  variant="text"
                  className="w-fit px-2 py-0 text-bold"
                  onClick={() => removeMedicalHistory(i)}
                >
                  X
                </Button>
              </ListItem>
            ))}
          </List>
        </div>
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

        <Button color="blue" onClick={submitFormHandler}>
          Submit
        </Button>
      </div>
    </div>
  );
}
