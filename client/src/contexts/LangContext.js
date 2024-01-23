import React, {Component, createContext} from 'react';

export const LangContext = createContext();

class LangContextProvider extends Component {
    state = {
        lang: "pl"
    }

    setLang = (newLang) => {
        this.setState({lang: newLang})
    }

    render() {
        return (<LangContext.Provider value={{...this.state, setLang: this.setLang}}>
            {this.props.children}
        </LangContext.Provider>)
    }
}

export default LangContextProvider;
