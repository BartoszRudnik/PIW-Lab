import React, { Component } from 'react'

export default class SearchFilter extends Component {
    constructor(){
        super();
        this.state = {
            searchTag: 'Wyszukuj po tagach',
            searchDescription: 'Wyszukuj po opisach'
        }
    }

    updateByDescription = (event) => {
      const val = event.target.value;

      this.props.updateByDescription(val)
    }

    updateByTags = (event) => {
      const val = event.target.value;

      this.props.updateByTags(val)
    }

    render() {
        return (
          <div>
              <input type="text"
                placeholder='Wyszukuj po opisach'                
                onChange={this.updateByDescription}/>
              <input type="text"
                placeholder='Wyszukuj po tagach'           
                onChange={this.updateByTags}/>  
          </div>
        )
    }
}

