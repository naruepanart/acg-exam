import React from "react";

const MainLayout = ({ children }: any) => {
  return (
    <div>
      <main style={{ margin: "2rem auto", maxWidth: "1080px" }}>{children}</main>
    </div>
  );
};

export default MainLayout;
