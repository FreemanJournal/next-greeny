import styles from './MultiStep.module.css'

export default function WizardNavbar(props){
  const showPreviousStep = props.wizard.nPreviousSteps !== 0 && props.step !== 5;
  const showForwardStep = props.wizard.nForwardSteps !== 0;

  return (
    <nav className={styles.wizardLayoutNavbar}>
      {/* Previous step */}
      {showPreviousStep && (
        <button
          className={styles.wizardLayoutNavbarButton}
          onClick={() => props.wizard.previousStep()}
        >
          Previous
        </button>
      )}
      {!showPreviousStep && <div></div>}

      {/* Forward step */}
      {showForwardStep && (
        <button
          className={styles.wizardLayoutNavbarButton}
          onClick={() => props.wizard.forwardStep()}
        >
          Next
        </button>
      )}
      {!showForwardStep && <div></div>}
    </nav>
  );
};
