import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'
export default function WizardStep4(props){
  return (
    <WizardLayout {...props}>
      <div className={styles.wizardLayoutQuestion}>Validate your choices</div>

      <div className={styles.wizardLayoutContent}>
        Nickname: {props.form.nickname}
        <br />
        <br />
        Preferred animals: {props.form.preferredAnimals}
      </div>

      <div className={styles.wizardLayoutButtons}>
        <button
          key={2}
          className={styles.artButton}
          onClick={() => props.wizard.nextStep()}
        >
          Validate
        </button>
      </div>
    </WizardLayout>
  );
};
