export default function Input({ formName, type, placeholder }) {
    return (
        <label htmlFor={formName}>
            <input className="w-full py-3 px-5 rounded-md placeholder:text-[0.8125rem] placeholder:tracking-widest" type={type} name={formName} id={formName} placeholder={placeholder} />
        </label>
    )
}