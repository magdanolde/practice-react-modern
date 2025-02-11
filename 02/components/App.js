// ./src/components/App.js
import React from 'react';
import Box from './Box';
import {TextContext} from './context';


class App extends React.Component {
    state = {
        text: 'React Hello World Modern!',
    };

    render() {
        const { text } = this.state;
        const {Provider} = TextContext;
        return (
        <Provider value={this.state.text}>
            <Box/>
        </Provider>
        )
    }
}

export default App;
