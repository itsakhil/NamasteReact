///const heading =React.createElement('h1',{},"Hello wORLD ");

import React from "react";
import ReactDOM from "react-dom/client"
const nestedReact = React.createElement(
    "div",
    { id: "Parent" },
    [
      React.createElement(
        "div",
        { id: "child1", key: "child1" },
        [
          React.createElement("h1", { id: "sib1", key: "h1-1" }, "Akhil"),
          React.createElement("h2", { id: "sib2", key: "h2-1" }, "Chaitanya")
        ]
      ),
      React.createElement(
        "div",
        { id: "child2", key: "child2" },
        [
          React.createElement("h1", { id: "sib1", key: "h1-2" }, "Heading1"),
          React.createElement("h2", { id: "sib2", key: "h2-2" }, "Heading2")
        ]
      )
    ]
  );
  
const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(nestedReact);