
function SearchAutocomplete() {
    const [keywords] = useState(['Employee', 'Department', 'Salary']); // Replace with actual data
    const [results, setResults] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInput(value);
        setResults(
            keywords.filter((keyword) =>
                keyword.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    const handleSelect = (item) => {
        setInput(item);
        setResults([]);
    };

    return (
        <div className="search-box">
            <div className="headerSearch">
                {/* <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="search"
                    placeholder="Search Actions"
                    autoComplete="off"
                /> */}
                {/* <button><i className="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
            {/* {results.length > 0 && (
                <div className="result-box">
                    <ul>
                        {results.map((result, index) => (
                            <li key={index} onClick={() => handleSelect(result)}>
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>
            )} */}
        </div>
    );
}

export default SearchAutocomplete;