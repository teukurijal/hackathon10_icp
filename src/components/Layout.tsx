import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen md:min-h-fit max-w-[480px] mx-auto bg-white md:shadow-xl md:rounded-lg">
      <main className="flex-grow">{children}</main>
    </div>
  );
};
