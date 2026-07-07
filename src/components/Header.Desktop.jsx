import '../style.css'
import homeLogo from "../assets/home.svg"
import filterLogo from "../assets/filter.svg"
import accountLogo from "../assets/account.svg"
import addLogo from "../assets/add.svg"
import notificationLogo from "../assets/notification.svg"

const HeaderDesktop = ({ onHomeClick, onSearchClick, onFilterClick, onAddClick, onNotificationClick, onProfileClick }) => {

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
            <input
                className="w-220 ll:w-260 h-8 2xl:w-380 bg-gray-200 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-300 rounded-4xl pl-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search..."
                onClick={onSearchClick}
                alt='search'
            />
            <div className="flex flex-row justify-around w-1/2">
                <button className="bg-white text-gray-800" onClick={onFilterClick}>
                    <img className='hover:bg-gray-200 rounded-md' src={filterLogo} alt='filter' />
                </button>
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