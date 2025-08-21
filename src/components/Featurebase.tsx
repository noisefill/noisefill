"use client"; // NextJS 13 requires this. Remove if you are using NextJS 12 or lower
import { useEffect } from "react";
import Script from "next/script";

const FeaturebaseMessenger = () => {
  useEffect(() => {
    const win = window as any;

    // Initialize Featurebase if it doesn't exist
    if (typeof win.Featurebase !== "function") {
      win.Featurebase = function () {
        (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
      };
    }

    // Boot Featurebase messenger with configuration
    win.Featurebase("boot", {
      appId: "68a7998c41047f49acb25d53", // required
      theme: "light",
      language: "en",
    });
  }, []);

  return (
    <>
      {/* Load the Featurebase SDK */}
      <Script
        src="https://do.featurebase.app/js/sdk.js"
        id="featurebase-sdk"
        strategy="lazyOnload"
      />
    </>
  );
};

export default FeaturebaseMessenger;
