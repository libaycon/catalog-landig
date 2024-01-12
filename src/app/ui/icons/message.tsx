const MessageIcon = ({ className="w-20 h-auto", defColor="rgb(0, 251, 21)" }: { className?: string, defColor?: string }): JSX.Element => {
    return (
        <svg
            id="contacto_svg__Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 62 62"
            className={className}>
            <style>
                {`.contacto_svg__st4{
                    fill:none;
                    stroke:#295675;
                    stroke-width:1.871;
                    stroke-miterlimit:10;
                }`}
            </style>
            <circle
                transform="rotate(-45.162 25.854 34.274)"
                cx="25.9"
                cy="34.3"
                r="23.9"
                style={{
                    opacity: 0.2,
                    fill: "rgb(75, 144, 183)"
                }}>
            </circle>
            <path
                d="M52.5 18.8V7.6c0-2.1-1.7-3.7-3.7-3.7H25.4c-2.1 0-3.7 1.7-3.7 3.7v4.7H8.5c-2.1 0-3.7 1.7-3.7 3.7v16.8c0 2.1 1.7 3.7 3.7 3.7h3.7v6.1c0 .8 1 1.3 1.6.7l6.5-6.8h6.8v2.8c0 2.1 1.7 3.7 3.7 3.7h14.3l6.5 6.8c.6.6 1.6.2 1.6-.7V43H56c2.1 0 3.7-1.7 3.7-3.7V22.6c0-2.1-1.7-3.7-3.7-3.7h-3.5z"
                style={{ fill: "rgb(255, 255, 255)" }}>
            </path>
            <path
                d="M52.5 18.8v4.7c0 2-1.7 3.7-3.7 3.7h-1.9v6.5H46l-6.5-6.5h-4.7v-8.4h17.7z"
                style={{
                    fill: "rgb(168, 226, 226)"
                }}>
            </path>
            <path
                d="M8.5 12.3H31c2.1 0 3.7 1.7 3.7 3.7v16.8c0 2.1-1.7 3.7-3.7 3.7H20.4l-6.5 6.8c-.6.6-1.6.2-1.6-.7v-6.1H8.5c-2.1 0-3.7-1.7-3.7-3.7V16c0-2 1.7-3.7 3.7-3.7z"
                style={{
                    fill: defColor,
                    stroke: "rgb(41, 86, 117)",
                    strokeWidth: 1.871,
                    strokeMiterlimit: 10
                }}>
            </path>
            <path
                className="contacto_svg__st4"
                d="M21.6 15.1v8.4c0 2.1 1.7 3.7 3.7 3.7h6.5M52.5 18.8V7.6c0-2.1-1.7-3.7-3.7-3.7H25.4c-2.1 0-3.7 1.7-3.7 3.7v4.7">
            </path>
            <path
                className="contacto_svg__st4"
                d="M27.3 36.6v2.8c0 2.1 1.7 3.7 3.7 3.7h14.3l6.5 6.8c.6.6 1.6.2 1.6-.7v-6.1h2.8c2.1 0 3.7-1.7 3.7-3.7V22.6c0-2.1-1.7-3.7-3.7-3.7H34.7M27.3 27.3v6.5M31.9 18.8H31c-2.1 0-3.7 1.7-3.7 3.7v1.9">
            </path>
            <path
                className="contacto_svg__st4"
                d="M34.7 27.3h4.7l5.9 6.6c.6.6 1.6.2 1.6-.6v-6h1.8c2.1 0 3.7-1.7 3.7-3.7v-1.9">
            </path>
        </svg>
    )
};

export default MessageIcon;