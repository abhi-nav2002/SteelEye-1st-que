import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";
import styles from "./List.module.css";

const List = (props) => {
  const rows = props.rows;
  const currency = props.currency;
  console.log();
  let count = 0;
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row) => 
        (
          
          <ListRow key = {count++}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.timestamps.orderSubmitted}</ListRowCell>
            
            <ListRowCell>{currency === "USD" ? row.bestExecutionData.orderVolume.USD : 
            currency === "GBP" ? row.bestExecutionData.orderVolume.GBP : 
            currency === "JPY" ? row.bestExecutionData.orderVolume.JPY : row.bestExecutionData.orderVolume.EUR}</ListRowCell>
            
        
          </ListRow>
        )
        )
        }
      </tbody>
    </table>
  );
};

export default List;
