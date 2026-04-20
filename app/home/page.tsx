"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./home.css";
import Navbar from "@/components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="main">

      <Navbar />
      <div className="header">
        <h1>Welcome to FundLoom</h1>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <Image
          src="/donate.jpg"
          alt="donation"
          width={220}
          height={220}
        />

        <h2>Start fundraising in minutes</h2>
        <p>
          Create a campaign and receive contributions from people across the world.
        </p>

        {/* ✅ UPDATED BUTTON */}
        <button
          className="cta"
          onClick={() => router.push("/create")}
        >
          Start a Fundraiser
        </button>
      </div>

      {/* Features */}
      <div className="features">
        <div className="card">⚡ Quick Setup</div>
        <div className="card">🌍 Global Reach</div>
        <div className="card">🔒 Secure</div>
      </div>

      {/* Help Card */}
      <div className="help">
        <div>
          <b><p className="helpText">Need help setting up?</p></b>
          <small>Our team will guide you</small>
        </div>
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20request%20a%20campaign%20call"
          target="_blank"
        >
          <button className="callBtn">Request</button>
        </a>
      </div>

    </div>
  );
}