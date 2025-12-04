import React from "react";
import ImageSlider from "../components/Sliding";
import About from "../components/About"

function Home() {
  return <div><>
    <div className="py-10">
      <ImageSlider />
    </div>
    <About/>
    </></div>;
}

export default Home;
