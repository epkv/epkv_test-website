import '../style.css'
import addLogo from "../assets/addMobile.svg"
import notificationLogo from "../assets/notificationMobile.svg"

const FooterMobile = () => {

    return (
        <div className="flex flex-row flex-wrap w-full p-4 border-t border-solid border-black rounded-md shadow-sm absolute inset-x-0 bottom-0 justify-evenly">
            <button className="bg-white text-gray-800 pl-8 pr-8">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={addLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Add clicked")
                    }}
                />
            </button>
            <button className="bg-white text-gray-800 pl-8 pr-8">
                <img
                    className='hover:bg-gray-200 rounded-md'
                    src={notificationLogo}
                    alt='home'
                    onClick={() => {
                        console.log("Notification clicked")
                    }}
                />
            </button>
        </div>
    )
}

export default FooterMobile;
