import React, {useState} from "react";
import {connect} from 'react-redux';
import NewParkForm from './NewParkForm';
import EditParkForm from './EditParkForm';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import { makeApiCallGetAll } from '../../actions';

class ParkControl extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPark: null,
      newParkFormVisible: false,
      editParkFormVisible: false,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCallGetAll());
  }

  render(){
    const { error, isLoading, parks } = this.props;
    if (error){
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Parks</h1>
          <ul>
            {parks.map((park, index) =>
            <li key={index}>
              <h3>{park.name}</h3>
              <p>{park.description}</p>
            </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return{
    parks: state.parks,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(ParkControl);