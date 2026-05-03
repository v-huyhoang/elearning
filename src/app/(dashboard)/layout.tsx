import Sidebar from "@/components/layout/Sidebar";
import { UserProvider } from "@/components/provider/UserProvider";
import { getCurrentUser } from "@/lib/actions/user.actions";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  return (
    <UserProvider user={user}>
      <div className="wrapper grid grid-cols-[300px,minmax(0,1fr)] h-screen">
        <Sidebar />
        <main className="p-5">{children}</main>
      </div>
    </UserProvider>
  );
};

export default layout;
