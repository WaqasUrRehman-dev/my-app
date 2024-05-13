import User from "@/adapter/models/user";
import dbConnection from "@/dbConnection/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import { getData } from "@/utils/getToken";

export async function GET(request: NextRequest) {
  await dbConnection;

  const userId = await getData(request);

  const user = await User.findById({ _id: userId }).select("-password");

  return NextResponse.json({
    message: "User profile",
    data: user,
  });
}
