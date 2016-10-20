import React from "react";

function stringify(obj) {
    return {
        __html: JSON.stringify(obj)
            .replace(/</g, "\\u003c")
            .replace(/>/g, "\\u003e")
            .replace(/&/g, "\\u0026")
    };
}

export default function EmbeddedJSON(props) {
    let { content, ...rest } = props;
    return <script type="application/json" dangerouslySetInnerHTML={stringify(content)} {...rest} />;
}