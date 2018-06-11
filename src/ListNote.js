import React, { Component } from 'react';
import {firebaseConnect} from './firebaseConnect';
import ListNoteItem from './ListNoteItem';
class ListNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }
    
    componentWillMount() {
        var arrayList = [];
        firebaseConnect.on('value',(notes)=>{
            notes.forEach(element => {
                arrayList.push({
                    id: element.key,
                    title: element.val().title,
                    content: element.val().content
                })
            });
            this.setState({
                listData: arrayList
            });
        })
        console.log(arrayList);
        
    }

    getList  = () =>{   
        if(this.state.listData){
         return( this.state.listData.map((value,key)=>{
               return (
                <ListNoteItem 
                        key = {key}
                        index = {key}
                        elementList = {value}
                        title = {value.title}
                        content = {value.content}
                />
               );
           })
        );
        }

        
    }
    render() {
        return (
            
            <div className="col">
            <div id="accordianId" role="tablist" aria-multiselectable="true">
                {this.getList()}
            </div>
          </div>
          
        );
    }
}

export default ListNote;