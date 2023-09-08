import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div>
      <section className="professional_wrapper">
        <div className="p-8 mt-20 mb-20">
          <h1 className="font-bold text-3xl">Education</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            quos eaque reprehenderit libero modi, delectus animi quibusdam non
            deleniti, voluptatum, laboriosam quasi explicabo error sit voluptas
            nam temporibus deserunt harum.
          </p>
          <Button
            size="sm"
            className="hidden mt-5 lg:inline-block hover:bg-white hover:text-black"
          >
            <Link to="/">
              <span>AJ Styles</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Education;
