import { useState } from "react";
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import FilterButton from "./FilterButton";

const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {!isOpen ?
                (
                    <div className="pl-10">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="border-2 border-black rounded-none w-12 h-12"
                        >
                            <FontAwesomeIcon icon={faFilter} className="text-black text-2xl" />
                        </button>
                    </div>
                ) :
                (
                    <button className="text-white z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>x</button>
                )
            }
            <div
                className={`top-0 left-0 w-[20vw] bg-white fixed h-full z-40  ease-in-out duration-300 overflow-auto
                ${isOpen ? "translate-x-0" : "-translate-x-full"}`} >
                <div className="border-b-2 border-black">
                    <h1 className="text-4xl font-semibold text-black pl-5 py-5">Filters</h1>
                </div>
                <div className="border-b-2 pb-5">
                    <h1 className="text-lg pl-5 py-4 font-medium">Category</h1>
                    <ul className="pl-5">
                        <FilterButton>Barbells</FilterButton>
                        <FilterButton>Weights</FilterButton>
                        <FilterButton>Benches</FilterButton>
                        <FilterButton>Dumbells</FilterButton>
                        <FilterButton>Racks</FilterButton>
                        <FilterButton>Machines</FilterButton>
                        <FilterButton>Conditioning</FilterButton>
                        <FilterButton>Strongman</FilterButton>
                        <FilterButton>Crossfit</FilterButton>
                        <FilterButton>Gymnastics</FilterButton>
                    </ul>
                </div>
                <div className="border-b-2 pb-5">
                    <h1 className="text-lg pl-5 py-4 font-medium">Brands</h1>
                    <ul className="pl-5">
                        <FilterButton>Rogue</FilterButton>
                        <FilterButton>Rep</FilterButton>
                        <FilterButton>Sorinex</FilterButton>
                        <FilterButton>Titan</FilterButton>
                        <FilterButton>Peloton</FilterButton>
                        <FilterButton>EliteFTS</FilterButton>
                        <FilterButton>NordicTrack</FilterButton>
                        <FilterButton>LifeFitness</FilterButton>
                        <FilterButton>TRX</FilterButton>
                    </ul>
                </div>
                <div className="border-b-2 pb-5">
                    <h1 className="text-lg pl-5 py-5 font-medium">Condition</h1>
                    <ul className="pl-5 flex flex-col items-start">
                        <div className="flex flex-row">
                            <input type="checkbox" className="accent-black cursor-pointer" />
                            <p className="pl-2">Brand New</p>
                        </div>
                        <div className="flex flex-row">
                            <input type="checkbox" className="accent-black cursor-pointer" />
                            <p className="pl-2">Excellent</p>
                        </div>
                        <div className="flex flex-row">
                            <input type="checkbox" className="accent-black cursor-pointer" />
                            <p className="pl-2">Great</p>
                        </div>
                        <div className="flex flex-row">
                            <input type="checkbox" className="accent-black cursor-pointer" />
                            <p className="pl-2">Good</p>
                        </div>
                        <div className="flex flex-row">
                            <input type="checkbox" className="accent-black cursor-pointer" />
                            <p className="pl-2">Used</p>
                        </div>

                    </ul>
                </div>
                <div className="border-b-2 pb-5">
                    <h1 className="text-lg pl-5 py-4 font-medium">Date</h1>
                    <div className="flex flex-col">
                        <form className="pl-5 flex flex-col px-16">

                            <label htmlFor="Earlist">Earlist:</label><br />
                            <input
                                type="text"
                                id="Earliest"
                                placeholder="mm/dd/yyyy"
                                className="px-5 py-2 pl-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />

                            <label htmlFor="Latest" className="pt-4">Latest:</label><br />
                            <input
                                type="text"
                                id="Lastest"
                                placeholder="mm/dd/yyyy"
                                className="px-5 py-2 pl-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />

                        </form>
                    </div>
                </div>
                <div className="border-b-2 pb-5">
                    <h1 className="text-lg pl-5 py-4 font-medium">Price Range</h1>
                    <form className="p-4">
                        <div className="flex mb-4">
                            <div className="mr-2">
                                <label htmlFor="minPrice" className="block text-gray-700">Min:</label>
                                <input
                                    type="number"
                                    id="minPrice"
                                    name="minPrice"
                                    step="100"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-black"
                                />
                            </div>

                            <div className="ml-2">
                                <label htmlFor="maxPrice" className="block text-gray-700">Max:</label>
                                <input
                                    type="number"
                                    id="maxPrice"
                                    name="maxPrice"
                                    step="100"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:border-black"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div
                className={`fixed z-30 top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />
        </>
    );
};

export default SideBar;
