"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./preview.css";
import Header from "@/components/Header";

export default function PreviewPage() {
  const [data, setData] = useState<any>(null);
  const [showPopup, setShowPopup] = useState(false); // ✅ NEW
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("campaign");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="previewWrapper">

      <Header />

      <h2>Preview Your Campaign</h2>

      <div className="previewCard">
        {data.image && (
          <img src={data.image} alt="campaign" className="previewImage" />
        )}

        <h3 className="previewTitle">{data.title}</h3>
        <p className="previewAmount">₹{data.amount}</p>
        <p className="previewStory">{data.story}</p>
      </div>

      <div className="previewButtons">
        <button
          className="editBtn"
          onClick={() => router.push("/create/details")}
        >
          Edit
        </button>

        <button
          className="submitBtn"
          onClick={() => setShowPopup(true)} // ✅ SHOW POPUP
        >
          Submit Campaign
        </button>
      </div>

      {/* ✅ POPUP */}
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupBox">
            <h2>🎉 Congratulations!</h2>
            <p>Your campaign has been submitted successfully.</p>

            <button
              className="popupBtn"
              onClick={() => router.push("/home")}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}