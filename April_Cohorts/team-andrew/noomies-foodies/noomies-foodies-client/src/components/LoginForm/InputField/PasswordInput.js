const PasswordInput = ({ value, onChange }) => (
    <input
       type="password"
       name="password"
       value={value}
       onChange={onChange}
       className='form-control'
       placeholder='Enter your password'
       id="password"
       autoComplete="current-password"
    />
   );

   export default PasswordInput;
   