import '../style.css'
import homeLogo from "../assets/home.svg"
import filterLogo from "../assets/filter.svg"
import accountLogo from "../assets/account.svg"

const HeaderMain = () => {

    return (
        <div className="flex flex-row flex-wrap w-full p-4 border-b border-solid border-black shadow-sm">
            <button className="bg-white hover:bg-gray-100 text-gray-800 pr-4">
                <img
                    src={homeLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Home clicked")
                    }}
                />
            </button>
            <input
                className="w-56 xs:w-68 sm:w-142 md:w-166 lg:w-320 h-8 bg-gray-200 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-300 rounded-4xl pl-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search..."
                onClick={() => {
                    console.log("Search clicked")
                }}
            />
            <button className="bg-white hover:bg-gray-100 text-gray-800 pl-4 pr-2">
                <img
                    src={filterLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Filter clicked")
                    }}
                />
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800">
                <img
                    src={accountLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Account clicked")
                    }}
                />
            </button>
        </div>
    )
}

export default HeaderMain;
