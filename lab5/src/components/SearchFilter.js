import React, { Component } from 'react'

export default class SearchFilter extends Component {
  constructor() {
    super();
    this.state = {
      searchTag: 'Wyszukuj po tagach',
      searchDescription: 'Wyszukuj po opisach',
      tags: []
    }
  }

  showFavorites = () => {
    if (this.myCheck.checked) {
      this.props.showFavorites()
    } else {
      this.props.filter(this.descriptionInput.value, this.state.tags)
    }
  }

  filter = (e) => {
    this.props.filter(this.descriptionInput.value, this.state.tags)
  }

  addTag = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      this.setState({ tags: [...this.state.tags, val] });
      this.tagInput.value = null;
    }
    else if (e.key === 'Backspace' && !val) {
      this.removeTag(this.state.tags.length - 1);
    }
  }

  removeTag = (i) => {
    const newTags = [...this.state.tags];
    newTags.splice(i, 1);
    this.setState({ tags: newTags });
  }

  render() {
    return (
      <div className="headerBlock">
        <div className="input-tag2">
          <input className="input-tag__tags"
            type="text"
            placeholder='Wyszukuj po opisach'
            onChange={this.filter}
            ref={d => { this.descriptionInput = d; }}
          />
        </div>
        <div className="input-tag2">
          <ul className="input-tag__tags">

            {this.state.tags.map((tag, i) => (
              <li key={tag}>                
                <button type="button" onClick={() => { this.removeTag(i); }}>{tag}</button>
              </li>
            ))}

            <li className="input-tag__tags__input">
              <input type="text" placeholder='Wyszukuj po tagach' onKeyDown={this.addTag} onKeyUp={this.filter} ref={c => { this.tagInput = c; }} />
            </li>

          </ul>

        </div>
        <div className='onlyFavorites'>
          <>Pokaz tylko ulubionych</>
          <input type="checkbox" onChange={this.showFavorites} ref={d => { this.myCheck = d; }} />
        </div>
      </div>
    )
  }
}

