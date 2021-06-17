import React, { Component} from 'react';

class AddFoodForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          calories: 0,
          image: '',
        };
      }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
      };



     handleClick = () => {
         const newFood = {
             name: this.state.name,
             calories: this.state.calories,
             image: this.state.image
         }
        this.props.onAddFood(newFood)
        console.log(this.state)

     }


    render() {

        const { name, calories, image } = this.state;
        return (
        <div style={{width: '360px'}} class="p-5 notification is-warning" >
                <label for="fname">Name Food</label>
                <input 
                name='name'
                className='input'
                type='text'
                value={name}
                onChange={this.handleInput}
                />

                <label for="fcalories">Calories</label>
                <input 
                name='calories'
                className='input'
                type='text'
                value={calories}
                onChange={this.handleInput}
                />
                
                <label for="fimage">URL Image</label>
                <input 
                name='image'
                className='input'
                type='text'
                value={image}
                onChange={this.handleInput}
                />

                <button 
                    className="button is-danger"
                    onClick={this.handleClick}
                >

                   Add  

                </button>

        </div>
        )
    }

}

export default AddFoodForm;
