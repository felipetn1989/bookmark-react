export default function Button({ bg, textColor, text, width }) {
    return (
        <button className={`${bg} ${textColor} ${width} text-sm font-medium shadow-md px-[1.1875rem] py-3.5 tracking-wide rounded-md m-auto hover:bg-white ${bg !== 'bg-white' ? 'hover:text-[#5368df]' : ''} lg:m-[unset] lg:px-7`}>
            {text}
        </button>
    )
}