import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/core/Button';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			capitale: '',
			flag: '',
			population: 0,
			region: ''
		};
	}

	componentDidMount() {
		let url = 'https://restcountries.eu/rest/v2/name/france';
		fetch(url).then((res) => res.json()).then((json) => {
			console.log('tester la requete json ', json);
			console.log('chercher name', json[0].name);
			this.setState({
				name: json[0].name,
				capitale: json[0].capital,
				flag: json[0].flag,
				population: json[0].population,
				region: json[0].region
			});
		});
	}

	onClickCountry() {}

	render() {
		return (
			<div>
				<h1> Selector Country </h1>

				<Button name="France" />
				<Button name="Brazil" />
				<Button name="Croatia" />
				<div>
					<img src={this.state.flag} alt="" />
					<h3>Country : {this.state.name} </h3>
					<h4>Capitale : {this.state.capitale} </h4>
					<p>Region : {this.state.region} </p>
					<p>Population : {this.state.population} </p>
				</div>
				<Button />
			</div>
		);
	}
}

export default App;
