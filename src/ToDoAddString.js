import React from "react";
import TodoItems from "./TodoItems.js"
import "./TodoAddString.css"

class ToDoAddString extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    addItem(e) {
        const { value } = this.state;
        if (value !== "") {
            var newItem = {
                text: value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this.setState({ value: '' });

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filteredItems
        });
    }

    render() {

        return (
            <div className="ItemsList">
                <label>
                    <span>TODO list</span>
                    <input value={this.state.value} onChange={this._handleChange} onKeyPress={this._handleKeyPress} />
                </label>
                <div className='items'>
                    <TodoItems entries={this.state.items} delete={this.deleteItem} />
                </div>
            </div>
        );
    }


    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            { this.addItem(e) }
        }
    }

    _handleChange = e => {
        this.setState({ value: e.currentTarget.value });
    }

}
export default ToDoAddString;