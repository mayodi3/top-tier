"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { auth } from "@/auth";
import { useSession } from "next-auth/react";

const ChooseRole = () => {
  const router = useRouter();
  const [role, setRole] = useState("");
  const {status,data} = useSession()

  const handleSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // Update the user's role in your database
    const response = await fetch("/api/update-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    });

    if (response.ok) {
      // Continue the sign-in process
      if (data && data.user && data.user.)
      await auth.refresh();
      router.push("/");
    } else {
      // Handle error
      console.error("Error updating role");
    }
  };

  return (
    <div>
      <h1>Choose Your Role</h1>
      <form onSubmit={handleSubmit}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="client">Client</option>
          <option value="manager">Manager</option>
          <option value="writer">Writer</option>
          <option value="editor">Editor</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ChooseRole;
