import { useState } from 'react';
import PropTypes from 'prop-types';

const SortingSection = ({ setSortCriterion }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (criterion) => {
        setSortCriterion(criterion);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={toggleMenu}
                className="rounded-md bg-slate-800 font-bold py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
            >
                Sort By
            </button>
            {isOpen && (
                <ul
                    role="menu"
                    className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
                >
                    <li
                        role="menuitem"
                        className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                        onClick={() => handleSort("Food Expire Date")}
                    >
                        Food Expire Date
                    </li>
                </ul>
            )}
        </div>
    );
};

SortingSection.propTypes = {
    setSortCriterion: PropTypes.func.isRequired,
};

export default SortingSection;
