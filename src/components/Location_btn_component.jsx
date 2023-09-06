import React,{useState} from "react";
import "../components/Location_btn_component.css";
var data=require("./town.json");

export default function App() {
    const [value, setValue] = useState("");
  
    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    const onSearch = (searchTerm) => {
      setValue(searchTerm);
      // api to fetch the locations
      console.log("search ", searchTerm);
    };
  
    return (
      <div className="App1">
        <h4><b>Destination Town</b></h4>
  
        <div className="search-container">
          <div className="search-inner">
            <input type="text" value={value} onChange={onChange} />
            <button className="button1" onClick={() => onSearch(value)}> Search </button>
          </div>
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.full_name.toLowerCase();
  
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.full_name)}
                  className="dropdown-row"
                  key={item.full_name}
                >
                  {item.full_name}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

