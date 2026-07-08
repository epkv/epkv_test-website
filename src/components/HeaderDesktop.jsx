import '../style.css'
import homeLogo from "../assets/home.svg"
import accountLogo from "../assets/account.svg"
import addLogo from "../assets/add.svg"
import notificationLogo from "../assets/notification.svg"
import SearchFilter from "./SearchFilter"

const HeaderDesktop = ({ onSearchResults }) => {

    return (
        <div className="flex flex-row flex-wrap items-center w-full p-4 border-b border-solid border-black shadow-sm">
            <button className="bg-white text-gray-800 pr-4">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={homeLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Home clicked")
                    }}
                />
            </button>

            <SearchFilter onSearchResults={onSearchResults} />

            <button className="bg-white text-gray-800 pl-8 pr-8">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={addLogo}
                    alt='add'
                    onClick={() => {
                        console.log("Add clicked")
                    }}
                />
            </button>
            <button className="bg-white text-gray-800 pl-8 pr-8">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={notificationLogo}
                    alt='notification'
                    onClick={() => {
                        console.log("Notification clicked")
                    }}
                />
            </button>
            <button className="bg-white text-gray-800 pl-8">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={accountLogo}
                    alt='account'
                    onClick={() => {
                        console.log("Account clicked")
                    }}
                />
            </button>
        </div>
    )
}

export default HeaderDesktop;