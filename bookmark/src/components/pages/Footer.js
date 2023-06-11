import logo from '../images/logo-bookmark-white.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'

export default function Footer() {
    return (
        <footer className='bg-[#252b46] grid gap-10 place-content-center text-white py-10'>
            <img src={logo} alt="Bookmark logo" />
            <ul className='space-y-7 text-center uppercase font-medium text-sm tracking-[0.125rem]'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-center gap-10 mt-1.5'>
                <img src={facebookIcon} alt="Facebook Icon" />
                <img src={twitterIcon} alt="Twitter Icon" />
            </div>
        </footer>
    )
}