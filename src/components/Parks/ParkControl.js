import React, {useState} from "react";
import {connect} from 'react-redux';
import NewParkForm from './NewParkForm';
import EditParkForm from './EditParkForm';
import ParkList from './ParkList';
import ParkDetail from './ParkDetail';
import { makeApiCallGetAll, makeApiCallPost, makeApiCallDelete, makeApiCallPut } from '../../actions';

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
      this.setState({newParkFormVisible: false, editParkFormVisible: false, selectedPark: null});
    } else {
      this.setState({newParkFormVisible: !this.state.newParkFormVisible})
    }
  }

  handleToggleEditParkForm = () =>{
    this.setState({newParkFormVisible: false, editParkFormVisible: true});
  }

  handleAddingNewParkToList = (newPark) => {
    //API post method
    const { dispatch } = this.props;
    dispatch(makeApiCallPost(newPark));
    this.setState({newParkFormVisible: false});
  }

  handleEditingParkInList = (editedPark) => {
    //API put method
    const { dispatch } = this.props;
    dispatch(makeApiCallPut(editedPark));
    this.setState({newParkFormVisible: false, editParkFormVisible: false, selectedPark: null});
  }

  handleChangingSelectedPark = (id) => {
    const park = this.props.parks.filter(park => park.parkId === id)[0];
    this.setState({newParkFormVisible: false, editParkFormVisible: false, selectedPark: park});
  }

  handleDeletingPark = (id) => {
    //API delete method
    const { dispatch } = this.props;
    dispatch(makeApiCallDelete(id));
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
          onFormSubmit = {this.handleAddingNewParkToList}
          />,
        buttonText: "Return to Main Page"
      }
    } else {
      return {
        component:
          <ParkList
            parkList = {this.props.parks}
            onParkSelection = {this.handleChangingSelectedPark}
            onClickingNew = {this.handleToggleAddParkForm}
          />,
        buttonText: "Add Park"
      }
    }
  }

  render(){
    const visibleState = this.setCurrentlyVisibleState();
    const { error, isLoading } = this.props;
    if (error){
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <button onClick={this.handleToggleAddParkForm}>{visibleState.buttonText}</button>
          {visibleState.component}
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    parks: state.parks,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(ParkControl);