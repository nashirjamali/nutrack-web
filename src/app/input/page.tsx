'use client';

import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function InputScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen">
        <Card className="w-96">
            <CardBody className="flex flex-col gap-4">
                <Typography variant="h4" color="gray">
                    Input Makanan Hari Ini
                </Typography>
                <Input label="Sarapan" size="lg" crossOrigin={''}/>
                <Input label="Makan Siang" size="lg" crossOrigin={''}/>
                <Input label="Makan Malam" size="lg" crossOrigin={''}/>
                <Input label="Snack" size="lg" crossOrigin={''}/>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="outlined" fullWidth>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
