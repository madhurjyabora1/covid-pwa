import React,{useState} from "react";
import "./Search.scss"
const Search = ({
  search,
  onSearchInputChange,
  results,
  highlightSearch,
  fetchResults,
  data,
  showDefaultValues,
  defaultValues,
  toggleDefaultValues,
  setSearch
}) => {
  const highlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span className="name">
      
        {parts.map((part, i) => (
          <span
            key={i}
            className={
              part.toLowerCase() === highlight.toLowerCase() ? "highlight-txt" : {}
            }
          >
            {part}
          </span>
        ))}
      </span>
    );
  },
  [resultsVisible, setResultsVisible] = useState(true),
  listenForClickAway = () => {
    document.addEventListener("click", globalClickHandler);
    setResultsVisible(true);
  },
  globalClickHandler = ({ target }) => {
    if (!target.closest(".search-box")) {
      document.removeEventListener("click", globalClickHandler);
      setResultsVisible(false);
    }
  };
  return (
    <div className="searchbar">
      <span>
        <div className="coronaImg">
          <img id="logo" src="https://i.imgur.com/Ka0dbaX.png" alt="corona"  />
        </div>      
      <div className="container">
        <div className="search-box">
          <div className="main">
            <input
              placeholder="Search for a District..."
              type="text"
              className="search-input"
              value={search}
              onChange={onSearchInputChange}
              onFocus={() => {
                toggleDefaultValues(true);
                listenForClickAway();
              }}
              
            />
            
            {!search ? (<span className="search-icon">
              <i style={{fontSize: "1.4rem"}} className="fa fa-search" aria-hidden="true" />
            </span> ) : (
              <span className="search-icon">
              <i style={{fontSize: "1.4rem"}} className="fa fa-close" aria-hidden="true" onClick={()=>setSearch("")}/>
            </span>
            )}
            
          </div>
          
          {!search.length && showDefaultValues && resultsVisible ? (
            <div className="result-box">
              {data
                .filter((item, idx) => defaultValues[item.district])
                .map((dist, idx) => (
                  <div
                    key={idx}
                    className="search-result"
                    onClick={() => {
                      console.log("item", dist);
                      fetchResults(dist.district);
                    }}
                  >
                    {highlightedText(dist.district, search)}
                    
                  </div>
                ))}
            </div>
          ) : null}
          {highlightSearch ? null : results.length && resultsVisible ? (
            <div className="result-box">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  className="search-result"
                  onClick={() => fetchResults(item.district)}
                >
                  {highlightedText(item.district, search)}
                  
                </div>
              ))}
            </div>
          ) : search.length && resultsVisible ? (
            <div className="result-box">
              <div className="search-result">No results</div>
            </div>
          ) : null}
        </div>
      </div>
      </span>
    </div>
  );
};

export default Search;
