import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddFoodButton from './components/AddFoodButton'
import AddFoodForm from './components/AddFoodForm'
import SearchFoodInput from './components/SearchFoodInput'

import foods from './foods.json';

import 'bulma/css/bulma.css';

import './App.css';

// const ShowdetailsFood = ({name, calories, quantity }) => ({ name: name, calories: calories, quantity: quantity});

const buildFood = ({name, calories, image }) => ({ name: name, calories: calories, image: image });

class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      allFoods: foods,
      input: '',
      todayFood: [],
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

  handleDetailsFood = (food) => {
    console.log(this.state.todayFood)
    const { todayFood } = this.state;
    const selected = [...todayFood];

    const index = selected.findIndex((ele) => ele.name === food.name)
    if(index === -1) {
      selected.push(food);
      this.setState({
        todayFood: selected,
      });
    } else {
      selected[index].calories = 
      food.calories + selected[index].calories;

      selected[index].quantity = 
      food.quantity + selected[index].quantity;

      this.setState({
        todayFood: selected
      })

    }


    
  }



  render() {
        const DetailFood  = this.state.todayFood;

        const TotalCalories = DetailFood.reduce(
          (acc, ele) => { return ele.calories + acc}, 0
        )

        const filterFoods = this.state.allFoods.filter((food) => {
          return food.name.toLowerCase().includes(this.state.input.toLowerCase());
        })

        return(
          <div style={{textAlign: 'Left'}} className="App p-5 has-background-link-light">
            <SearchFoodInput value={this.state.input} handle={this.handleQuery}/>

            <AddFoodButton title="Add Food">
                <AddFoodForm onAddFood={this.handleAddFood} /> 
            </AddFoodButton>
            
            <div className="is-flex is-flex-direction-row"> 
            <section>
            {filterFoods.map((food, index) => {
            return (
              <FoodBox 
                    key={index}
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                    quantity={food.quantity}
                    onAddFoodDetails={this.handleDetailsFood}
                />
              );
            }
            )
          }
          </section>
          <section className="pl-6">
            <h2>Today's foods</h2>
            {DetailFood.map((food, index) => {
            return (
              <section> 
                <ul>
                  <li key={index}>◦ {food.quantity} {food.name} = {food.calories} cal</li>
                </ul>
                    
                </section>
              );
            }
            )
          }
          <p>Total: {TotalCalories} cal</p>
          </section>
          </div>
        </div>
        )
    }
}

export default App;
