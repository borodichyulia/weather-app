import React, {Component} from "react";

export default class WeatherView extends Component {
    render() {
        return (
            <div className={"card"}>
                <h2>Weather in {this.props.cityCard}</h2>
                <div>Description: {this.props.description}</div>
                <div>Speed of the wind: {this.props.speed} m/s</div>
                <div>Temperature: {this.props.temp} Celcius</div>
            </div>
        )
    }

}