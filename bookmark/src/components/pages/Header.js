import logo from '../images/logo-bookmark.svg'
import hamburger from '../images/icon-hamburger.svg'

export default function Header() {
    return (
        <header className='flex justify-between items-center'>
            <img src={logo} alt="Bookmark logo" />
            <button>
                <img src={hamburger} alt="Menu Icon" />
            </button>
        </header>
    )
}