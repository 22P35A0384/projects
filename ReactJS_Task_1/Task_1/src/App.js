import './App.css';
import { useState } from 'react';

function App() {
  const fruits = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Lemon',
    'Orange',
    'Strawberry',
    'Watermelon',
    'Mango',
    'Pineapple',
    'Peach',
    'Blueberry',
    'Raspberry',
    'Kiwi',
    'Cantaloupe',
    'Blackberry',
    'Pear',
    'Plum',
    'Coconut',
    'Pomegranate',
  ];
  

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(query)
    );
    setFilteredFruits(filtered);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Fruits Search</h1>
      <input
        type="text"
        placeholder="Search for a fruit"
        value={searchQuery}
        onChange={handleInputChange}
      /><br/>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
