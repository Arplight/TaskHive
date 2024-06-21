import { Fragment } from "react";
import Edit from "/Icons/edit.svg";
import Trash from "/Icons/trash.svg";

const Template = () => {
  return (
    <Fragment>
      {/* Typography */}
      <h1 className="font-secondary">test</h1>
      <h2>test</h2>
      <p className="text-large">test</p>
      <p className="text-small font-secondary">test</p>
      <br />
      {/* Template buttons */}
      <button className="main-button">Save</button>
      <button className="main-button button-primary">Save</button>
      <button className="main-button-large">Add a new to-do</button>
      <br />
      <br />
      {/* Template icons */}
      <img src={Edit} alt="edit" />
      <img src={Trash} alt="edit" />
      {/* Template input fields */}
      <fieldset>
        <label htmlFor="name" className="text-large">
          Name:
        </label>
        <input
          type="text"
          name="name"
          placeholder="name for the task"
          className="text-input"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="description" className="text-large">
          Description:
        </label>
        <textarea
          name="description"
          placeholder="a short description of the task "
          className="text-input"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="date" className="text-large">
          Date:
        </label>
        <input type="date" name="date" className="text-input" />
      </fieldset>
      <fieldset>
        <label htmlFor="priority" className="text-large">
          Priority:
        </label>
        <select type="text" name="priority" className="text-input">
          <option value="default">default</option>
          <option value="default">default</option>
          <option value="default">default</option>
          <option value="default">default</option>
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="fullfilment" className="text-large">
          Fullfilment:
        </label>
        <input type="range" name="fullfilment" />
      </fieldset>
    </Fragment>
  );
};

export default Template;
