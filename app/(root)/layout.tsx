import StreamVideoProvider from "@/providers/streamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";
export const metadata: Metadata = {
  title: "MeetSphere",
  description: "Video calling web application",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
