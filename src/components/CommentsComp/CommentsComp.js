import React, { Component } from 'react';

class CommentsComp extends Component {
  constructor(props) {
    super();

    this.state = {
      input: ''
    };

    this.handleAdd = this.handleAdd.bind( this );
  }

  handleInputChange( value ) {
    this.setState({ input: value });
  }

  handleAdd() {
    this.props.add( this.state.input );
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input value={ this.state.input } 
              placeholder="Enter new task" 
              onChange={ (e) => this.handleInputChange( e.target.value ) }
        />

        <button onClick={ this.handleAdd }>Add</button>
      </div>
    )
  }
}

export default NewTask;