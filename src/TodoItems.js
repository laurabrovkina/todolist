import React from "react";
import "./TodoAddString.css"

class TodoItems extends React.PureComponent {
constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
}

    createItem(item) {
        return <li onClick={() => this.delete(item.key)}      
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createItem);

        return (
            <ul className="ToDoList">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;
