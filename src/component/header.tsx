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
import Link from "next/link";

const Header = () => {
    return (
      <header className="flex justify-between items-center py-4 px-6 bg-green-900 text-white">
        <div className="text-lg font-bold">
          <img
            className="w-40 object-cover object-center"
            src="https://i.imgur.com/4ZBFx4B.png"
            alt="nature image"
          />
        </div>
        <nav className="flex space-x-4">
        </nav>
        <Link href={'/register'}>
            <Button color="green" className="ml-4">Register</Button>
        </Link>
      </header>
    );
  };
  
  export default Header;