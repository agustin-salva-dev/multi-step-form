import "./Succesed.css";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";

import Button from "../../components/Button/Button";

function Succesed({resetForm}) {
  return (
    <div className="formPage succesed">
        <img src={thankYouIcon} alt="" />
        <section className="formPageHeader succesedHeader">
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
      </section>
      <Button typeButton={3} onClick={resetForm}/>
    </div>
  );
}

export default Succesed