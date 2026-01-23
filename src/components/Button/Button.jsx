import "./Button.css"

function Button ({ typeButton, onClick }) {

    const buttonConfig = {
        1: { text: "Next Step", className: "next" },
        2: { text: "Go Back", className: "prev" },
        3: { text: "Restart Form", className: "restart" },
    };

    const config = buttonConfig[typeButton];

    return (
        <button className={`stepButton ${config.className}`} onClick={onClick}>
            {config.text}
        </button>
    )
}

export default Button