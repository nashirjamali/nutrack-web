"use client";

import {
  Button,
  Card,
  Input,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import InputDatePicker from "@/components/InputDatePicker";
import { User } from "@/types";
import Header from "@/component/header";
import Link from "next/link";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [birthDate, setBirthDate] = useState<Date>();
  const [gestationalAge, setGestationalAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [medicalHistoryTmp, setMedicalHistoryTmp] = useState<string>("");
  const [allMedicalHistory, setAllMedicalHistory] = useState<string[]>([]);
  const [address, setAddress] = useState<string>("");
  const [dailyBudget, setDailyBudget] = useState<number>(0);

  function addMedicalHistory(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setAllMedicalHistory((prevValue) => [...prevValue, medicalHistoryTmp]);
    setMedicalHistoryTmp("");
  }

  function removeMedicalHistory(index: number) {
    setAllMedicalHistory((prevValue) => [
      ...prevValue.filter((_: string, i: number) => index !== i),
    ]);
  }

  function submitFormHandler() {
    const data: User = {
      name,
      birthDate: birthDate ?? new Date(),
      gestationalAge,
      weight,
      height,
      medicalHistory: allMedicalHistory,
      address,
      dailyBudget,
    };

    console.log(data);
  }

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="flex w-full h-screen">
      <div className="basis-1/2">
          <img
              className="h-96 w-full h-dvh object-cover object-center"
              src="https://www.bhg.com/thmb/Mwd_YEkDbVg_fPsUDcWr3eZk9W0=/5645x0/filters:no_upscale():strip_icc()/difference-between-fruits-vegetables-01-5f92e7ec706b463287bcfb46985698f9.jpg"
              alt="nature image"
          />
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        {/* <Card className="w-4/5"> */}
          <div className="bg-white p-10 flex flex-col gap-4 rounded-xl">
            <Typography variant="h1" className="text-grey">
              Register
            </Typography>
            <Typography color="gray" className="mb-8">
                Untuk mengetahui nutrisimu
            </Typography>
            <Input
              label="Nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setGestationalAge(parseInt(e.target.value))}
            />
            <Input
              label="Berat badan"
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value))}
            />
            <Input
              label="Tinggi badan"
              type="number"
              value={height}
              onChange={(e) => setHeight(parseInt(e.target.value))}
            />
            <div className="flex flex-row gap-2">
              <form className="basis-1/2" onSubmit={addMedicalHistory}>
                <Input
                  label="Riwayat penyakit"
                  value={medicalHistoryTmp}
                  onChange={(e) => setMedicalHistoryTmp(e.target.value)}
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
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              label="Biaya makanan harian"
              type="number"
              value={dailyBudget}
              onChange={(e) => setDailyBudget(parseInt(e.target.value))}
            />
            <div className="flex gap-4">
              <Button variant="outlined" onClick={ () => window.history.back() } className="mt-8 w-full">
                Back
              </Button>
              <Button color="green" onClick={submitFormHandler} className="mt-8 w-full">
                Submit
              </Button>
            </div>
          </div>
        {/* </Card> */}
      </div>
    </div>
  );
}


