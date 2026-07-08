import '../style.css'
import homeLogo from "../assets/homeMobile.svg"
import accountLogo from "../assets/accountMobile.svg"
import SearchFilter from './SearchFilter'

const HeaderMobile = ({ onSearchResults, onHomeClick, onSearchClick, onFilterClick, onAddClick, onNotificationClick, onProfileClick }) => {

    return (
        <div className="flex flex-row w-full p-4 border-b border-solid border-black shadow-sm fixed inset-x-0 top-0 bg-white">
            <button className="bg-white text-gray-800 pr-4" onClick={onHomeClick}>
                <img src={homeLogo} alt='home' />
            </button>
            <SearchFilter onSearchResults={onSearchResults} />
            <div className="flex flex-row justify-around w-1/3">
                <button className="bg-white text-gray-800" onClick={onProfileClick}>
                    <img src={accountLogo} alt='profile' />
                </button>
            </div>
        </div>
    )
}

export default HeaderMobile;
