import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">
            Welcome to FarmHub
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            FarmHub helps farmers make smart decisions by providing guidance on crops and livestock 
            based on soil, climate, and area conditions. AI-powered insights give step-by-step 
            instructions, post-harvest tips, and market prospects to make farming easier and profitable.
          </p>
          <Button className="bg-green-900 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Smart Decisions</h3>
            <p className="text-gray-700">
              Receive AI-driven recommendations tailored to your region, soil type, and climate. 
              Plan planting, harvesting, and livestock care with confidence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Step-by-Step Guidance</h3>
            <p className="text-gray-700">
              Detailed instructions for crop management, animal rearing, and post-harvest activities 
              help you maximize productivity and reduce risks.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4 text-green-900">Market Insights</h3>
            <p className="text-gray-700">
              FarmHub provides market trends and GPS-powered pricing information to help you sell 
              produce and livestock at the best price.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
