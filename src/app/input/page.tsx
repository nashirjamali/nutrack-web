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
import { useEffect, useState } from "react";



export default function InputScreen() {

    const [breakfastValue, setBreakfastValue] = useState('');
    const [lunchValue, setLunchValue] = useState('');
    const [dinnerValue, setDinnerValue] = useState('');
    const [snackValue, setSnackValue] = useState('');

    const handleBreakfastChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({
            "breakfast": breakfastValue,
            "lunch": lunchValue,
            "dinner": dinnerValue,
            "snack": snackValue
        });
    };

    return (
        <div className="flex w-full h-screen">
            <div className="basis-1/2">
                <img
                    className="h-96 w-full h-dvh object-cover object-center"
                    src="https://unsplash.com/photos/xMh_ww8HN_Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8fHwxNzI0OTI0MTg1fDI&force=true"
                    alt="nature image"
                />
            </div>
            <div className="basis-1/2 flex items-center justify-center">
            <Card className="w-4/5">
                <form onSubmit={handleSubmit}>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h3" color="gray" className="mb-8">
                            Input Makanan Hari Ini
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
                        <Button type="submit" variant="filled" fullWidth>
                            Submit
                        </Button>
                    </CardFooter>
                </form>
            </Card>
            </div>
        </div>
    )
}
