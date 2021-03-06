import React from 'react'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


export default function Summary({ title, index }) {

    return (
        <div className="row">
            <div className="col-11">
                <span>{index+1}. {title.text} </span>
            </div>
            <div className="col-1">
                <AssignmentTurnedInIcon color="primary"/> 
            </div>
        </div>
    )
}