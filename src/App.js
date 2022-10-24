import { useState } from "react";
import contacts from "./Contacts";
import List from "./Contact";
 
function App() {
  const [letters, findContact] = useState("");
  const search = (data) => {
    return data.filter(
      (item) =>
        item.firstName.toLowerCase().includes(letters) ||
        item.lastName.toLowerCase().includes(letters) ||
        item.phone.includes(letters)
    );
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="⌕ search..."
          onChange={(item) => findContact(item.target.value)}
        />
      </div>
      <List data={search(contacts)} />
    </div>
  );
}

export default App;
