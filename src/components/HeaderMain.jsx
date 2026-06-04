import '../style.css'

function HeaderMain() {

    return (
        <div class="flex flex-row flex-wrap w-full p-4 border-b border-solid border-black shadow-sm">
                <input
                    class="w-160 bg-gray-200 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-300 rounded-4xl pl-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                    placeholder="Search..."
                />
        </div>
    )
}

export default HeaderMain;
