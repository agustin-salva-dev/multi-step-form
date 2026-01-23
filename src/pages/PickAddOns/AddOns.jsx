import "./AddOns.css";

import Button from "../../components/Button/Button";
import { addOns } from "../../data/addOnsData";	

import { useState } from "react";

function AddOns({ prevStep, nextStep, isYearly, selectedAddOns, toggleAddOn }) {

  return (
    <div className="formPage addOns">
      <section className="formPageHeader">
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
      </section>

      <section className="addOnsList">
        {addOns.map((addOn, index) => (
          <div
            key={index}
            className={`addOn ${
              selectedAddOns.includes(index) ? "active" : ""
            }`}
            onClick={() => toggleAddOn(index)}
          > 
          <input
          id={`addOn-${index}`}
          className="addOnCheck"
          type="checkbox"
          checked={selectedAddOns.includes(index)}
          onChange={() => toggleAddOn(index)}
        />
            <label htmlFor={`addOn-${index}`} className="customCheckbox"></label>
            <div className="addOnInfo">
              <p className="addOnTitle">{addOn.name}</p>
              <p className="addOnDesc">{addOn.desc}</p>
            </div>
            <p className="addOnPrice">{isYearly ? addOn.priceYearly : addOn.priceMonthly}</p>
          </div>
        ))}
      </section>
      <Button typeButton={1} onClick={nextStep} />
      <Button typeButton={2} onClick={prevStep} />
    </div>
  );
}

export default AddOns;
