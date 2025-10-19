import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">About FarmHub</h1>
      <p className="mb-2">
        FarmHub is an online platform and app designed to help farmers make smart decisions. 
        It provides guidance on what crops to plant or animals to rear, depending on the soil, climate, and area conditions.
      </p>
      <p className="mb-2">
        Using AI, FarmHub studies the climate and environmental conditions to give step-by-step instructions for planting, rearing, and maintaining crops and livestock.
      </p>
      <p className="mb-2">
        It also covers the entire process: preparation, care, post-harvest handling, and maintenance, while giving insights on market prospects using AI and GPS data.
      </p>
      <p>
        FarmHub makes farming smarter, easier, and more profitable by combining technology with practical guidance.
      </p>
    </Layout>
  );
};

export default About;
