import styles from './MultiStep.module.css'

export default function WizardDescription(props){
    return (
      <>
        <div className={styles.text__grey}>
          Shows a basic implementation of useWizard.
        </div>
        <code>
          const [step, wizard] = useWizard([`intro`, `name`, `animal`,
          `validation`, `confirmation`]);
        </code>
      </>
    );
  };
  