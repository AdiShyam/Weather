import React from 'react';
import { connect } from 'react-redux';
import { Chart } from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends React.Component {

    _renderWeather = weather => {
        if (!weather) {
            return ;
        }

        const name = weather.city.name;
        const temps = weather.list.map(weather => weather.main.temp);
        const pressure = weather.list.map(weather => weather.main.pressure);
        const humidity = weather.list.map(weather => weather.main.humidity)
        
        return (
            <tr key = {name}>
                <td>
                    {name}
                    {/* <GoogleMap lat= {weather.city.coord.lat} lon= {weather.city.coord.lon} /> */}
                </td>
                <td>
                    {Chart({data:temps, color:'orange', units: 'k'})}
                </td>
                <td>
                    {Chart({data:pressure, color:'red', units: 'hPa'})}
                </td>
                <td>
                    {Chart({data:humidity, color:'blue', units: '%'})}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this._renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);