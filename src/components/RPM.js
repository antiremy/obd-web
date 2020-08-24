import React from 'react';
import { RadialGauge } from 'react-canvas-gauges'

class RPM extends React.Component {
    constructor(props) {
        super(props)
    }



    render() { 
        return (
            <div>
                <RadialGauge
                    // units='x1000'
                    // title="RPM"
                    width={400}
                    height={400}
                    value={this.props.rpm}
                    minValue={0}
                    maxValue={8000} 
                    majorTicks={['0','1','2','3','4','5','6','7','8']}
                    minorTicks={4}
                    borders={false}
                    borderMiddleWidth={20}
                    needleCircleOuter={false}
                    needleCircleInner={false}
                    needleType={"arrow"}
                    colorNeedle="#fff"
                    colorNeedleEnd="#fff"
                    colorNeedleShadowUp="#fff"
                    colorNeedleShadowDown="#fff"
                    needleWidth={2}
                    highlights={[
                        {"from": 6500, "to": 7000, "color": "rgba(200, 50, 50, .65)"},
                        {"from": 7000, "to": 8000, "color": "rgba(200, 50, 50, .65)"}
                    ]}
                    highlightsWidth={10}
                    colorNumbers="rgba(255, 255, 255, .5)"
                    colorPlate="transparent"
                    startAngle={45}
                    ticksAngle={215}
                    valueBox={false}
                    fontNumbersSize="32"
                    animationDuration={245}
                    animatedValue={true}
                    animation={true}
                    animationRule="linear"

                ></RadialGauge> 
            </div>  
        )
    }
}

export default RPM