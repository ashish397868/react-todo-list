import Textarea from "../TextArea";
import Button from "../Button";
import "./index.css";
const index = ({ taskObj, isOpen, onclose, onChangeFunc, onSave }) => {
  if (!isOpen) {
    return null; 
  }
  return (
    <>
      <div className="modal-overlay">
        <section id="modal-section">
          <nav id="nav-modal">
            <span id="heading">Update Todo List</span>
            <button id="cross" onClick={onclose}>
              <svg className="cross-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </nav>
          <hr />
          <section id="modal-textarea-section">
            <Textarea title="Update your task" value={taskObj.text} func={onChangeFunc} />
          </section>
          <hr />
          <section id="modal-button-section">
            <Button variant="red" title="Cancel" func={onclose} />
            <Button variant="navy" title="Save" func={onSave} />
          </section>
        </section>
      </div>
    </>
  );
};

export default index;