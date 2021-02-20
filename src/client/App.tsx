import * as React from 'react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import Form from './Form';


export default class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<>
			<StripeProvider apiKey="pk_test_51HAQ8GHDkmXqGeZTqGsVbqI9Q3ulKvWNqiiLkceJO5cXHyulHyyk5A2VWbDX4dJDptC7248jaFrGGuXpz1Jr7W5P007aUoMX4O">
				<Elements>
					<Form />
				</Elements>
			</StripeProvider>
			</>
		);
	}
}

export interface IAppProps {}

export interface IAppState {}