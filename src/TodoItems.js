import React from "react";
import "./TodoAddString.css"
import FlipMove from "react-flip-move"

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
                <FlipMove duration={250} easing="ease-out">
                {listItems}            
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;
