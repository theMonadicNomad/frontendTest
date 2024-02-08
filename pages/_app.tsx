import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import CarsList from "../src/components/CarsList";


function HomePage() {
  return (
    <React.StrictMode>
       <StyleProvider>
    <ThemePicker variant="light">
      <CarsList />
      </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
