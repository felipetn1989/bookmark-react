export default function Input({ formName, type, placeholder, handleOnChange, error }) {

  return (
    <label htmlFor={formName}>
      <input
        className={`w-full text-black py-3 px-5 rounded-md placeholder:text-[0.8125rem] placeholder:tracking-widest border ${!error ? "border-[#fa5757]" : ""}`}
        type={type}
        name={formName}
        id={formName}
        placeholder={placeholder}
        onChange={handleOnChange}
      />
    </label>
  );
}
