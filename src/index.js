// index.js is the starting point of app.
import React from "react"; // here we are importing react components so we can build ui components.
import ReactDOM from "react-dom/client"; // importing DOM , here React DOM is the messanger it takes react code and displays it on the screen
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./components/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root")); // we are creating root element for div in layman terms all items will be inside that div element which has the h1 element or in other tems it connects your JSX html code with your react.js brain
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App></App>
        </ThemeProvider>
    </React.StrictMode>
); // start building UI tree from here so expense tracker can be seen on the screen.