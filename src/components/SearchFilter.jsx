import { useState } from 'react'
import filterLogo from "../assets/filter.svg"
import { apiBase } from './apibase'

const API_BASE = apiBase


const SearchFilter = ({ onSearchResults, onLoadingChange }) => {
    const [searchText, setSearchText] = useState("")
    const [filterOpen, setFilterOpen] = useState(false)
    const [activeFilter, setActiveFilter] = useState(null)


    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")


    const [scoreOrder, setScoreOrder] = useState("desc")
    const [scoreAbove, setScoreAbove] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const deliverResults = (data) => {
        if (onSearchResults) {
            onSearchResults(data)
        } else {
            console.log("Search results:", data)
        }
    }

    const runSearch = async () => {
        setLoading(true)
        if (onLoadingChange) onLoadingChange(true)
        setError(null)

        try {
            let url

            if (activeFilter === "date" && startDate && endDate) {
                const params = new URLSearchParams({
                    startdate: startDate,
                    enddate: endDate,
                    search: searchText || "",
                })
                url = `${API_BASE}/?${params.toString()}`
            } else if (activeFilter === "score") {
                const params = new URLSearchParams({
                    search: searchText || "",
                })

                if (scoreOrder === "above") {
                    if (scoreAbove !== "") params.set("above", scoreAbove)
                    url = `${API_BASE}/above?${params.toString()}`
                } else if (scoreOrder === "asc") {
                    url = `${API_BASE}/asc?${params.toString()}`
                } else {
                    url = `${API_BASE}/desc?${params.toString()}`
                }
            } else if (searchText) {
                const params = new URLSearchParams({ search: searchText })
                url = `${API_BASE}/?${params.toString()}`
            } else {
                url = `${API_BASE}/all`
            }

            const res = await fetch(url)
            if (!res.ok) throw new Error(`Request failed with status ${res.status}`)
            const data = await res.json()
            deliverResults(data)
        } catch (err) {
            console.error(err)
            setError("There was an error fetching results")
        } finally {
            setLoading(false)
            if (onLoadingChange) onLoadingChange(false)
        }
    }

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter") {
            runSearch()
        }
    }

    const toggleFilterPanel = () => {
        setFilterOpen((open) => !open)
    }

    const selectFilter = (filter) => {
        setActiveFilter((current) => (current === filter ? null : filter))
    }

    return (
        <div className="relative flex flex-row items-center">
            <input
                className="w-56 xxxs:w-60 xxs:w-64 xs:w-66 sm:w-142 md:w-166 lg:w-320 h-8 bg-gray-200 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-300 rounded-4xl pl-4 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearchKeyDown}
            />
            <button
                className={`bg-white text-gray-800 pl-4 pr-8 ${activeFilter ? 'opacity-100' : ''}`}
                onClick={toggleFilterPanel}
            >
                <img
                    className={`hover:bg-gray-200 rounded-md ${activeFilter ? 'bg-gray-200' : ''}`}
                    src={filterLogo}
                    alt='filter'
                />
            </button>

            {filterOpen && (
                <div className="absolute left-0 top-full mt-2 z-10 w-80 bg-white border border-slate-300 rounded-md shadow-md p-4 flex flex-col gap-4">
                    <div className="flex flex-row gap-2">
                        <button
                            className={`flex-1 text-sm py-1 rounded-full border ${activeFilter === 'date' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-800 border-slate-300'}`}
                            onClick={() => selectFilter('date')}
                        >
                            Date
                        </button>
                        <button
                            className={`flex-1 text-sm py-1 rounded-full border ${activeFilter === 'score' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-800 border-slate-300'}`}
                            onClick={() => selectFilter('score')}
                        >
                            Score
                        </button>
                    </div>

                    {activeFilter === 'date' && (
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-slate-500">
                                Start date
                                <input
                                    type="date"
                                    className="w-full mt-1 border border-slate-300 rounded-md px-2 py-1 text-sm"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </label>
                            <label className="text-xs text-slate-500">
                                End date
                                <input
                                    type="date"
                                    className="w-full mt-1 border border-slate-300 rounded-md px-2 py-1 text-sm"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </label>
                        </div>
                    )}

                    {activeFilter === 'score' && (
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2">
                                <button
                                    className={`flex-1 text-xs py-1 rounded-full border ${scoreOrder === 'desc' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-800 border-slate-300'}`}
                                    onClick={() => setScoreOrder('desc')}
                                >
                                    Highest first
                                </button>
                                <button
                                    className={`flex-1 text-xs py-1 rounded-full border ${scoreOrder === 'asc' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-800 border-slate-300'}`}
                                    onClick={() => setScoreOrder('asc')}
                                >
                                    Lowest first
                                </button>
                                <button
                                    className={`flex-1 text-xs py-1 rounded-full border ${scoreOrder === 'above' ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-gray-800 border-slate-300'}`}
                                    onClick={() => setScoreOrder('above')}
                                >
                                    Above value
                                </button>
                            </div>
                            {scoreOrder === 'above' && (
                                <input
                                    type="number"
                                    className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm"
                                    placeholder="Minimum score"
                                    value={scoreAbove}
                                    onChange={(e) => setScoreAbove(e.target.value)}
                                />
                            )}
                        </div>
                    )}

                    <button
                        className="bg-slate-800 text-white text-sm rounded-full py-2 hover:bg-slate-700 disabled:opacity-50"
                        onClick={() => {
                            runSearch()
                            setFilterOpen(false)
                        }}
                        disabled={loading}
                    >
                        {loading ? 'Searching...' : 'Apply'}
                    </button>

                    {error && <p className="text-xs text-red-500">{error}</p>}
                </div>
            )}
        </div>
    )
}

export default SearchFilter;