import React from 'react';

class GoogleMap extends React.Component {
    componentDidMount() {
        console.log("the props are eeeeeeee", this.props);
        const google = window.google;
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lon: this.props.lon
            }
        })
    }

    render() {
        //this.refs.map
        return (<div ref='map' />)
    }
}

export default GoogleMap;