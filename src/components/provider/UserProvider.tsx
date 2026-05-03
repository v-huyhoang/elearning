"use client";

import { IUser } from "@/database/user.model";
import { createContext, useContext } from "react";

type UserContextType = IUser | null;

const UserContext = createContext<UserContextType>(null);

export const UserProvider = ({
  user,
  children,
}: {
  user: IUser | null;
  children: React.ReactNode;
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useCurrentUser = (): UserContextType => {
  const context = useContext(UserContext);

  return context;
};
