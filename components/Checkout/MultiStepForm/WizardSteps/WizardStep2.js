import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'

export default function WizardStep2 (props){
  return (
    <WizardLayout {...props}>
      <div className={styles.wizardLayoutQuestion}>Choose a nickname</div>

      <div className={styles.wizardLayoutContent}>
        <input
          type="text"
          className={styles.artInput}
          placeholder="Enter a creative nickname"
          value={props.form.nickname}
          onChange={(e) =>
            props.dispatchForm({
              type: "UPDATE_KEY_VALUES",
              value: { nickname: e.target.value }
            })
          }
        />
      </div>

      <div className={styles.wizardLayoutButtons}>
        <button
          className={styles.artButton}
          key={2}
          disabled={!props.form.nickname}
          onClick={() => props.wizard.nextStep()}
        >
          Continue
        </button>
      </div>
    </WizardLayout>
  );
};
