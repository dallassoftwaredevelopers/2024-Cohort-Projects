const TextInput = ({ value, onChange, name, placeholder, id, autoComplete, type}) => (
    <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className='form-control'
        placeholder={placeholder}
        id={id}
        autoComplete={autoComplete}
    />
);
export default TextInput;