'use client';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography
} from '@material-tailwind/react';
import { useContext, useEffect, useState } from 'react';
import { submit } from './handler';
import { AuthContext } from '@/juno/auth';
import { useRouter } from 'next/navigation';

export default function InputScreen() {
  const userContext = useContext(AuthContext);

  const router = useRouter();

  const [breakfastValue, setBreakfastValue] = useState('');
  const [lunchValue, setLunchValue] = useState('');
  const [dinnerValue, setDinnerValue] = useState('');
  const [snackValue, setSnackValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBreakfastChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBreakfastValue(event.target.value);
  };

  const handleLunchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLunchValue(event.target.value);
  };

  const handleDinnerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDinnerValue(event.target.value);
  };

  const handleSnackChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSnackValue(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    await submit(
      {
        breakfast: breakfastValue,
        lunch: lunchValue,
        dinner: dinnerValue,
        snack: snackValue
      },
      userContext.user!
    );

    router.back();
    setLoading(false);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="basis-1/2">
        <img
          className="w-full h-dvh object-cover object-center"
          src="/assets/img/input-img.jpg"
          alt="nature image"
        />
      </div>
      <div className="basis-1/2 flex items-center justify-center">
        <Card className="w-4/5">
          <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h1" color="gray">
                Input Makanan Hari Ini
              </Typography>
              <Typography color="gray" className="mb-8">
                Untuk mengetahui nutrisimu
              </Typography>
              <Input
                label="Sarapan"
                size="lg"
                crossOrigin={''}
                onChange={handleBreakfastChange}
                value={breakfastValue}
              />
              <Input
                label="Makan Siang"
                size="lg"
                crossOrigin={''}
                onChange={handleLunchChange}
                value={lunchValue}
              />
              <Input
                label="Makan Malam"
                size="lg"
                crossOrigin={''}
                onChange={handleDinnerChange}
                value={dinnerValue}
              />
              <Input
                label="Snack"
                size="lg"
                crossOrigin={''}
                onChange={handleSnackChange}
                value={snackValue}
              />
            </CardBody>
            <CardFooter className="pt-0 mt-8">
              <Button
                type="submit"
                variant="filled"
                color="green"
                fullWidth
                loading={loading}
              >
                Submit
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
