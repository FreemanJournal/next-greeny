import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'

export default function WizardStep1 (props){
  
  return (
    <WizardLayout {...props}>
      <div className={styles.wizardLayoutQuestion}>Do you dare to continue ?</div>

      <div className={styles.wizardLayoutContent}>
        <input
          type="checkbox"
          checked={props.form.userDares}
          onClick={() =>
            props.dispatchForm({ type: "TOGGLE_DARE", value: null })
          }
        />{" "}
        I dare
      </div>

      <div className={styles.wizardLayoutButtons}>
        <button
          key={1}
          disabled={!props.form.userDares}
          className={styles.artButton}
          onClick={() => props.wizard.nextStep()}
        >
          Continue
        </button>
      </div>
    </WizardLayout>
  );
};
