import React, { Component } from "react";
export default class TodoInput extends Component {
  
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-file-alt"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add A Task"
              value={item}
              onChange={handleChange}
            />
          
          </div> 
          {/*<div><p>[{itemCount} of {item.length} items completed]</p></div>*/}
          <button
            type="submit"
            className={
              editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3"
            }
          >
            {editItem ? "edit item" : "Add Task"}
          </button>
        </form>
      </div>
    );
  }
}
