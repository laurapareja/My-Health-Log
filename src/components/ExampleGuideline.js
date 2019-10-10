import React from 'react';

const ExampleGuideline = (props) => {
    const { info, color, medicationName } = props;
    const renderName = (props) => {

        if (info !== undefined) {
            const name = info.map((time, index) => {
                if (time < 10) {
                    return (
                        <div key={index} className="example__time--container">
                            <h4>0{time}:00 </h4>
                            <div className={`hour ${color}`}></div>
                            {medicationName}
                        </div>
                    )
                } else {
                    return (
                        <div key={index} className="example__time--container">
                            <h4>{time}:00 </h4>
                            <div className={`hour ${color}`}></div>
                            {medicationName}
                        </div>
                    )
                }
            })
            return name

        } else if (info === undefined) {
            return <div>No content</div>
        }
    }

    return (
        <div>
            <div className="example__container">
                {renderName()}
            </div>
        </div>
    )
}

export default ExampleGuideline;