import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let vehicleData = [
  { type: "Car", year: 2003, model: "A", price: 32000 },
  { type: "Car", year: 2011, model: "B", price: 4400 },
  { type: "Car", year: 2016, model: "B", price: 15500 },
  { type: "Trucks", year: 2014, model: "D", price: 18000 },
  { type: "Trucks", year: 2013, model: "E", price: 5200 },
  { type: "Convertibles", year: 2009, model: "F", price: 2000 },
  { type: "Convertibles", year: 2010, model: "G", price: 6000 },
  { type: "Convertibles", year: 2012, model: "H", price: 12500 },
  { type: "Convertibles", year: 2017, model: "M", price: 50000 }
];

function App() {
  const types = [...new Set(vehicleData.map(data => data.type))];

  return (
    <div className="App">
      <PageTitle title="Welcome to React Transportation" />
      <PageSubTitle title="The best place to buy vehicles online" />
      <FilterOptions types={types} />
      <VehicleDetails types={types} data={vehicleData} />
    </div>
  );
}
const VehicleDetails = props => {
  return props.types.map(type => (
    <VehicleSection
      type={type}
      data={props.data.filter(y => y.type === type)}
    />
  ));
};

const VehicleSection = props => {
  return (
    <div>
      <h1>{props.type}</h1>
      <table>
        <TableHeader data={["Year", "Model", "Price", "Buy"]} />
        {props.data.map(x => (
          <TableRow year={x.year} model={x.model} price={x.price} />
        ))}
      </table>
    </div>
  );
};

const TableHeader = props => {
  return (
    <tr>
      {props.data.map(header => (
        <td>{header}</td>
      ))}
    </tr>
  );
};

const TableRow = ({ year, model, price }) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{model}</td>
      <td>${price}</td>
      <td>
        <BuyButton />
      </td>
    </tr>
  );
};

const BuyButton = () => {
  return <button type="button">Buy Now</button>;
};

const PageTitle = props => {
  return <h1>{props.title}</h1>;
};

const PageSubTitle = props => {
  return <h3>{props.title}</h3>;
};

const NewOnlySelection = props => {
  return (
    <p>
      New Only <input type="checkbox" />
    </p>
  );
};

const FilterOptions = props => {
  return (
    <p>
      <NewOnlySelection />
      Select Type:
      <select>
        {props.types.map(type => (
          <option value={type}>{type}</option>
        ))}
      </select>
    </p>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
