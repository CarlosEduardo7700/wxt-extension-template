import * as React from "react";
import { supabase } from "../../lib/supabase";

export async function handleUpgrade(setIsRedirecting: React.Dispatch<React.SetStateAction<boolean>>) {
  setIsRedirecting(true);

  try {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      alert("Please log in to the extension before upgrading.");
      setIsRedirecting(false);
      return;
    }

    const LANDING_PAGE_URL = "http://localhost:3001"; 

    const response = await fetch(`${LANDING_PAGE_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user.id,
        email: user.email,
      }),
    });

    const data = await response.json();

    if (data.url) {
      window.open(data.url, "_blank");
    } else {
      console.error("Error generating checkout:", data.error);
      alert("Could not initiate payment. Please try again.");
    }
  } catch (error) {
    console.error("Error in upgrade flow:", error);
    alert("A connection error occurred.");
  } finally {
    setIsRedirecting(false);
  }
}