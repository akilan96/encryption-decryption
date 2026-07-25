import React, { useState } from "react";

const Tabs = ({ active, setActive }) => {
  return (
    <div role="tablist" className=" -mt-5  ml-3  tabs tabs-border">
      <p
        role="tab"
        onClick={() => setActive("encrypted")}
        className={`tab font-bold tabs-font  ${active == "encrypted" ? " tab-active text-emerald-600 " : "text-teal-900"}`}
      >
        Encrypted Machines
      </p>
      <p
        role="tab"
        onClick={() => setActive("decrypted")}
        className={`tab font-bold tabs-font  ${active == "decrypted" ? " tab-active text-emerald-600 " : "text-teal-900"}`}
      >
        Decrypted Machines
      </p>
    </div>
  );
};

export default Tabs;
