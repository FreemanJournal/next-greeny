import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'
export default function WizardStep5(props){
  return (
    <WizardLayout {...props}>
      <div className={styles.wizardLayoutQuestion}>Thank you !</div>

      <div className={styles.wizardLayoutContent}>You can now close this page.</div>

      <div className={styles.wizardLayoutButtons}></div>
    </WizardLayout>
  );
};
