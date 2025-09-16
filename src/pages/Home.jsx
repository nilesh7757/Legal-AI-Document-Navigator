import React from "react";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
        {/* Hero Section */}
        <section className="max-w-4xl">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            AI Legal Document Navigator
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Understand legal documents with ease.  
            Our AI-powered assistant helps individuals, small businesses, and
            professionals navigate complex legal terms and contracts in plain,
            simple language.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#get-started"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="learn-more" className="mt-20 max-w-5xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Use AI Legal Document Navigator?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Plain-Language Explanations</h3>
              <p className="text-gray-600">
                Break down legal jargon into clear, simple terms you can
                understand.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-gray-600">
                Chat with the assistant without registration. No personal data
                needed for basic use.
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">Save & Share</h3>
              <p className="text-gray-600">
                Registered users can save their chat history securely and share
                with trusted people when needed.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
