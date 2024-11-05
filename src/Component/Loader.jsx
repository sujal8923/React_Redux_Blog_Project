const Loader = () => {
    return (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="900"
        height="200"
        style={{ shapeRendering: 'auto', display: 'block', background: 'rgb(255, 255, 255)' }}
      >
        <g>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDasharray="50.26548245743669 50.26548245743669"
            stroke="#ca2c37"
            strokeWidth="8"
            r="32"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            />
          </circle>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDashoffset="36.12831551628262"
            strokeDasharray="36.12831551628262 36.12831551628262"
            stroke="#6ad2f8"
            strokeWidth="8"
            r="23"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;-360 50 50"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            />
          </circle>
        </g>
      </svg>
    );
  };
  
  export default Loader;
  