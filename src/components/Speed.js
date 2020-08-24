import React from 'react';
import NumberEasing from 'che-react-number-easing';

class Speed extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div style={{
                bottom: 0,
                position: 'absolute',
                width: '100%',
                fontSize: '190px',
                font: 'Arial',
                fontStyle: 'italic',
                color: "rgba(255, 255, 255, 1)",
                fontWeight: 150
            }}>
                {/* <RadialGauge
                    units='mph'
                    width={400}
                    height={400}
                    value={this.props.speed}
                    minValue={0}
                    maxValue={140}
                    majorTicks={['0','20','40','60','80','100','120','140']}
                    minorTicks={4}
                    borders={false}
                    highlights={[]}
                    colorNumbers="white"
                    colorPlate="transparent"
                    fontNumbersSize="28"
                    animationDuration={275}
                    animationRule="linear"
                    animation={true}
                    animatedValue={true}
                    // highlights={[
                    //     {"from": 100, "to": 140, "color": "rgba(200, 50, 50, .75)"}
                    // ]}
                ></RadialGauge> */}
                <div style={{
                    fontSize: '30px',
                    marginLeft: '100px',
                    marginBottom: '-40px',
                    fontWeight: 250,
                    color: "rgba(255, 255, 255, .5)"
                }}>
                    MPH
                </div>
                <NumberEasing 
                    value={this.props.speed}
                    speed={250}
                    precision={0}
                    ease="linear"
                />
            </div>
        )
    }
}

export default Speed