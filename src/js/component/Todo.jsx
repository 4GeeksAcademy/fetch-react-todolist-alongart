import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Todo(props) {
    const { task, onDelete, index } = props;
    const [showDelete, setShowDelete] = useState(false);

    return (
        
            <div 
                onMouseEnter={() => setShowDelete(true)} 
                onMouseLeave={() => setShowDelete(false)}
                className="ps-3 text-start list-group-item"
                style={{ height: "50px" }}

            >
                <Link to={`/todo/${index}`}>
                {task}
                </Link>
                {showDelete && (
                    <button type="button" onClick={() => onDelete(index)}>
                        x
                    </button>
                )}
            </div>
        
    )
}