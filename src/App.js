import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodButton from './components/AddFoodButton'
import AddFoodForm from './components/AddFoodForm'
import foods from './foods.json';

import 'bulma/css/bulma.css';

import './App.css';

const buildFood = ({name, calories, image }) => ({ name: name, calories: calories, image: image });


class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      allFoods: foods,
    }
  }

  handleAddFood = (food) => {
    const oldFood = [...this.state.allFoods];
    oldFood.push(buildFood(food));

    this.setState({
      allFoods: oldFood,
    });
  };


  render() {
        const { allFoods } = this.state;

        return(
          <div style={{textAlign: 'Left'}} className="App p-5 has-background-link-light">
            <h2  className="title is-2"> IronNutrition</h2>
            <AddFoodButton title="Add Food">
                <AddFoodForm onAddFood={this.handleAddFood} /> 
            </AddFoodButton>
            
            {allFoods.map((food) => {
            return (
              <FoodBox 
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity}
                />
              );
            }
            )
          }
        </div>
        )
    }
}

export default App;
