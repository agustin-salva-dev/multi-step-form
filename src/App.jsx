import "./App.css";

import { useState } from "react";

import SideBar from "./components/SideBar/SideBar";
import PersonalInfo from "./pages/PersonalInfo/PersonalInfo";
import SelectPlan from "./pages/SelectPlan/SelectPlan";
import AddOns from "./pages/PickAddOns/AddOns";
import Summary from "./pages/Summary/Summary";
import Succesed from "./pages/Succesed/Succesed";

function App() {
  // Add Ons Selected and Select Add Ons function
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const toggleAddOn = (index) => {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((addOnIndex) => addOnIndex !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  // Plan Selected and Select Plan function
  const [selectedPlan, setSelectedPlan] = useState(null);

  const togglePlanSelected = (planIndex) => {
    setSelectedPlan(planIndex);
  };

  // Plan Type Control
  const [isYearly, setIsYearly] = useState(false);

  const togglePlanType = () => {
    setIsYearly((prev) => !prev);
  };

  // Form Steps Show Control
  const steps = [PersonalInfo, SelectPlan, AddOns, Summary, Succesed];

  const [currentStep, setCurrentStep] = useState(1);

  // Next and Previous Step Functions
  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const backToSelectPlan = () => {
    setCurrentStep(2);
  }

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedPlan(null);
    setSelectedAddOns([]);
  }
  // Form Step Component
  const StepComponent = steps[currentStep - 1];

  return (
    <div className="appMainDiv">
      <SideBar currentStep={currentStep} />
      <div className="stepPage">
        <StepComponent
          nextStep={nextStep}
          prevStep={prevStep}
          togglePlanType={togglePlanType}
          isYearly={isYearly}
          selectedPlan={selectedPlan}
          togglePlanSelected={togglePlanSelected}
          selectedAddOns={selectedAddOns}
          toggleAddOn={toggleAddOn}
          backToSelectPlan={backToSelectPlan}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
}

export default App;
