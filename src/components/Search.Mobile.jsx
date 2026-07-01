import '../style.css'
import arrowLeftLogo from "../assets/arrowLeft.svg"
import placeholderImageLogo from "../assets/placeholderImage.svg"

const SearchMobile = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full p-4 justify-between border-b border-solid border-black shadow-sm fixed inset-x-0 top-0 bg-white">
                <button className="bg-white text-gray-800">
                    <img
                        className='hover:bg-gray-200 rounded-md'
                        src={arrowLeftLogo}
                        alt='return'
                        onClick={() => {
                            console.log("Return clicked")
                        }}
                    />
                </button>
                <input
                    className="mt-4 h-8 w-56 xxxs:w-60 xxs:w-64 xs:w-66 sm:w-142 md:w-166 lg:w-320 h-8 bg-gray-200 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-300 rounded-4xl pl-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search..."
                    onClick={() => {
                        console.log("Search clicked")
                    }}
                />
            </div>
            <ul className="flex flex-col w-full mt-24 border-b">
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <button
                        className="w-full flex flex-row"
                        onClick={() => { console.log("Search result clicked") }}
                    >
                        <img
                            classname="hover:bg-gray-200 rounded-md"
                            src={placeholderImageLogo}
                            alt="userImage"
                        />
                        <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <button
                        className="w-full flex flex-row"
                        onClick={() => { console.log("Search result clicked") }}
                    >
                        <img
                            className="hover:bg-gray-200 rounded-md"
                            src={placeholderImageLogo}
                            alt="userImage"
                        />
                        <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <button
                        className="w-full flex flex-row"
                        onClick={() => { console.log("Search result clicked") }}
                    >
                        <img
                            className="hover:bg-gray-200 rounded-md"
                            src={placeholderImageLogo}
                            alt="userImage"
                        />
                        <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <button
                        className="w-full flex flex-row"
                        onClick={() => { console.log("Search result clicked") }}
                    >
                        <img
                            className="hover:bg-gray-200 rounded-md"
                            src={placeholderImageLogo}
                            alt="userImage"
                        />
                        <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <button
                        className="w-full flex flex-row"
                        onClick={() => { console.log("Search result clicked") }}
                    >
                        <img
                            className="hover:bg-gray-200 rounded-md"
                            src={placeholderImageLogo}
                            alt="userImage"
                        />
                        <p className="text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </button>
                </li>
                <button
                    className="bg-white p-4"
                    onClick={() => { console.log("Show more clicked") }}
                >
                    <h1 className="text-blue-700 text-2xl">
                        Show more
                    </h1>
                </button>
            </ul>
        </div>
    )
}

export default SearchMobile;