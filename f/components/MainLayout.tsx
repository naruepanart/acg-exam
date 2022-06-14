import React from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <main style={{ margin: "2rem auto", maxWidth: "1080px" }}>
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
