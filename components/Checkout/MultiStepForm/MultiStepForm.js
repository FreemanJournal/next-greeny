import React, { useReducer } from 'react'
import { useWizard } from "use-wizard";
import formReducer from './formReducer';
import WizardDescription from './WizardDescription';
import WizardSteps from './WizardSteps';
import styles from './MultiStep.module.css'
export default function MultiStepForm() {
    // This is how you create the wizard
    const [step, wizard] = useWizard([`intro`, `name`, `animal`,
    `validation`, `confirmation`]);

    // This is only used to store user inputs
    const [form, dispatchForm] = useReducer(formReducer, {});

    return (
        <div>

            {/* <header>
                <h1>A linear wizard (with numbers)</h1>
            </header>

            <section className={styles.section}>
                <WizardDescription />
            </section> */}

            <section className={styles.section}>
                <WizardSteps {...{ step, wizard, form, dispatchForm }} />
            </section>
        </div>
    )
}
