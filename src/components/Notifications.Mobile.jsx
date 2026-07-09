import '../style.css'
import arrowLeftLogo from "../assets/arrowLeft.svg"
import placeholderImageLogo from "../assets/placeholderImage.svg"

const NotificationsMobile = () => {
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
                <h1 className="text-3xl pt-3 pb-3">
                    Notifications
                </h1>
            </div>
            <ul className="flex flex-col w-full mt-24">
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        classname="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
                <li className="flex flex-row w-full justify-between border-b border-solid border-black shadow-sm pt-4 pb-4 pr-4 pl-4">
                    <img
                        className="hover:bg-gray-200 rounded-md"
                        src={placeholderImageLogo}
                        alt="userImage"
                    />
                    <h1>Username</h1>
                    <p>Added a new post</p>
                </li>
            </ul>
        </div>
    )
}

export default NotificationsMobile;