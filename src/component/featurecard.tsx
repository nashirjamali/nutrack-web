'use client';

import { Card, CardBody, Typography } from "@material-tailwind/react";

const FeatureCard = ({ title, description, icon }: {title: any, description: any, icon: any}) => (
  <Card className="w-full h-full">
    <CardBody className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <Typography variant="h5" color="gray" className="mb-2">
        {title}
      </Typography>
      <Typography variant="paragraph" color="gray">
        {description}
      </Typography>
    </CardBody>
  </Card>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Personalized Nutrition Plans",
      description: "Receive a tailored nutrition plan designed specifically for your body and goals.",
      icon: "🍏",
    },
    {
      title: "Guidance from Certified Nutritionists",
      description: "Our certified nutritionists will provide professional guidance and support.",
      icon: "🧑‍⚕️",
    },
    {
      title: "Food Tracking and Analysis",
      description: "Track your food intake effortlessly using our user-friendly app.",
      icon: "📊",
    },
    {
      title: "Meal Planning and Recipes",
      description: "Access a vast collection of delicious and healthy recipes tailored to your dietary needs.",
      icon: "🍽️",
    },
    {
      title: "Lifestyle and Behavior Coaching",
      description: "Our nutritionists will work with you to develop healthy habits and address emotional eating.",
      icon: "🏋️",
    },
    {
      title: "Nutritional Education and Workshops",
      description: "Expand your knowledge of nutrition through informative articles and workshops.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-8">
        <Typography variant="h3" color="gray" className="text-center mb-12">
          Features
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
