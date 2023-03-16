import style from './AddField.module.css'

const AddField = ({ text, handleInput, handleSubmit }) => {
  return (
    <label className={style.addFieldContainer}>
          <input
              className={style.input}
        type="text"
        value={text}
        onChange={e => handleInput(e.target.value)}
      />
          <button className={style.btn}
              onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default AddField;
