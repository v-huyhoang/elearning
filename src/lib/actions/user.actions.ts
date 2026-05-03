"use server";

import User, { IUser } from "@/database/user.model";
import { TCreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import { cache } from "react";
import { currentUser } from "@clerk/nextjs/server";

export async function createUser(params: TCreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(params);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}
export const getCurrentUser = cache(async (): Promise<IUser | null> => {
  try {
    await connectToDatabase();

    const clerkUser = await currentUser();

    if (!clerkUser) return null;

    const user = await User.findOne({ clerkId: clerkUser.id });
    console.log("getCurrentUser:", user);
    if (!user) return null;

    return user as IUser;
  } catch (error) {
    console.error("getCurrentUser error:", error);
    return null;
  }
});
