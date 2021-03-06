import React, {Component} from "react";
import WeatherView from "./WeatherView";

export default class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'London',
            cityCard: '',
            description: '',
            temp: '',
            speed: '',
            error: '',
            errorCity: ''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.viewInformation = this.viewInformation.bind(this);
        this.viewInformation1 = this.viewInformation1.bind(this);
    }

    componentDidMount() {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=271f4cec435df20e899b52dbf15db2cc`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        description: data['weather'][0]['description'],
                        temp: Math.round(data['main']['temp'] - 273.15),
                        speed: data['wind']['speed'],
                        cityCard: this.state.cityName,
                        error: '',
                        errorCity: ''
                    });
                })
                .catch(err => {
                        this.setState({
                            error: 'City ​​name is incorrect',
                            errorCity: 'errorCity'
                        })
                    }
                );

    }

    onNameChange(e) {
        this.setState({cityName: e.target.value})
    }

    viewInformation() {
        this.componentDidMount();

    }
    viewInformation1(e) {
        if(e.key==='Enter') {
            this.componentDidMount();
        }
    }

    render() {
        return (
            <div>
                <div className={"inputCity"}>
                    <input
                        type={"text"}
                        onChange={this.onNameChange}
                        onKeyPress={this.viewInformation1}
                        value={this.state.cityName}
                        className={"inputCityName"}
                    />
                    <input
                        type={"submit"}
                        value={"OK"}
                        onClick={this.viewInformation}
                        className={"ok"}
                    />
                </div>
                <p className={this.state.errorCity}>{this.state.error}</p>
                <WeatherView
                    cityCard = {this.state.cityCard}
                    description={this.state.description}
                    speed={this.state.speed}
                    temp={this.state.temp}
                />
            </div>)
    }

}