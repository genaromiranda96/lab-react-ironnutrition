import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodButton from './components/AddFoodButton'
import AddFoodForm from './components/AddFoodForm'
import SearchFoodInput from './components/SearchFoodInput'

import foods from './foods.json';

import 'bulma/css/bulma.css';

import './App.css';

const buildFood = ({name, calories, image }) => ({ name: name, calories: calories, image: image });

class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      allFoods: foods,
      input: '',
    }
  }

  handleAddFood = (food) => {
    const oldFood = [...this.state.allFoods];
    oldFood.push(buildFood(food));

    this.setState({
      allFoods: oldFood,
    });
  };

  handleQuery = (query) => {
    this.setState({
      input: query,
    })

  }


  render() {

        const filterFoods = this.state.allFoods.filter((food) => {
          return food.name.toLowerCase().includes(this.state.input.toLowerCase());
        })

        return(
          <div style={{textAlign: 'Left'}} className="App p-5 has-background-link-light">
            <SearchFoodInput value={this.state.input} handle={this.handleQuery}/>

            <AddFoodButton title="Add Food">
                <AddFoodForm onAddFood={this.handleAddFood} /> 
            </AddFoodButton>
            
            {filterFoods.map((food) => {
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
