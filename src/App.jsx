import "@mantine/core/styles.css";
import { useState } from "react";
import "./App.css";
import Index from "./pages/Index/Index.jsx";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <Index />
    </MantineProvider>
  );
}

export default App;
