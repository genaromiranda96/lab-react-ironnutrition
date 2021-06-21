import React, {Component} from 'react';

import 'bulma/css/bulma.css';

class FoodBox extends Component {
    constructor(props){
      super(props);
      this.state = {
        name: this.props.name,
        calories: this.props.calories,
        image: this.props.image,
        quantity: '1',
      }
    }
  
    handleInput = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      })
    }

    handleClick = () => {
      const AddFoodValories = {
          quantity: parseInt(this.state.quantity),
          name: this.state.name,
          calories: this.state.calories * this.state.quantity,
      }
      
     this.props.onAddFoodDetails(AddFoodValories)
     console.log(this.state)

  }

        render() { 


        return(
            <div className="box" style={{width: '460px'}}>
            <article className="media" >
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={this.state.image} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{this.state.name}</strong> <br />
                    <small>{this.state.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" 
                           name='quantity'
                           type="number" 
                           value={this.state.quantity}
                           onChange={this.handleInput}
                            />
                  </div>
                  <div className="control">
                    <button className="button is-info"
                            onClick={this.handleClick}
                          >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
     
        )
      }

}

export default FoodBox;