import React, { Component } from 'react'

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organization: '',
            name: '',
            mail: '',
            description: '',
            tags: [],
            allTags: ['c++', 'java', 'php', 'python', 'javascript', 'docker', 'html', 'css', 'react', 'spring', 'c#', 'matlab', 'c', 'assembler'],
            suggestions: []
        };
    }

    onSubmit = (e) => {

        e.preventDefault()

        if (this.name === '') {
            alert('Please add a project name')
            return
        }

        this.props.onAdd(this.state.organization, this.state.name, this.state.description, this.state.mail, this.state.tags, false)

        this.setState({ name: '', description: '', mail: '', tags: [] })
    }

    getSuggestions = (e) => {
        const val = e.target.value;

        const result = this.state.allTags.filter(tag => tag.includes(val))        
        this.setState({ suggestions: result })

        if (this.tagInput.value === '' || !val) {
            this.setState({ suggestions: [] })
        }
    }

    inputKeyDown = (e) => {
        const val = e.target.value;

        if (e.key === 'Enter' && val) {
            if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                return;
            }
            this.setState({ tags: [...this.state.tags, val] });
            if (!this.state.allTags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
                this.setState({ allTags: [...this.state.allTags, val] });
            }
            this.setState({suggestions: []})
            this.tagInput.value = null;
        }
        else if (e.key === 'Backspace' && !val) {
            this.removeTag(this.state.tags.length - 1);
        }
    }

    addFromSugestions = (i) => {
        const suggestions = [...this.state.suggestions];
        if (this.state.tags.find(tag => tag.toLowerCase() === suggestions[i].toLowerCase())) {
            return;
        }
        this.setState({ tags: [...this.state.tags, suggestions[i]] })
        this.tagInput.value = null;
        this.setState({suggestions: []})
    }

    removeTag = (i) => {
        const newTags = [...this.state.tags];
        newTags.splice(i, 1);
        this.setState({ tags: newTags });
    }

    render() {
        return (
            <form className='addStudent' onSubmit={this.onSubmit} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
                <p>Dodaj nowy projekt</p>

                <div>                    
                    <input type="text"
                        placeholder='Nazwa organizacji'
                        value={this.state.organization || ''}
                        onChange={(e) => this.setState({ organization: e.target.value })} />
                </div>

                <div>                    
                    <input type="text"
                        placeholder='Nazwa projektu'
                        value={this.state.name || ''}
                        onChange={(e) => this.setState({ name: e.target.value })} />
                </div>

                <div>                    
                    <input type="text"
                        placeholder='Opis'
                        value={this.state.description || ''}
                        onChange={(e) => this.setState({ description: e.target.value })} />
                </div>

                <div>                    
                    <input type="text"
                        placeholder='Email kontaktowy'
                        value={this.state.mail || ''}
                        onChange={(e) => this.setState({ mail: e.target.value })} />
                </div>

                <div className="input-tag">
                    <ul className="input-tag__tags">

                        {this.state.tags.map((tag, i) => (
                            <li key={tag.uniqueId}>                                
                                <button type="button" onClick={() => { this.removeTag(i); }}>{tag}</button>
                            </li>
                        ))}

                        <li className="input-tag__tags__input">
                            <input type="text" placeholder='Dodaj tagi' onChange={this.getSuggestions} onKeyDown={this.inputKeyDown} ref={c => { this.tagInput = c; }} />
                        </li>

                    </ul>

                </div>

                <div className="input-tag">
                    <ul className="input-tag__tags">
                        {this.state.suggestions.map((tag, i) => (
                            <li key={tag.uniqueId}>                                
                                <button type="button" onClick={() => { this.addFromSugestions(i); }}>{tag}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <input type='submit' className='submitButton' value='Dodaj projekt' />

            </form>
        )
    }
}