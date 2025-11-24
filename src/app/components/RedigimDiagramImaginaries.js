import RedigimDiagramWrap from "./RedigimDiagramWrap";

export default function RedigimDiagramImaginaries( {onSelect=()=>{}, ...props} ){
    return <RedigimDiagramWrap 
            caption="3 part venn diagram showing overlapping areas: Markets, Civil Society, and State containing different imaginaries. In Civil Society: 'Welfare Transnationalism' and 'Community Empowerment'. In State, 'Welfare State Enhancement'. In Civil Society plus Markets: 'Welfare Consumerism' and 'Welfare Solutionism'. In Civil Society plus State: 'Welfare Complementarity'. In the intersection of all areas: 'Pragmatic Competition'"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={800}
            height={700}
            viewBox="0 0 800 700"
            fill="none"
            {...props}
        >
            <g 
                className="imaginaries-welfarestateenhancement" 
                onClick={() => { onSelect( 'welfarestateenhancement' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'welfarestateenhancement' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={573.143} y={333.854}>
                    {"Welfare State\n"}
                </tspan>
                <tspan x={573.143} y={347.854}>
                    {"Enhancement"}
                </tspan>
                </text>
                <path fill="#000" d="m553 336.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-welfarecomplementarity" 
                onClick={() => { onSelect( 'welfarecomplementarity' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'welfarecomplementarity' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={447.143} y={266.854}>
                    {"Welfare\n"}
                </tspan>
                <tspan x={447.143} y={280.854}>
                    {"Complementarity"}
                </tspan>
                </text>
                <path fill="#000" d="m427 269.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-pragmaticcompetition" 
                onClick={() => { onSelect( 'pragmaticcompetition' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'pragmaticcompetition' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={371.143} y={349.854}>
                    {"Pragmatic\n"}
                </tspan>
                <tspan x={371.143} y={363.854}>
                    {"Competition"}
                </tspan>
                </text>
                <path fill="#000" d="m351 352.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-welfaresolutionism" 
                onClick={() => { onSelect( 'welfaresolutionism' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'welfaresolutionism' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={269.143} y={295.854}>
                    {"Welfare\n"}
                </tspan>
                <tspan x={269.143} y={309.854}>
                    {"Solutionism"}
                </tspan>
                </text>
                <path fill="#000" d="m249 298.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-welfareconsumerism" 
                onClick={() => { onSelect( 'welfareconsumerism' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'welfareconsumerism' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={232.143} y={240.854}>
                    {"Welfare\n"}
                </tspan>
                <tspan x={232.143} y={254.854}>
                    {"Consumerism"}
                </tspan>
                </text>
                <path fill="#000" d="m212 243.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-communityempowerment" 
                onClick={() => { onSelect( 'communityempowerment' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'communityempowerment' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={215.143} y={169.854}>
                    {"Community\n"}
                </tspan>
                <tspan x={215.143} y={183.854}>
                    {"Empowerment"}
                </tspan>
                </text>
                <path fill="#000" d="m195 172.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
            <g 
                className="imaginaries-welfaretransnationalism" 
                onClick={() => { onSelect( 'welfaretransnationalism' ) }}
                onKeyDown={(e) => { if (e.key === 'Enter') onSelect( 'welfaretransnationalism' ); }}
                tabIndex="0" 
                role="button"
            >
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
                <tspan x={213.143} y={103.854}>
                    {"Welfare\n"}
                </tspan>
                <tspan x={213.143} y={117.854}>
                    {"Transnationalism"}
                </tspan>
                </text>
                <path fill="#000" d="m193 106.465 6.465-6.465 6.465 6.465-6.465 6.465z" />
            </g>
        </svg>
    </RedigimDiagramWrap>
}