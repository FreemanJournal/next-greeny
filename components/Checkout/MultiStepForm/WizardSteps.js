import WizardStep1 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep1";
import WizardStep2 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep2";
import WizardStep3 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep3";
import WizardStep4 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep4";
import WizardStep5 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep5";
import OrderSummary from "./FormSteps/OrderSummary/OrderSummary";
import ShippingAddress from "./FormSteps/ShippingAddress/ShippingAddress";


export default function WizardSteps (props){
  switch (props.step) {
    case "order":
      return <OrderSummary {...props} />;

    case "address":
      return <ShippingAddress {...props} />;

    case "animal":
      return <WizardStep3 {...props} />;

    case "validation":
      return <WizardStep4 {...props} />;

    case "confirmation":
      return <WizardStep5 {...props} />;

    default:
      return <>Step does not exist</>;
  }
};
