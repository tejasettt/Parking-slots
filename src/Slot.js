import React from "react";

const Slot = (props) => {
    console.log(props)
    return (
        <div align='center' id='parkingslot'>
            <h1>Slot num {props.slot_id} </h1>
            {props.children}
        </div>
    )
}

export default Slot; 