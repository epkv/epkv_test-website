import '../style.css'
import homeLogo from "../assets/home.svg"
import filterLogo from "../assets/filter.svg"
import accountLogo from "../assets/account.svg"
import addLogo from "../assets/add.svg"
import notificationLogo from "../assets/notification.svg"
import SearchFilter from './SearchFilter'

const HeaderDesktop = ({ onSearchResults, onHomeClick, onSearchClick, onFilterClick, onAddClick, onNotificationClick, onProfileClick }) => {

    return (
        <div className="flex flex-row w-full p-4 border-b border-solid border-black shadow-sm fixed inset-x-0 top-0 bg-white">
            <button
                className="bg-white text-gray-800 pr-4"
                onClick={onHomeClick}
            >
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={homeLogo}
                    alt='home'
                />
            </button>
            <SearchFilter onSearchResults={onSearchResults} />
            <div className="flex flex-row justify-around w-1/2">
                <button className="bg-white text-gray-800" onClick={onAddClick}>
                    <img className='hover:bg-gray-200 rounded-md' src={addLogo} alt='add' />
                </button>
                <button className="bg-white text-gray-800" onClick={onNotificationClick}>
                    <img className='hover:bg-gray-200 rounded-md' src={notificationLogo} alt='notification' />
                </button>
                <button className="bg-white text-gray-800" onClick={onProfileClick}>
                    <img className='hover:bg-gray-200 rounded-md' src={accountLogo} alt='profile' />
                </button>
            </div>
        </div>
    )
}

export default HeaderDesktop;