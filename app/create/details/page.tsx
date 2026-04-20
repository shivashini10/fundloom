"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./details.css";
import Header from "@/components/Header";

export default function CampaignDetails() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [story, setStory] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!title.trim() || !story.trim() || !amount.trim()) {
      setError("Please fill all required fields");
      return;
    }

    setError("");

    const campaignData = {
      title,
      amount,
      story,
      image,
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("campaign", JSON.stringify(campaignData));
    }

    // ✅ Direct navigation (no popup)
    router.push("/create/preview");
  };

  return (
    <div className="detailsWrapper">

      <Header />

      <h2>Create Your Campaign</h2>

      {/* TITLE */}
      <div className="formGroup">
        <label>Campaign Title *</label>
        <input
          type="text"
          placeholder="Eg: Help me fund my education"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* AMOUNT */}
      <div className="formGroup">
        <label>Amount to be raised *</label>
        <input
          type="number"
          placeholder="Eg: 50000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* STORY */}
      <div className="formGroup">
        <label>Your Story *</label>
        <textarea
          placeholder="Explain your cause..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>

      {/* IMAGE */}
      <div className="formGroup">
        <label>Image URL (optional)</label>
        <input
          type="text"
          placeholder="Paste image link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      {/* ERROR */}
      {error && <p className="error">{error}</p>}

      {/* BUTTONS */}
      <div className="buttonGroup">
        <button className="backBtn" onClick={() => router.push("/create")}>
          Back
        </button>

        <button className="nextBtn" onClick={handleNext}>
          Continue
        </button>
      </div>
    </div>
  );
}