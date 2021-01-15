import React from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  ClearRefinements,
  RefinementList,
  Configure,
  Pagination,
  Highlight,
} from "react-instantsearch-dom";
import "./App.css";
const searchClient = algoliasearch(
  "B1G2GM9NG0",
  "aadef574be1f9252bb48d4ea09b5cfe5"
);

const App = () => {
  console.log("render");
  return (
    <div className="ais-InstantSearch">
      <h1>React InstantSearch e-commerce demo</h1>
      <InstantSearch indexName="demo_ecommerce" searchClient={searchClient}>
        <div className="row">
          <div className="left-panel">
            <ClearRefinements />
            <h2>Brands</h2>
            <RefinementList attribute="brand" />
            <Configure hitsPerPage={8} />
          </div>
          <div className="right-panel">
            <SearchBox />
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};

function Hit(props) {
  return (
    <div className="hit">
      <img src={props.hit.image} alt={props.hit.name} />
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-description">
        <Highlight attribute="description" hit={props.hit} />
      </div>
      <div className="hit-price">{props.hit.price}</div>
    </div>
  );
}

export default App;
