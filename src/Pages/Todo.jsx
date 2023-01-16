import React from 'react';
import TablePrint from '../Components/Tables';

function Todo(props) {
   
    return <div>
        <TablePrint data={props.data} updateStateData={props.updateStateData} />
    </div>;
}

export default Todo;