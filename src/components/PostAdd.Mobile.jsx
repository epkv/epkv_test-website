import '../style.css'
import addLogo from "../assets/addMobile.svg"
import exitLogo from "../assets/exit.svg"
import arrowDownLogo from "../assets/arrowDown.svg"

const PostAddMobile = ({ onClosePost }) => {

    return (
        <div className="flex flex-col flex-wrap w-full h-full">
            <div className=" flex flex-row justify-between w-full border-b border-solid border-black p-4">
                <button className="bg-white text-gray-800" onClick={onClosePost}>
                    <img
                        src={exitLogo}
                        alt='exit'
                    />
                </button>
                <button className="bg-white text-gray-800 flex flex-row text-center text-3xl">
                    <div className="pt-3 pb-3">
                        Visibility
                    </div>

                    <img
                        src={arrowDownLogo}
                        alt='visibility'
                        onClick={() => {
                            console.log("Visibility clicked")
                        }}
                    />
                </button>
                <button className="bg-white text-gray-800 text-center text-3xl"
                    onClick={() => {
                        console.log("Post clicked")
                    }}>
                    Post
                </button>
            </div>
            <div className="w-full h-auto">
                <textarea
                    className="w-full h-160 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow text-xl text-wrap"
                    placeholder="Content..."
                />
            </div>
        </div>
    )
}

export default PostAddMobile;
