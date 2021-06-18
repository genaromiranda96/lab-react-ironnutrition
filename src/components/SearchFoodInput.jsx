import React, { Component } from 'react';

class SearchFoodInput extends Component {

    handleInput = (e) => {
        this.props.handle(e.target.value)
    }

    render() {
        return (
            <div> 
                    <h2  className="title is-2"> IronNutrition</h2>
                        <input  className="py-2" 
                                style={{width: '460px'}}
                                type='text'
                                value={this.props.value}
                                onChange={this.handleInput}
                        />
            </div>
        )
    }
}

export default SearchFoodInput;