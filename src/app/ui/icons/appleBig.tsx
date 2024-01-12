const BigAple = (
    { className = "w-20 h-auto", defColor = "rgb(0, 251, 21)" }:
    { className?: string, defColor?: string }
): JSX.Element => {
    return (
        <svg
            id="libreria_svg__Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0" y="0"
            viewBox="0 0 62 62"
            width="1em"
            height="1em"
            className={className}>
            <style>
                {`
                    .libreria_svg__st2,
                    .libreria_svg__st3{
                        fill:none;
                    stroke:#a8e2e2;
                    stroke-width:2;
                    stroke-miterlimit:10
                        }
                    .libreria_svg__st3{
                        stroke:#295675
                        }
                `}
            </style>
            <path
                d="M57.5 35.9v12l-26 12-25-11v-8l2-1L30 49.4z"
                style={{ opacity: 0.2, fill: 'rgb(75, 144, 183)' }}>
            </path>
            <path
                d="m43 25.4 14 7 3 2-1 2-2 1-24 11h-4l-21-9-1 1v10l-4-4-1-6 2-4 30-13z"
                style={{ fill: 'rgb(168, 226, 226)' }}>
            </path>
            <path
                className="libreria_svg__st2"
                d="M51.5 9.9v6M54.5 12.9h-6M5.5 16.9v6M8.5 19.9h-6">
            </path>
            <path
                className="libreria_svg__st3"
                d="M57.5 44.9v-8M59.5 46.9 31.9 59.8c-.7.3-1.5.3-2.1 0L6 49">
            </path>
            <path
                className="libreria_svg__st3"
                d="M6.1 49.3c-2.1-.9-3.6-2.6-3.6-4.9v-4c0-2.1 1.4-4.1 3.2-4.9L31.2 24c2.5-1.1 5.4-1.1 7.9 0l19.8 8.9c1.5.7 1.5 2.8 0 3.5L31.4 48.9c-.8.3-1.6.3-2.4 0L9 39.8c-1.3-.6-2.5.3-2.5 1.6v4.5">
            </path>
            <path
                d="M29.6 12.9c.3.1.7.2 1 .2.5.1 1.1 0 1.9-.2.9-.2 2-.4 3.3-.4 1 0 2 .1 3.1.4 2.2.6 3.9 2 5 4 1.6 2.9 1.7 7 .4 11.3-1.5 5-5.3 8.8-9.5 9.5-.3.1-.7.1-1 .1-.9 0-1.9-.2-2.6-.5-.7-.2-1.4-.2-2 0-.8.3-1.7.5-2.6.5-.3 0-.7 0-1-.1-4.2-.7-8-4.6-9.5-9.5-2.8-9.1 1.2-13.2 5.1-14.9 1.4-.6 2.8-.9 4.4-.9"
                style={{ fill: defColor }}>
            </path>
            <path
                className="libreria_svg__st3"
                d="M29.6 12.9c.3.1.7.2 1 .2.5.1 1.1 0 1.9-.2.9-.2 2-.4 3.3-.4 1 0 2 .1 3.1.4 2.2.6 3.9 2 5 4 1.6 2.9 1.7 7 .4 11.3-1.5 5-5.3 8.8-9.5 9.5-.3.1-.7.1-1 .1-.9 0-1.9-.2-2.6-.5-.7-.2-1.4-.2-2 0-.8.3-1.7.5-2.6.5-.3 0-.7 0-1-.1-4.2-.7-8-4.6-9.5-9.5-2.8-9.1 1.2-13.2 5.1-14.9 1.4-.6 2.8-.9 4.4-.9">
            </path>
            <path
                className="libreria_svg__st3"
                d="M18.9 23.2c0-2.8 1-4.6 2.4-5.9m-1.7 10.1c-.3-.8-.4-1.6-.5-2.3M26.4 15.4c2.4 2.4 6.3 2.4 8.8 0">
            </path>
            <path
                d="M36.6 9.5c-2 3.3-6.3 4.4-6.3 4.4s-1-4.3 1-7.6 6.3-4.4 6.3-4.4 1 4.3-1 7.6z"
                style={{
                    fill: "rgb(255, 255, 255)",
                    stroke: 'rgb(41, 86, 117)',
                    strokeWidth: 2,
                    strokeMiterlimit: 10
                }}>
            </path>
            <path
                className="libreria_svg__st3"
                d="M30.5 16.7c0-2.7-1.1-6.1-4.4-8.8">
            </path>
            <circle
                className="libreria_svg__st2"
                cx="11.5"
                cy="5.9"
                r="3">
            </circle>
        </svg>
    )
};

export default BigAple;