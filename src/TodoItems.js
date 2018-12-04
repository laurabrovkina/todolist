import React from "react";

class TodoItems extends React.PureComponent {
    createItem(item) {
        return <li key={item.key}>{item.text}</li>
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
