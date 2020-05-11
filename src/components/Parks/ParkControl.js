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

  handleToggleAddParkForm = () =>{
    if (this.state.selectedPark != null){
      this.setState({newParkFormVisible: true, selectedPark: null});
    } else {
      this.setState({newParkFormVisible: !this.state.newParkFormVisible})
    }
  }

  handleToggleEditParkForm = () =>{
    this.setState({newParkFormVisible: false, editParkFormVisible: true});
  }

  handleAddingNewParkToList = (newPark) => {
    //API post method
    this.setState({newParkFormVisible: false});
  }

  handleEditingParkInList = (parkToEdit) => {
    //API put method
    this.setState({newParkFormVisible: false, editParkFormVisible: false, selectedPark: null});
  }

  handleChangingSelectedPark = (id) => {
    const park = this.state.parks.filter(park => park.id === id)[0];
    this.setState({newParkFormVisible: false, editParkFormVisible: false, selectedPark: park});
  }

  handleDeletingPark = (id) => {
    //API delete method
    this.setState({newParkFormVisible: false, selectedPark: null});
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCallGetAll());
  }

  setCurrentlyVisibleState = () => {
    if (this.state.editParkFormVisible){
      return {
        component:
          <EditParkForm
          park = {this.state.selectedPark}
          onEditPark = {this.handleEditingParkInList}
          />,
        buttonText: "Return to Main Page"
      }
    } else if (this.state.selectedPark != null){
      return {
        component:
          <ParkDetail
            park = {this.state.selectedPark}
            onClickingDelete = {this.handleDeletingPark}
            onClickingEdit = {this.handleToggleEditParkForm}
          />,
        buttonText: "Return to Main Page"
      }
    } else if (this.state.newParkFormVisible){
      return {
        component:
          <NewParkForm
          onNewParkCreation = {this.handleAddingNewParkToList}
          />,
        buttonText: "Return to Main Page"
      }
    } else {
      return {
        component:
          <ParkList
            parkList = {this.props.parks}
            onParkSelection = {this.handleChangingSelectedPark}
          />,
        buttonText: "Add Park"
      }
    }
  }

  render(){
    const { error, isLoading, parks } = this.props;
    if (error){
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return <ParkList parkList = {parks}/>;
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