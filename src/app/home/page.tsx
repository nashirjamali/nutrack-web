'use client';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from '@material-tailwind/react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col gap-20 my-20 container mx-auto">
      <div className="flex flex-row gap-4 justify-between">
        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Sudah makan apa saja hari ini?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/input'}>
              <Button>Masukan makanan</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Nutrisi apa saja yang sudah terpenuhi?
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Lihat hasil</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="flex flex-col gap-5">
        <Typography variant="h3">Rekomendasi makanan hari ini</Typography>
        <div className="grid grid-cols-2 gap-10">
          {/* Breakfast */}
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-10">
                Sarapan
              </Typography>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Tahu</Typography>
                <Typography variant="paragraph">30 gram</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Bayam</Typography>
                <Typography variant="paragraph">1 gram</Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-2">
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Estimasi Biaya</Typography>
                <Typography variant="paragraph">Rp100.000</Typography>
              </div>
            </CardFooter>
          </Card>

          {/* Lunch */}
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-10">
                Makan Siang
              </Typography>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Tahu</Typography>
                <Typography variant="paragraph">30 gram</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Bayam</Typography>
                <Typography variant="paragraph">1 gram</Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-2">
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Estimasi Biaya</Typography>
                <Typography variant="paragraph">Rp100.000</Typography>
              </div>
            </CardFooter>
          </Card>

          {/* Dinner */}
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-10">
                Makan Malam
              </Typography>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Tahu</Typography>
                <Typography variant="paragraph">30 gram</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Bayam</Typography>
                <Typography variant="paragraph">1 gram</Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-2">
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Estimasi Biaya</Typography>
                <Typography variant="paragraph">Rp100.000</Typography>
              </div>
            </CardFooter>
          </Card>

          {/* Snack */}
          <Card className="w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-10">
                Camilan (Opsional)
              </Typography>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Tahu</Typography>
                <Typography variant="paragraph">30 gram</Typography>
              </div>
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Bayam</Typography>
                <Typography variant="paragraph">1 gram</Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-2">
              <div className="flex flex-row gap-2">
                <Typography variant="h6">Estimasi Biaya</Typography>
                <Typography variant="paragraph">Rp100.000</Typography>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
