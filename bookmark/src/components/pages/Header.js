import logo from '../images/logo-bookmark.svg'
import hamburger from '../images/icon-hamburger.svg'

export default function Header() {
    return (
        <header className='flex justify-between items-center px-8 py-10'>
            <img src={logo} alt="Bookmark logo" />
            <button className='hover:cursor-pointer'>
                <img src={hamburger} alt="Menu Icon" />
            </button>
        </header>
    )
}