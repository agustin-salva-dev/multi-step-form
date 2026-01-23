import "./Summary.css";
import { plans } from "../../data/plansData";
import Button from "../../components/Button/Button";
import { addOns } from "../../data/addOnsData";

function Summary({
  nextStep,
  prevStep,
  isYearly,
  selectedPlan,
  selectedAddOns,
  backToSelectPlan,
}) {
  const selectedPlanName = plans[selectedPlan]?.name;
  const selectedPlanPrice = isYearly
    ? parseInt(plans[selectedPlan]?.priceYearly.replace(/[^0-9]/g, ""), 10)
    : parseInt(plans[selectedPlan]?.priceMonthly.replace(/[^0-9]/g, ""), 10);

  const addOnsTotalPrice = selectedAddOns.reduce((total, index) => {
    const addOnPrice = isYearly
      ? parseInt(addOns[index]?.priceYearly.replace(/[^0-9]/g, ""), 10)
      : parseInt(addOns[index]?.priceMonthly.replace(/[^0-9]/g, ""), 10);
    return total + (addOnPrice || 0);
  }, 0);

  const totalPrice = selectedPlanPrice + addOnsTotalPrice;

  return (
    <div className="formPage summary">
      <section className="formPageHeader">
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>
      </section>

      <section className="summaryTotalInfo">
        <p className="totalText">Total (per {isYearly ? "year" : "month"})</p>
        <p className="totalPrice">
          ${totalPrice}/{isYearly ? "yr" : "mo"}
        </p>
      </section>
        <hr className="summaryHr"/>
      <section className="summaryInfo">
        <div className="finalPlanInfo">
        <p className="planSectionTitle">Plan Selected</p>
          <section className="planSelectedInfo">
            <div className="planInfoHeader">
            <p className="finalPlanName">
              {selectedPlanName} {isYearly ? "(Yearly)" : "(Monthly)"}
            </p>
            <p className="changePlanButton" onClick={backToSelectPlan}>
              Change
            </p>
            </div>
            <p className="planFinalPrice">
            ${selectedPlanPrice}/{isYearly ? "yr" : "mo"}
          </p>
          </section>
        </div>
        <hr className="summaryHr2" />
        <div className="finalAddOnsInfo">
          {selectedAddOns.map((index) => (
            <section
              key={index}
              id={`addOn-${index}`}
              className="finalAddOnInfo"
            >
                <div className="addOnSelectedInfo">
              <p className="finalAddOnName">{addOns[index]?.name}</p>
              <p className="addOnFinalPrice">
                {isYearly
                  ? addOns[index]?.priceYearly
                  : addOns[index]?.priceMonthly}
              </p>
              </div>
              <hr className="summaryHr2" />
            </section>
          ))}
        </div>
      </section>

      <Button typeButton={2} onClick={prevStep} />
      <Button typeButton={1} onClick={nextStep} />
    </div>
  );
}

export default Summary;
