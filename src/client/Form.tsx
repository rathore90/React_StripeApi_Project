import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';

class Form extends React.Component<IFormProps, IFormState>{
    
    constructor(props: IFormProps){
        super(props);
        this.state = {
            name: ""
            amount: ""
        };
    }

    render() {
        return(
            <main className="container">
                <form action="" className="form-group mt-3 border border-primary rounded shadow-lg p-3">
                    <label>
                        Name
                    </label>
                    <input 
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.EventTarget.value})}
                    />
                    <label>Amount</label>
                    <input 
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.EventTarget.value})}
                    />
                    <CardElement className=""></CardElement>
                </form>
            </main>
        );
    }
}


interface IFormProps { }

interface IFormState { 
    name: string;
    amount: string;
}

export default injectStripe(Form);