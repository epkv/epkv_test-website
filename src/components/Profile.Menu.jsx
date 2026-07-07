import '../style.css'
import { useIsMobile } from '../hooks/useIsMobile'
import { useState } from 'react'

const ProfileMenu = () => {

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
                            <button>
                                test
                                <img>
                                </img>
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
                            <li className="flex justify-start pr-4 border rounded-2xl mb-2">
                                <button
                                    className="p-2"
                                    onClick={() => { console.log("Signed out") }}
                                >
                                    Sign out
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMenu;
