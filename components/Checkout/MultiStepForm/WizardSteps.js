import WizardStep1 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep1";
import WizardStep2 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep2";
import WizardStep3 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep3";
import WizardStep4 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep4";
import WizardStep5 from "../../../components/Checkout/MultiStepForm/WizardSteps/WizardStep5";


export default function WizardSteps (props){
  switch (props.step) {
    case "intro":
      return <WizardStep1 {...props} />;

    case "name":
      return <WizardStep2 {...props} />;

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
