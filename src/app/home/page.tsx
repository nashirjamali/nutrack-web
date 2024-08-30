'use client';

import { AuthContext } from '@/juno/auth'
import NutritionIndicator from '@/component/NutritionIndicator';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader
} from '@material-tailwind/react';
import Link from 'next/link';
import { useMemo, useContext } from 'react'

export default function Home() {
  const userContext = useContext(AuthContext)

  const moment = require('moment');
  const date = moment('2024-08-30');
  const data = [
    { name: 'Protein', quality: 'Kurang' },
    { name: 'Karbo', quality: 'Baik' },
    { name: 'Lemak', quality: 'Berlebih' }
  ];
  
  function useFormattedNumber(number: number): string {
    return useMemo(() => {
      const formatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      return `${formatted},00`
    }, [number]);
  }
  

  return (
    <main className="">
      <div className="flex w-full h-screen">

        <div className='basis-4/5 p-16'>
          <div className="flex flex-row gap-4 justify-between">
            <Card className="w-full">
              <CardBody>
                <div className="text-3xl font-bold mb-2">Hi, Alex!</div>
                <div className="text-l">Sudah makan apa saja hari ini?</div>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href={'/input'}>
                  <Button>Masukan makanan</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="flex flex-col mt-12">
            <div className="text-3xl font-bold">Rekomendasi makanan hari ini</div>
            <div className="text-l">
              {date.format('dddd, DD MMMM YYYY')}
            </div>
            <div className="grid grid-cols-2 gap-10 mt-8">
              {/* Breakfast */}
              <Card
                shadow={false}
                className="relative grid h-[20rem] w-full overflow-hidden pr-12"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://static.vecteezy.com/system/resources/previews/005/132/150/non_2x/sunrise-landscape-of-morning-scene-mountains-hill-lake-and-valley-in-flat-nature-for-poster-banner-or-background-illustration-vector.jpg')] bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative">
                  <Card className="absolute top-4 left-4 p-3 bg-white w-max">
                    <div className="text-1xl font-bold text-grey">Sarapan</div>
                  </Card>
                  <Card className="absolute bottom-4 w-full p-4">
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Bayam</Typography>
                      <Typography variant="h6" className='text-grey'>1 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Bayam</Typography>
                      <Typography variant="h6" className='text-grey'>1 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                      <Typography variant="paragraph" className='text-grey'>Estimasi Biaya</Typography>
                      <Typography variant="h6" className='text-grey'>Rp100.000</Typography>
                    </div>
                  </Card>
                </CardBody>
              </Card>

              {/* Lunch */}
              <Card
                shadow={false}
                className="relative grid h-[20rem] w-full overflow-hidden pr-12"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/premium-vector/flat-minimalist-mountain-landscape-illustration_920128-30.jpg')] bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative">
                  <Card className="absolute top-4 left-4 p-3 bg-white w-max">
                    <div className="text-1xl font-bold text-grey">Makan Siang</div>
                  </Card>
                  <Card className="absolute bottom-4 w-full p-4">
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Babi Kecap</Typography>
                      <Typography variant="h6" className='text-grey'>1 Kg</Typography>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Kangkung</Typography>
                      <Typography variant="h6" className='text-grey'>500 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                      <Typography variant="paragraph" className='text-grey'>Estimasi Biaya</Typography>
                      <Typography variant="h6" className='text-grey'>Rp100.000</Typography>
                    </div>
                  </Card>
                </CardBody>
              </Card>

              {/* Dinner */}
              <Card
                shadow={false}
                className="relative grid h-[20rem] w-full overflow-hidden pr-12"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://4kwallpapers.com/images/wallpapers/full-moon-night-time-roadway-calm-landscape-flat-digital-1280x1280-6722.png')] bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative">
                  <Card className="absolute top-4 left-4 p-3 bg-white w-max">
                    <div className="text-1xl font-bold text-grey">Makan Malam</div>
                  </Card>
                  <Card className="absolute bottom-4 w-full p-4">
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Pizza Kecap</Typography>
                      <Typography variant="h6" className='text-grey'>120 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Penyetan Tahu Tempe</Typography>
                      <Typography variant="h6" className='text-grey'>500 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                      <Typography variant="paragraph" className='text-grey'>Estimasi Biaya</Typography>
                      <Typography variant="h6" className='text-grey'>Rp100.000</Typography>
                    </div>
                  </Card>
                </CardBody>
              </Card>
              

              {/* Snack */}
              <Card
                shadow={false}
                className="relative grid h-[20rem] w-full overflow-hidden pr-12"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://st2.depositphotos.com/4448481/12133/v/450/depositphotos_121337710-stock-illustration-vector-icon-french-fries-in.jpg')] bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative">
                  <Card className="absolute top-4 left-4 p-3 bg-white w-max">
                    <div className="text-1xl font-bold text-grey">Snack (Optional)</div>
                  </Card>
                  <Card className="absolute bottom-4 w-full p-4">
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Pizza Kecap</Typography>
                      <Typography variant="h6" className='text-grey'>120 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2">
                      <Typography variant="paragraph" className='text-grey'>Penyetan Tahu Tempe</Typography>
                      <Typography variant="h6" className='text-grey'>500 gram</Typography>
                    </div>
                    <div className="flex flex-row gap-2 mt-4">
                      <Typography variant="paragraph" className='text-grey'>Estimasi Biaya</Typography>
                      <Typography variant="h6" className='text-grey'>Rp {useFormattedNumber(10000000)}</Typography>
                    </div>
                  </Card>
                </CardBody>
              </Card>

            </div>
          </div>
        </div>

        <div className="basis-1/5 pl-8 pr-8 pt-24 bg-gray-100">
          <div className="text-2xl font-bold text-gray mb-8">Laporan nutrisi mu</div>
          {data.map((item, index) => (
            <NutritionIndicator key={index} name={item.name} quality={item.quality} />
          ))}
        </div>
      </div>
    </main>
  );
}
