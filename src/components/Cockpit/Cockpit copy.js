import React from 'react';

const Cockpit = ({ length, showUsers, onClick }) => {
    const classes = [];
    if (length <= 2) {
        classes.push("red");
    }
    if (length <= 1) {
        classes.push("bold");
    }

    const style = {
        backgroundColor: "green",
        color: "white",
        font: "inherit",
        border: "1px solid blue",
        padding: "8px",
        cursor: 'pointer'
    }
    if (showUsers) {
        style.backgroundColor = "red";
    }
    return (
        <div>
            <p className={classes.join(" ")}>TESTER</p>
            <button style={style} onClick={onClick}>Toggle Users</button>
        </div>
    );
}

export default Cockpit;