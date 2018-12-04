import React from "react";
import TodoItems from "./TodoItems.js"
import "./TodoAddString.css"


class ToDoAddString extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            items: [] 
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
 

    addItem(e) {
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="ItemsList">
              <input ref={(a) => this._inputElement = a} value={this.state.value} onKeyPress={this._handleKeyPress} />
            <div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}/>
            </div>
            </div>
        );
      }

      _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            {this.addItem(e)}
        }
      }

}
export default ToDoAddString;