import React from 'react';
import TablePrint from '../Components/Tables';

function Todo(props) {
   
    return <div>
        <TablePrint data={props.data} />
    </div>;
}

export default Todo;