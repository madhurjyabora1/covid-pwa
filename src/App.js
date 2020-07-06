import React, { useState, useEffect } from "react";
import axios from "axios";
import District from "./components/District/District";
import "./App.scss"
import Search from "./components/Search/Search";
import Spinner from 'react-bootstrap/Spinner'

const App = () => {
  const [search, setSearch] = useState("");
  const [highlightSearch, setHighlightSearch] = useState(false);
  const [data, setData] = useState(null);
  const [results, setResults] = useState([]);
  const [showDefaultValues, setShowDefaultValues] = useState(false);
  const [defaultValues] = useState({
    "Mumbai": true,
    "New Delhi": true,
    "Chennai": true,
    "Kolkata": true,
    "Bengaluru Urban": true
  });
  useEffect(() => {
    handleRequest();
  }, []);

  useEffect(() => {
    getResults();

    if (highlightSearch) {
      filterData();
    } 
    if(!search)
    {
      handleRequest()
    }
    // eslint-disable-next-line
  }, [search, highlightSearch]);

  const handleRequest = async () => {
    setData(null);
    try {
      const res = await axios("https://api.covid19india.org/zones.json");
      setData(res.data.zones);
    } catch (err) {
      console.error(err);
    }
  };

  const toggleDefaultValues = val => {
    setShowDefaultValues(val);
  };

  const onSearchInputChange = e => {
    if (data) {
      setSearch(e.target.value);
      setHighlightSearch(false);
      setShowDefaultValues(false);
    }
  };

  const fetchResults = val => {
    setSearch(val);
    setHighlightSearch(true);
  };

  const getResults = () => {
    if (search.length) {
      let newResults = data.filter(item =>
        item.district.toLowerCase().includes(search.toLowerCase())
      );

      newResults = newResults.filter((item, idx) => idx <= 5);

      setResults(newResults);
    } else {
      setResults([]);
    }
  };

  const filterData = () => {
    setData(null);
    let newData = data.filter(
      item => item.district.toString() === search.toString()
    );

    setData(newData);
  };

  const resetFunc = () => {
    setSearch("");
    setHighlightSearch(false);
    setResults([]);
    setShowDefaultValues(false);

    handleRequest();
  };

  return (
    <div className="app">
      <Search
        search={search}
        highlightSearch={highlightSearch}
        onSearchInputChange={onSearchInputChange}
        results={results}
        fetchResults={fetchResults}
        data={data}
        showDefaultValues={showDefaultValues}
        defaultValues={defaultValues}
        toggleDefaultValues={toggleDefaultValues}
        
        setSearch={setSearch}
      />
      <div className="main-data">
        <div className="container">
          {data === null ? (
           <Spinner animation="border"  size="large" variant="primary" className="spinnnahhh">
           <span className="sr-only">Loading...</span>
         </Spinner>
          ) : (
            data.map((item, idx) => <District key={idx} item={item} />)
          )}
        </div>
      </div>
      {highlightSearch && search ? (
        <div className="reset-btn">
          <button onClick={resetFunc} className="extra">
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default App;
