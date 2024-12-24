import PropTypes from 'prop-types'; // ES6

const SearchSection = ({ searchTerm, setSearchTerm }) => {
    const handleSubmit = e => {
        e.preventDefault(); 
    };
    const handleInputChange = e => {
        setSearchTerm(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input onChange={handleInputChange} type="search" id="default-search" value={searchTerm} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search Mockups, Logos..." required />
                <button type="submit" className="absolute right-2.5 bottom-2.5 bg-black text-white focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
    );
};

SearchSection.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    setSearchTerm: PropTypes.func.isRequired,
};

export default SearchSection;
