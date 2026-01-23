import "./PersonalInfo.css"
import Button from "../../components/Button/Button"

function PersonalInfo ({ nextStep }) {
    return (
        <div className="formPage personalInfo">
            <section className="formPageHeader">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        </section>
        <form action="">
        <fieldset>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="e.g. Stephen King"/>
        </fieldset>
        <fieldset>
            <label htmlFor="">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com"/>
        </fieldset>
        <fieldset>
            <label htmlFor="">Phone Number</label>
            <input type="number" placeholder="e.g. +1 234 567 890"/>
        </fieldset>
        </form>

        <Button typeButton={1} onClick={nextStep}/>
        </div>
    )
}

export default PersonalInfo