import WizardNavbar from "./WizardNavbar";
import styles from './MultiStep.module.css'

export default function WizardLayout (props){
  
  return (
    <div className={styles.wizardLayout}>
      <WizardNavbar {...props} />

      <section className={styles.wizardLayout}>{props.children}</section>
    </div>
  );
};
