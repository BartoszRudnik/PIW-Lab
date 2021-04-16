import React, { Component } from 'react'
import { useState } from 'react'

export default class AddStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mail: '',
            description: '',
            tags: []
        };
    }

    onSubmit = (e) => {
        
        e.preventDefault()       

        if (this.name === '') {
            alert('Please add a student name')
            return
        }

        this.props.onAdd(this.state.name, this.state.description, this.state.mail, this.state.tags)

        this.setState({ name: '', description: '', mail: '', tags: []})
    }

    inputKeyDown = (e) => {
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
            <form onSubmit={this.onSubmit} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
                <h3>Dodaj nowego studenta</h3>

                <div>
                    <label>Imie i nazwisko</label>
                    <input type="text"
                        placeholder='Imie'
                        value={this.state.name || ''}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div>
                    <label>Opis</label>
                    <input type="text"
                        placeholder='Opis'
                        value={this.state.description || ''}
                        onChange={(e) => this.setState({ description: e.target.value })} />
                </div>

                <div>
                    <label>Adres email</label>
                    <input type="text"
                        placeholder='Email'
                        value={this.state.mail || ''}
                        onChange={(e) => this.setState({ mail: e.target.value })} />
                </div>

                <div className="input-tag">
                    <ul className="input-tag__tags">

                        {this.state.tags.map((tag, i) => (
                            <li key={tag}>
                                {tag}
                                <button type="button" onClick={() => { this.removeTag(i); }}>+</button>
                            </li>
                        ))}

                        <li className="input-tag__tags__input">
                            <input type="text" placeholder='Dodaj tagi' onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} />
                        </li>

                    </ul>

                </div>

                <input type='submit' value='Save Student' />

            </form>
        )
    }
}
