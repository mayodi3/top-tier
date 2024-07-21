import { auth } from "@/auth";
import React from "react";

const ClientPage = async () => {
  const session = await auth();

  if (!session) return;

  return <div>ClientPage</div>;
};

export default ClientPage;
