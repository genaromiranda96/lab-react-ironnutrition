import React, { Component} from 'react';

class AddFoodButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
        this.togglebutton = this.togglebutton.bind(this);
      }


      togglebutton() {
          const { open } = this.state;
          this.setState({
              open: !open,
          })
      }



    render() {

        let { title, children } = this.props;
        const { open } = this.state;

        if(open) {
            title = 'X';
        } else {
            title = 'Add Food';
        }

        return (
        <div class='my-3' >
                <button class="button is-danger is-active" onClick={this.togglebutton}>
                    {title}
                </button>
                {open && (
                    <div>
                        {children}
                    </div>
                )}
        </div>
        )
    }

}

export default AddFoodButton;