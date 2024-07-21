import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: "All the jobs" }, { status: 200 });
};
