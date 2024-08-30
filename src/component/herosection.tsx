"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center py-16 px-32 bg-white">
      <div className="max-w-lg">
        <Typography variant="h2" color="gray" className="mb-4">
          Transform Your ❤️ Family&apos;s Health with AI-Powered Nutrition
          Guidance
        </Typography>
        <Typography variant="paragraph" color="gray" className="mb-4">
          Welcome to Nutrack, your companion in improving maternal and child
          health with personalized meal plans. Start your journey today and see
          the difference personalized nutrition can make for your family&apos;s
          well-being.
        </Typography>
        <div className="flex space-x-4">
          <Link href={"/register"}>
            <Button color="green">Register</Button>
          </Link>
          <Button color="gray">About</Button>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/assets/img/landing-img.jpg"
          alt="Nutrition Coaching"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
