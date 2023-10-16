import LeftAside from "@/components/layouts/LeftAside";
import Main from "@/components/layouts/Main";
import React from "react";

export default function page() {
  return (
    <>
      <div className="flex-container p-0">
        <main className="flex-container">
          <LeftAside />
          <Main />
        </main>
      </div>
    </>
  );
}
