import { useContext, useState, useCallback, useEffect } from "react";
import { Context } from "./Context";
import { debounce } from "lodash";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Search() {
  const { search, setSearch } = useContext(Context);
  const [filtered, setFiltered] = useState([]);

  const URL = "https://hawaiian-homes-tracker.onrender.com/"; 

  const { data, isLoading, isError } = useQuery({
    queryKey: ["applications"],
    queryFn: () => axios.get(URL).then((res) => res.data),
    refetchOnWindowFocus: false,
  });

  // Proper debounced function using useCallback
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    debouncedSearch(e.target.value);
  };

  useEffect(() => {
    if (data?.applications) {
      const results = data.applications.filter((app) =>
        app.name.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(results);
    }
  }, [search, data]);

  if (isLoading) return <p>Loading applications...</p>;
  if (isError) return <p>Failed to load applications.</p>;

  return (
    <div>
      <h2>Search Applications</h2>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
      />
      <div>
        {filtered.length > 0 ? ( // if filtered.length is greater than 0, filter through app
          filtered.map((app) => (
            <div key={app._id}>
              <h3>Name: {app.name}</h3>
              <p>Application Date: {new Date(app.applicationDate).toLocaleDateString()}</p>
            </div>
          ))
        ) : ( // else send out no results
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
