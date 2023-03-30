import React from "react";

export default function TestForm(props) {
  return (
    <div class="form-group">
        <h2>{props.heading}</h2>
      <label for="mytextbox">Example textarea</label>
      <textarea
        class="form-control"
        id="mytextbox"
        rows="3"
      ></textarea>
    </div>
  );
}
