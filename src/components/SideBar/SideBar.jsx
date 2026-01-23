import "./SideBar.css"

function SideBar ({currentStep}) {

    return (
        <div className="sideBar">
      {[1, 2, 3, 4].map((step) => (
        <section key={step} className={`sideBarStep ${currentStep === step ? "active" : ""}`}>
          <p className={`stepNumber ${currentStep === step ? "active" : ""}`}>{step}</p>
          <div className="stepInfo">
            <p className="stepNumberText">STEP {step}</p>
            <p className="stepDesc">
              {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"][step - 1]} 
            </p>
          </div>
        </section>
      ))}
    </div>
    )
}

export default SideBar