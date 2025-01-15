import React from "react";
import logo from "/astronot.png";
export default function SignUP() {
  return (
    <section className="min-h-screen">
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* logo part */}
        <div className="flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
        <div className="">{/* sign up form */}</div>
      </div>
    </section>
  );
}
