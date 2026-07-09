import '../style.css'
import addLogo from "../assets/addMobile.svg"
import notificationLogo from "../assets/notificationMobile.svg"

const FooterMobile = ({ onNotificationClick, onAddClick }) => {

    return (
        <div className="flex flex-row w-full p-4 border-t border-solid border-black shadow-sm fixed inset-x-0 bottom-0 bg-white">
            <div className="flex flex-row justify-around w-full">
                <button className="flex items-center justify-center bg-white text-gray-800 w-1/3 h-auto" onClick={onAddClick}>
                    <img
                        className='hover:bg-gray-200 rounded-md'
                        src={addLogo}
                        alt='addPost'
                    />
                </button>
                <button
                    className="flex items-center justify-center bg-white text-gray-800 w-1/3 h-auto"
                    onClick={() => {
                        console.log("Notification clicked")
                    }}
                >
                    <img
                        className='hover:bg-gray-200 rounded-md'
                        src={notificationLogo}
                        alt='notification'
                    />
                </button>
            </div>
        </div>
    )
}

export default FooterMobile;
