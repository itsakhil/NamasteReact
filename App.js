///const heading =React.createElement('h1',{},"Hello wORLD ");


const nestedReact=React.createElement(
    "div",
    {id:"Parent"},
    [
        React.createElement
        (
            "div",
            {id:"child1"},
            [
                React.createElement
                (
                 "h1",
                {id:"sib1"},
                "Heading1"
                ),
                React.createElement
                (
                 "h2",
                {id:"sib2"},
                "Heading2"
                )
            ]
        ),
        React.createElement
        (
            "div",
            {id:"child2"},
            [
                React.createElement
                (
                 "h1",
                {id:"sib1"},
                "Heading1"
                ),
                React.createElement
                (
                 "h2",
                {id:"sib2"},
                "Heading2"
                )
            ]
        )
    ]

)

const root =ReactDOM.createRoot(document.getElementById("root"))
root.render(nestedReact);