import { connect } from "react-redux";
import Item from "../Item";
import "./List.css";

const List = ({ beerImages, beerList, activeIndex, perPage }) => {
  const sortedBeersList = beerList.sort((a, b) => a.id > b.id);
  const beersArray = sortedBeersList.slice(
    (activeIndex - 1) * perPage,
    activeIndex * perPage - 1
  );

  return (
    <div className="list-wrapper">
      {beersArray.map((beer, index) => {
        return <Item beer={beer} beerImage={beerImages[index % 5]} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    beerList: state.beerReducer.beerList,
    beerImages: state.beerReducer.beerImages,
    loading: state.beerReducer.loading,
  };
};

export default connect(mapStateToProps, null)(List);
