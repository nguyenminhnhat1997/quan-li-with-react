import React, { Component } from 'react';
import {connect} from 'react-redux';

class FormNote extends Component {
    constructor(props) {
        super(props);
        this.state ={
            noteTieuDe: "",
            noteNoiDung: "",
            id: ""
        }
    }
    
    
    componentWillMount() {
        if(this.props.statusToStore){
            this.setState({
                noteTieuDe: this.props.elementToStore.title,
                noteNoiDung: this.props.elementToStore.content,
                id: this.props.elementToStore.id
            });
        }
    }
    

    handleOnChange  = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });


    }

    sendDataForm  = () =>{
        if(this.state.id){
            var item = {
                id: this.state.id,
                title: this.state.noteTieuDe,
                content: this.state.noteNoiDung
            }
            console.log('Dang sua data');
            this.props.updateNote(item);
            this.props.changeStatusForm();
        }else{
            var itemUpdate = {
                title: this.state.noteTieuDe,
                content: this.state.noteNoiDung
            }
            this.props.addNewDispatch(itemUpdate);
        }
        
    }

    render() {
        return (
            <div className="col-4">
                <h3>Sửa nội dung</h3>

                <div className="form-group">
                    <label htmlFor="noteTieuDe">Tiêu đề</label>
                    <input 
                        name="noteTieuDe" 
                        id="noteTieuDe" 
                        className="form-control" 
                        placeholder="Tiêu đề note" 
                        aria-describedby="helpTieuDe" 
                        type="text" 
                        onChange = {(event) => this.handleOnChange(event)}
                        defaultValue={this.props.elementToStore.title}
                    />
                    <small id="helpTieuDe" className="text-muted">Điền tiêu đề note</small>
                </div>
                <div className="form-group">
                    <label htmlFor="noteNoiDung">Nội dung</label>
                    <input 
                        name="noteNoiDung" 
                        id="noteNoiDung" 
                        className="form-control" 
                        placeholder="Nội dung note" 
                        aria-describedby="helpNoiDung" 
                        type="text" 
                        onChange = {(event) => this.handleOnChange(event)}
                        defaultValue={this.props.elementToStore.content}
                    />
                    <small id="helpNoiDung" className="text-muted">Điền nội dung note</small>
                </div>
                <button 
                        type="button" 
                        className="btn btn-success btn-block"
                        onClick = {this.sendDataForm}
                >Lưu </button>
        </div>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      statusToStore: state.statusEditFrom,
      elementToStore: state.elementList
    }
  }
  
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      addNewDispatch: (item) => {
        dispatch({
          type:"ADD_NEW",
          getItem: item
        })
      },
      updateNote: (item) => {
        dispatch({
          type:"UPDATE_NOTE",
          elementItem: item
        })
      },
      changeStatusForm: () => {
        dispatch({
            type: "CHECK_FORM"
        });
      }
    }
  }

 export default connect(mapStateToProps, mapDispatchToProps)(FormNote)
