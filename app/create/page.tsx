"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./create.css";
import Header from "@/components/Header";

export default function Create() {
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelected(value);
    setError("");
  };

  const handleContinue = () => {
    if (!selected) {
      setError("Please select who the fundraiser is for");
      return;
    }

    setError("");
    localStorage.setItem("beneficiary", selected);
    router.push("/create/details");
  };

  return (
    <div className="page">

      <Header />

      {/* Title */}
      <div className="topBox">
        <h3>Beneficiary Details</h3>
      </div>

      <p className="subtitle">
        This fundraiser will benefit
      </p>

      {/* Main Card */}
      <div className={`card ${error ? "cardError" : ""}`}>

        {/* Myself */}
        <div className="group">
          <p className="groupTitle">Myself</p>

          <div className="btnRow">
            <button
              type="button"
              className={selected === "myself" ? "activeBtn" : ""}
              onClick={() => handleSelect("myself")}
            >
              👤 Myself
            </button>
          </div>
        </div>

        {/* Family */}
        <div className="group">
          <p className="groupTitle">
            My family <span>next of kin & relatives</span>
          </p>

          <div className="btnRow">
            <button
              type="button"
              className={selected === "family-individual" ? "activeBtn" : ""}
              onClick={() => handleSelect("family-individual")}
            >
              👤 Individual
            </button>

            <button
              type="button"
              className={selected === "family-group" ? "activeBtn" : ""}
              onClick={() => handleSelect("family-group")}
            >
              👥 Group
            </button>
          </div>
        </div>

        {/* Friends */}
        <div className="group">
          <p className="groupTitle">
            My friends <span>classmates, colleagues & people I know</span>
          </p>

          <div className="btnRow">
            <button
              type="button"
              className={selected === "friends-individual" ? "activeBtn" : ""}
              onClick={() => handleSelect("friends-individual")}
            >
              👤 Individual
            </button>

            <button
              type="button"
              className={selected === "friends-group" ? "activeBtn" : ""}
              onClick={() => handleSelect("friends-group")}
            >
              👥 Group
            </button>
          </div>
        </div>

        {/* Others */}
        <div className="group">
          <p className="groupTitle">
            Others <span>people, animals, communities etc</span>
          </p>

          <div className="btnRow">
            <button
              type="button"
              className={selected === "others-individual" ? "activeBtn" : ""}
              onClick={() => handleSelect("others-individual")}
            >
              👤 Individual
            </button>

            <button
              type="button"
              className={selected === "others-group" ? "activeBtn" : ""}
              onClick={() => handleSelect("others-group")}
            >
              👥 Group
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="divider"></div>

        {/* NGO (NOW INSIDE CARD) */}
        <div
          className={`ngo ${selected === "ngo" ? "activeBtn" : ""}`}
          onClick={() => handleSelect("ngo")}
        >
          <h4>🏢 Registered NGO</h4>
          <p>
            A registered not-for-profit that has a valid PAN card issued in its name
          </p>
        </div>

      </div>

      {/* Error */}
      {error && <p className="error">{error}</p>}

      {/* Bottom Button */}
      <div className="bottomBar">
        <button
          type="button"
          className="continueBtn"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>

    </div>
  );
}