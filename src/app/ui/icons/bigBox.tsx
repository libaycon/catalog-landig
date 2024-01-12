const BigBox = ({className="w-20 h-auto", defColor="#00fb15"}:{className?:string, defColor?:string}): JSX.Element => {
  return (
    <svg
      id="servicios_svg__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 62 62"
      className={className}>
      <style>
        {`
          .servicios_svg__st3,
          .servicios_svg__st4,
          .servicios_svg__st5,
          .servicios_svg__st6,
          .servicios_svg__st7 {
            fill:none;
          stroke:#295675;
          stroke-width:1.9032;
          stroke-miterlimit:10
                  }
          .servicios_svg__st4,
          .servicios_svg__st5,
          .servicios_svg__st6,
          .servicios_svg__st7{
            fill:#fff
                  }
          .servicios_svg__st5,
          .servicios_svg__st6,
          .servicios_svg__st7{
            fill:none;
          stroke:#a8e2e2
                  }
          .servicios_svg__st6,
          .servicios_svg__st7{
            stroke:#fff
                  }
          .servicios_svg__st7{
            stroke: ${defColor}
                  }
        `}
      </style>
      <circle
        cx="31.5"
        cy="26.2"
        r="20"
        style={{ opacity: 0.2, fill: "#4b90b7" }}>
      </circle>
      <path
        style={{ fill: "#a8e2e2" }} 
        d="m32.4 42.4 16.2-8.5-16.2-8.6-16.2 8.6z">
      </path>
      <path style={{ fill: defColor }} 
        d="m32.4 60.5 17.2-9v-9.1H16.2v9.1l16.2 9">
      </path>
      <path className="servicios_svg__st3" 
        d="m32.4 60.5-16.2-9v-9.1M49.6 42.4v9.1l-17.2 9">
      </path>
      <path 
        className="servicios_svg__st4" 
        d="m7.7 40.5 16.2 8.6 8.5-5.7v-1l-16.2-8.5-8.5 5.7zM57.2 40.5 41 49.1l-8.6-5.7v-1l16.2-8.5 8.6 5.7zM7.7 27.2l16.2-8.6v11.2l-7.7 4.1-8.5-5.8zM57.2 27.2 41 18.6V30l7.6 3.9 8.6-5.8z">
      </path>
      <path 
        className="servicios_svg__st3" 
        d="M32.4 43.4v17.1">
      </path>
      <path 
        className="servicios_svg__st5" 
        d="M53.4 14.8h-2.9M60 14.8h-2.8M55.3 16.7v2.9M55.3 10.1v2.8M9.6 9.1 7.7 11M14.3 4.4l-1.9 1.9M12.4 9.1l1.9 1.9M7.7 4.4l1.9 1.9">
      </path>
      <path 
        className="servicios_svg__st6" 
        d="M4.8 15.8v1.9M4.8 19.6v1.9M3.9 18.6H2M7.7 18.6H5.8">
      </path>
      <path 
        className="servicios_svg__st3" 
        d="M23.9 15.8v18.1M35.3 12v20M48.6 8.2c0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8v25.7M22.5 7.2c-.4-.5-.5-1.2-.5-1.9 0-2.1 1.7-3.8 3.8-3.8s3.8 1.7 3.8 3.8v31.4">
      </path>
      <path 
        className="servicios_svg__st7" 
        d="M23.9 12v1.9M35.3 10.1V8.2">
      </path>
      <path 
        className="servicios_svg__st6" 
        d="M35.3 6.3V4.4">
      </path>
      <path 
        className="servicios_svg__st3" 
        d="M35.3 33.9v1.9">
      </path>
    </svg>
  )
}

export default BigBox;