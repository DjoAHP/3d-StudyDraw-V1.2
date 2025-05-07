import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import ModelViewer from "./components/ModelViewer";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content */}
      <main
        className={`
        flex-1 transition-all duration-300 ease-in-out
        ${sidebarOpen ? "lg:ml-80" : "ml-0"}
      `}
      >
        <div className="h-screen p-0 overflow-hidden">
          <ModelViewer />
        </div>
      </main>
    </div>
  );
}

export default App;
