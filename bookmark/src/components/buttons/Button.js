export default function Button({ bg, textColor, text }) {
    return (
        <button className={`${bg} ${textColor} text-sm font-medium shadow-md px-[1.1875rem] py-3.5 tracking-wide rounded-md`}>
            {text}
        </button>
    )
}