import "./SelectPlan.css";

import { plans } from "../../data/plansData";
import Button from "../../components/Button/Button";

function SelectPlan({prevStep, nextStep, togglePlanSelected, togglePlanType,  selectedPlan, isYearly }) {

  return (
    <div className="formPage selectPlan">
      <section className="formPageHeader selectPlanHeader">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </section>

      <section className="plans">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan ${plan.name.toLowerCase()}Plan ${selectedPlan === index ? "active" : ""}`}
            onClick={() => togglePlanSelected(index)}
          >
            <img src={plan.icon} alt={`${plan.name} Plan`} />
            <div className="planInfo">
              <p className="planTitle">{plan.name}</p>
              <p className="planPrice">{isYearly ? plan.priceYearly : plan.priceMonthly}</p>
              {isYearly && <p className="planOffer">2 months free</p>}
            </div>
          </div>
        ))}
      </section>

      <div className="togglePlanButton" onClick={togglePlanType}>
        <p>Monthly</p>
        <div className="toggleCircleCont">
          <div className={`toggleCircle ${isYearly ? "yearly" : "monthly"}`}></div>
        </div>
        <p>Yearly</p>
      </div>
      <Button typeButton={2} onClick={prevStep}/>
      <Button typeButton={1} onClick={nextStep}/>
    </div>
  );
}

export default SelectPlan;
