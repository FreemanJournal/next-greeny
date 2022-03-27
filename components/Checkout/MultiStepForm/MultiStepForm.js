import React, { useReducer, useState } from 'react'
import { useWizard } from "use-wizard";
import formReducer from './formReducer';
import WizardDescription from './WizardDescription';
import WizardSteps from './WizardSteps';
import styles from './MultiStep.module.css'
export default function MultiStepForm() {
    // This is how you create the wizard
    const [step, wizard] = useWizard([`order`, `address`, `animal`,
    `validation`, `confirmation`]);

    // This is only used to store user inputs
    const [form, dispatchForm] = useReducer(formReducer, {});
    const [grandTotal, setGrandTotal] = useState(0);

    return (
        <div>

            {/* <header>
                <h1>A linear wizard (with numbers)</h1>
            </header>

            <section className={styles.section}>
                <WizardDescription />
            </section> */}

            <section className={styles.section}>
                <WizardSteps {...{ step, wizard, form, dispatchForm,grandTotal, setGrandTotal }} />
            </section>
        </div>
    )
}
