import '../style.css'
import addLogo from "../assets/addMobile.svg"
import notificationLogo from "../assets/notificationMobile.svg"

const FooterMobile = () => {

    return (
        <div className="flex flex-row w-full p-4 border-t border-solid border-black rounded-md shadow-sm fixed inset-x-0 bottom-0 bg-white">
            <div className="flex flex-row justify-around w-full">
                <button className="bg-white text-gray-800">
                    <img
                        className='hover:bg-gray-200 rounded-md'
                        src={addLogo}
                        alt='add'
                        onClick={() => {
                            console.log("Add clicked")
                        }}
                    />
                </button>
                <button className="bg-white text-gray-800">
                    <img
                        className='hover:bg-gray-200 rounded-md'
                        src={notificationLogo}
                        alt='notification'
                        onClick={() => {
                            console.log("Notification clicked")
                        }}
                    />
                </button>
            </div>
        </div>
    )
}

export default FooterMobile;
