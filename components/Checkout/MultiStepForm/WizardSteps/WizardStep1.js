import WizardLayout from "../WizardLayout";
import styles from '../MultiStep.module.css'

export default function WizardStep1(props) {

  return (
    <WizardLayout {...props}>
      <form className="modal-form">
        <div className="form-group">
          <label className="form-label">number</label>
          <input
            className="form-control"
            type="number"
            placeholder="Enter your number"
            name='contactNumber'
            onChange={(e) =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { number: e.target.value }
              })}
            value={props.form.number}
          />
        </div>

        <div className="form-group">
          <label className="form-label">address</label>
          <textarea
            className="form-control"
            placeholder="Enter your address"
            name='contactAddress'
            onChange={(e) =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { contactAddress: e.target.value }
              })}
            value={props.form.contactAddress}
          ></textarea>
        </div>

        <div className="form-group">
          <label className="form-label">card number</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your card number"
            name='cardNumber'
            onChange={(e) =>
              props.dispatchForm({
                type: "UPDATE_KEY_VALUES",
                value: { cardNumber: e.target.value }
              })}
            value={props.form.cardNumber}
          />
        </div>

      <button
        className="form-btn"
        type="button"
        key={1}
        disabled={!props.form.number || !props.form.contactAddress || !props.form.cardNumber}
        onClick={() => props.wizard.nextStep()}>
        save info
      </button>
    </form>
    </WizardLayout >
  );
};
