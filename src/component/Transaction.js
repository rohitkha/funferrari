import React from "react";

function Transcation() {
  return (
    <>
      <nav style={{backgroundColor:"black"}}>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item active">
            <a className="link-light" href="" style={{fontSize:".8rem",paddingTop:"5px",paddingBottom:"5px"}}>
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a className="link-light" href="" style={{fontSize:".8rem",paddingTop:"5px",paddingBottom:"5px"}}>
              DIPOSIT
            </a>
          </li>
          <li className="nav-item">
            <a className="link-light" href="" style={{fontSize:".8rem",paddingTop:"5px",paddingBottom:"5px"}}>
              WITHDRAW
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Transcation;
{/* <View style={styles.transactionWrapper}>
        <View style={styles.icon}>
          <CustomImage
            URL={"https://funferrari.com/logo.png"}
            style={styles.transactionIcon}
          />
        </View>
        <View style={styles.transactionContent}>
          <Text style={styles.amount}>3000</Text>
          <Text style={styles.description}>Deposit on 3/3/2022 at 11.23pm</Text>
        </View>
      </View> */}
