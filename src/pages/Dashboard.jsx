import { useState } from "react";

// Data
import mockData from "../assets/data.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});
  const searchBarHandle = (event)=>{
    
    setSearchText(event.target.value)
    const value = event.target.value;
    let flag = 0;
    mockData.results.map((row)=>{
      //console.log(event.target.value);
      if(row["&id"] === value.trim())
      {
        flag = 1;
        setSelectedOrderDetails(row.executionDetails);
        setSelectedOrderTimeStamps(row.timestamps);
      }
    
    })
    if(flag === 0)
    {
     setSelectedOrderDetails({});
     setSelectedOrderTimeStamps({}); 
    }
    return;
  }
  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle="6 orders" />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={searchBarHandle}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => {setCurrency(e.target.value)
            }}
            
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} currency={currency} />
      </div>
    </div>
  );
};

export default Dashboard;
