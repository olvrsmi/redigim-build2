import RedigimDiagramWrap from "./RedigimDiagramWrap";

export default function RedigimDiagramDigitalisation( {onSelect=()=>{}, ...props} ){
    return <RedigimDiagramWrap>
     <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={700}
        viewBox="0 0 800 700"
        fill="none"
        {...props}
      >
        <g onClick={ () => { onSelect('visibility') }}>
          <path
            fill="#000"
            d="M393 358.5h.5v-1h-.5v1ZM254.351 19.349a.5.5 0 1 0-.702-.712l.351.356.351.356ZM393 358v-.5c-109.076 0-197.5-88.424-197.5-197.5h-1c0 109.629 88.871 198.5 198.5 198.5v-.5ZM195 160h.5c0-55.047 22.52-104.834 58.851-140.651l-.351-.356-.351-.356C217.135 54.634 194.5 104.674 194.5 160h.5Z"
          />
          <text
            xmlSpace="preserve"
            fill="#000"
            fontFamily="Arial"
            fontSize={14}
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan x={401} y={362.854}>
              {"Visibility"}
            </tspan>
          </text>
        </g>     
        <g onClick={ () => { onSelect('aggregation') }}>
          <path
            fill="#000"
            d="M456 357.5h-.5v1h.5v-1Zm9 1a.5.5 0 0 0 0-1v1Zm-9-.5v.5h9v-1h-9v.5ZM393 333.5h.5v-1h-.5v1ZM271.696 37.356a.5.5 0 1 0-.703-.712l.352.356.351.355ZM393 333v-.5c-95.269 0-172.5-77.231-172.5-172.5h-1c0 95.821 77.679 173.5 173.5 173.5v-.5ZM220 160h.5c0-47.976 19.585-91.376 51.196-122.644l-.351-.356-.352-.355C239.199 68.093 219.5 111.745 219.5 160h.5Z"
          />
          <text
            xmlSpace="preserve"
            fill="#000"
            fontFamily="Arial"
            fontSize={14}
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan x={401} y={337.854}>
              {"Aggregation"}
            </tspan>
          </text>
        </g> 
        <g onClick={ () => { onSelect('transparency') }}>
          <path
            fill="#000"
            d="M481 332.5h-.5v1h.5v-1Zm9 1a.5.5 0 0 0 0-1v1Zm-9-.5v.5h9v-1h-9v.5ZM393 308.5h.5v-1h-.5v1ZM289.351 55.056a.5.5 0 1 0-.702-.711l.351.355.351.356ZM393 308v-.5c-81.462 0-147.5-66.038-147.5-147.5h-1c0 82.014 66.486 148.5 148.5 148.5v-.5ZM245 160h.5c0-41.06 16.777-78.202 43.851-104.944L289 54.7l-.351-.355C261.392 81.267 244.5 118.66 244.5 160h.5Z"
          />
          <text
            xmlSpace="preserve"
            fill="#000"
            fontFamily="Arial"
            fontSize={14}
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan x={401} y={312.854}>
              {"Transparency"}
            </tspan>
          </text>
        </g>        
          <path
            fill="#000"
            d="M491 307.5h-.5v1h.5v-1Zm9.5 1a.5.5 0 0 0 0-1v1Zm-9.5-.5v.5h9.5v-1H491v.5Z"
          />
        <g onClick={ () => { onSelect('democratization') }}>
          <text
            xmlSpace="preserve"
            fill="#000"
            fontFamily="Arial"
            fontSize={14}
            letterSpacing="0em"
            style={{
              whiteSpace: "pre",
            }}
          >
            <tspan x={401} y={287.854}>
              {"Democratisation"}
            </tspan>
          </text>        
          <path
            fill="#000"
            d="M393 283.924h.5v-1h-.5v1ZM307.848 72.359a.5.5 0 0 0-.696-.718l.348.359.348.36ZM393 283.424v-.5c-67.655 0-122.5-54.845-122.5-122.5h-1c0 68.207 55.293 123.5 123.5 123.5v-.5Zm-123-123h.5c0-34.568 14.318-65.792 37.348-88.065L307.5 72l-.348-.36c-23.216 22.454-37.652 53.934-37.652 88.784h.5ZM507 284h-.5v1h.5v-1Zm9 1a.5.5 0 0 0 0-1v1Zm-9-.5v.5h9v-1h-9v.5Z"
          />
        </g>
      </svg>
    </RedigimDiagramWrap>
}