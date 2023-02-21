"use client";
import { useState, useEffect } from "react";
import Layout from "@/layouts";

export default function Home() {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return (
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h4
          style={{
            color: "gray",
          }}
        >
          Loading...!
        </h4>
      </main>
    );
  }

  if (typeof window === "undefined") {
    return (
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <h4
          style={{
            color: "gray",
          }}
        >
          Loading...!
        </h4>
      </main>
    );
  } else {
    return (
      <main>
        <Layout />
      </main>
    );
  }
}
