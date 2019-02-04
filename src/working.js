import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let cars = [
  { type: "car", year: 2003, model: "A", price: 32000 },
  { type: "car", year: 2011, model: "B", price: 4400 },
  { type: "car", year: 2016, model: "B", price: 15500 }
];

let trucks = [
  { type: "trucks", year: 2014, model: "D", price: 18000 },
  { type: "trucks", year: 2013, model: "E", price: 5200 }
];

let convertibles = [
  { type: "convertibles", year: 2009, model: "F", price: 2000 },
  { type: "convertibles", year: 2010, model: "G", price: 6000 },
  { type: "convertibles", year: 2012, model: "H", price: 12500 },
  { type: "convertibles", year: 2017, model: "M", price: 50000 }
];

function App() {
  return (
    <div className="App">
      <PageTitle title="Welcome to React Transportation" />
      <PageSubTitle title="The best place to buy vehicles online" />
      <NewOnlySelection />
      <FilterOptions types={[cars, trucks, convertibles]} />
      <VehicleSection title="Cars" data={cars} />
      <VehicleSection title="Trucks" data={trucks} />
      <VehicleSection title="Convertibles" data={convertibles} />
    </div>
  );
}

const VehicleSection = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <table>
        <WriteTableHeader />
        {props.data.map(x => (
          <WriteTableRow year={x.year} model={x.model} price={x.price} />
        ))}
      </table>
    </div>
  );
};

const WriteTableHeader = props => {
  return (
    <tr>
      <td>Year</td>
      <td>Model</td>
      <td>Price</td>
      <td>Buy</td>
    </tr>
  );
};

const WriteTableRow = ({ year, model, price }) => {
  return (
    <tr>
      <td>{year}</td>
      <td>{model}</td>
      <td>${price}</td>
      <td>
        <WriteBuyButton />
      </td>
    </tr>
  );
};

const WriteBuyButton = () => {
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
      Select Type:
      <select>
        {props.types.map(x => (
          <option value={x[0].type}>{x[0].type}</option>
        ))}
      </select>
    </p>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
