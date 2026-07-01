import '../style.css'
import arrowLeftLogo from "../assets/arrowLeft.svg"
import placeholderImageLogo from "../assets/placeholderImage.svg"

const SearchDesktop = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center z-50 bg-black/50 h-auto">
            <ul className="flex flex-col w-1/2 mt-16 justify-center bg-white">
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
            </ul>
            <button
                className="bg-white p-4 w-1/2"
                onClick={() => { console.log("Show more clicked") }}
            >
                <h1 className="text-blue-700 text-2xl">
                    Show more
                </h1>
            </button>
        </div>
    )
}

export default SearchDesktop;