import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'

export default function WizardStep3 (props){
  return (
    <WizardLayout {...props}>
      <div className={styles.wizardLayoutQuestion}>
        What are your favorite animals ?
      </div>

      <div className={styles.wizardLayoutContent}>
        <button
          key={2}
          className={styles.artButton}
          onClick={() => {
            props.dispatchForm({
              type: "UPDATE_KEY_VALUES",
              value: { preferredAnimals: "dogs" }
            });
            props.wizard.nextStep();
          }}
        >
          Dogs
        </button>
        <button
          key={2}
          className={styles.artButton}
          onClick={() => {
            props.dispatchForm({
              type: "UPDATE_KEY_VALUES",
              value: { preferredAnimals: "cats" }
            });
            props.wizard.nextStep();
          }}
        >
          Cats
        </button>
        <button
          key={3}
          className={styles.artButton}
          onClick={() => {
            props.dispatchForm({
              type: "UPDATE_KEY_VALUES",
              value: { preferredAnimals: "frogs" }
            });
            props.wizard.nextStep();
          }}
        >
          Frogs
        </button>
      </div>

      <div className={styles.wizardLayoutButtons}></div>
    </WizardLayout>
  );
};
