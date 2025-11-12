// svg -> jsx with https://react-svgr.com/playground/
import RedigimDiagramWrap from "./RedigimDiagramWrap";

export default function RedigimDiagramBase( props ){
    return <RedigimDiagramWrap>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={800}
            height={700}
            viewBox="0 0 800 700"
            fill="none"
            {...props}
        >
            <g clipPath="url(#a)">
            <path fill="#fff" d="M0 0h800v700H0z" />
            <path
                fill="url(#b)"
                d="M396.5 374.5C515.517 374.5 612 278.017 612 159V-5H181v164c0 119.017 96.483 215.5 215.5 215.5Z"
            />
            <text
                xmlSpace="preserve"
                fill="#4A4A4C"
                fillOpacity={0.6}
                fontFamily="Arial"
                fontSize={20}
                fontWeight="bold"
                letterSpacing="0em"
                style={{
                whiteSpace: "pre",
                }}
            >
                <tspan x={369.424} y={128.934}>
                {"CIVIL\n"}
                </tspan>
                <tspan x={351.084} y={148.934}>
                {"SOCIETY"}
                </tspan>
            </text>
            <path
                fill="url(#c)"
                d="M394.381 265.76c-84.158 84.158-84.158 220.605 0 304.763l115.966 115.966L815.11 381.726 699.144 265.76c-84.158-84.158-220.605-84.158-304.763 0Z"
            />
            <text
                xmlSpace="preserve"
                fill="#4A4A4C"
                fillOpacity={0.6}
                fontFamily="Arial"
                fontSize={20}
                fontWeight="bold"
                letterSpacing="0em"
                style={{
                whiteSpace: "pre",
                }}
            >
                <tspan x={574.191} y={416.934}>
                {"STATE"}
                </tspan>
            </text>
            <path
                fill="url(#d)"
                d="M406.003 264.997c-84.158-84.158-220.605-84.158-304.763 0L-14.726 380.963l304.763 304.763L406.003 569.76c84.158-84.158 84.158-220.605 0-304.763Z"
            />
            <text
                xmlSpace="preserve"
                fill="#4A4A4C"
                fillOpacity={0.6}
                fontFamily="Arial"
                fontSize={20}
                fontWeight="bold"
                letterSpacing="0em"
                style={{
                whiteSpace: "pre",
                }}
                transform="translate(132 401)"
            >
                <tspan x={0.037} y={14.934}>
                {"MARKETS"}
                </tspan>
            </text>
            </g>
            <defs>
            <linearGradient
                id="b"
                x1={396.5}
                x2={396.5}
                y1={-5}
                y2={374.5}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00FFDC" stopOpacity={0} />
                <stop offset={1} stopColor="#00FFDC" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient
                id="c"
                x1={662.728}
                x2={394.381}
                y1={534.107}
                y2={265.76}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00FFDC" stopOpacity={0} />
                <stop offset={1} stopColor="#00FFDC" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient
                id="d"
                x1={137.656}
                x2={406.003}
                y1={533.344}
                y2={264.997}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#00FFDC" stopOpacity={0} />
                <stop offset={1} stopColor="#00FFDC" stopOpacity={0.3} />
            </linearGradient>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h800v700H0z" />
            </clipPath>
            </defs>
        </svg>
    </RedigimDiagramWrap>
}