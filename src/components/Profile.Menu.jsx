import '../style.css'
import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'
import exitLogo from "../assets/exit.svg"
import LoginRegister from './LoginRegister'

const ProfileMenu = ({ onCloseProfileMenu, setIsLoggedIn, isLoggedIn }) => {

    const [isOpenLogin, setIsOpenLogin] = useState(false);

    // Whether login component is mounted or not
    const handleOpenLogin = () => {
        setIsOpenLogin(true);
    }

    // Whether user is logged in or not
    const handleLogIn = () => {
        setIsLoggedIn(true);
    }

    const handleLogOut = () => {
        setIsLoggedIn(false);
    }

    if (isOpenLogin)
        return (
            <LoginRegister onLoggedIn={handleLogIn} />
        )

    console.log("islogin? profilemenu: ", isLoggedIn)

    return (
        <>
            <div
                className="fixed inset-0 bg-black/40 z-40"
            >
                <div className="flex justify-end">
                    <div className="flex flex-col w-1/2 h-auto bg-white z-50 border-l border-b rounded-bl-2xl relative">
                        <div className="flex flex-row justify-between pl-6 pr-6 pt-4">
                            <h1>
                                Username
                            </h1>
                            <button onClick={onCloseProfileMenu}>
                                <img src={exitLogo} alt='exit' />
                            </button>
                        </div>
                        <ul className="flex flex-col justify-around items-around p-4">
                            <li className="flex justify-start border rounded-2xl mb-2">
                                <button
                                    className="p-2"
                                    onClick={() => { console.log("Profile") }}
                                >
                                    Profile
                                </button>
                            </li>
                            <li className="flex justify-start pr-4 border rounded-2xl mb-2">
                                <button
                                    className="p-2"
                                    onClick={() => { console.log("Settings") }}
                                >
                                    Settings
                                </button>
                            </li>
                            <li className="flex justify-start pr-4 border rounded-2xl mb-2">
                                <button
                                    className="p-2"
                                    onClick={() => { console.log("Dark mode") }}
                                >
                                    Dark mode
                                </button>
                            </li>
                            {isLoggedIn ?
                                <li className="flex justify-start pr-4 border rounded-2xl mb-2">
                                    <button
                                        className="p-2"
                                        onClick={handleLogOut}
                                    >
                                        Sign out
                                    </button>
                                </li> :
                                <li className="flex justify-start pr-4 border rounded-2xl mb-2">
                                    <button
                                        className="p-2"
                                        onClick={handleOpenLogin}
                                    >
                                        Log in
                                    </button>
                                </li>}
                        </ul>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileMenu;
