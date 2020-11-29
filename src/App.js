import React from "react";
import "./App.css";
import List from "./components/List";
import { getBeersList } from "./redux/actions";
import { connect } from "react-redux";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import loader from './loader.gif';
import Overlay from "./components/Overlay";

class App extends React.Component {
  state = {
    perPage: 20,
    activeIndex: 1,
  };

  componentDidMount() {
    this.props.setBeerListData();
  }

  setActiveIndex = (index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { perPage, activeIndex, loading } = this.state;
    return (
      <div className="App">
        {loading && <Overlay />}
        {loading && <img className='loader' src={loader} />}
        <Search />
        <List activeIndex={activeIndex} perPage={perPage} />
        <Pagination
          setActiveIndex={this.setActiveIndex}
          numPages={this.props.beerList.length / perPage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    beerList: state.beerReducer.beerList,
    loading: state.beerReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setBeerListData: () => {
    dispatch(getBeersList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
