export default function RadioButton({ name, value, text, defaultChecked } : { name: string, value: string, text: string, defaultChecked?: boolean }) {
    return (
      <label>
        <input
          type="radio"
          name={name}
          className="form-radio mr-2"
          value={value}
          defaultChecked={defaultChecked}
        />
        {text}
      </label>
    )
  }
  