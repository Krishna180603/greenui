import React from "react";
import "../styles/MarketList.css";
import Text from "./text";

interface MarketItem {
  name: string;
  rank: number;
}

const MarketList: React.FC = () => {
  const items: MarketItem[] = [
    { name: "NAME 1", rank: 1 },
    { name: "NAME 2", rank: 2 },
    { name: "NAME 3", rank: 3 },
    { name: "NAME 4", rank: 4 },
    { name: "NAME 5", rank: 5 },
  ];

  return (
    <div className="market-list-container">
      {items.map((item, index) => (
        <div key={index} className="market-list-item">
          <img
            src="/marketlist/listcontainer.svg"
            alt="Row background"
            className="list-bg"
          />
          <div className="market-item-content">
            <img
              src="/marketlist/profilecontainer.svg"
              alt="Profile"
              className="profile-icon"
            />
            <span className="item-name"><Text>{item.name}</Text></span>
            <span className="item-rank">
             <Text>RANK : {item.rank.toString().padStart(2, "0")}</Text> 
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarketList;
