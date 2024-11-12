import  { useState } from 'react';

const SearchComponent = () => {
  // Sample array of objects
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Sam Green', email: 'sam@example.com' },
    { id: 4, name: 'Emily White', email: 'emily@example.com' },
    { id: 5, name: 'Michael Brown', email: 'michael@example.com' }
  ];

  // State to hold search query and filtered results
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the data based on the query
    if (query) {
      const filtered = data.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.email.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // If query is empty, show all data
    }
  };

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id}>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
