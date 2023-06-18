import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
 <BrowserRouter>
 <AuthContextProvider>
    <ChakraProvider >
 <App />
 </ChakraProvider>
 </AuthContextProvider>
 </BrowserRouter>
  

);