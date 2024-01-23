import React, {Component, createContext} from 'react';

export const NavContext = createContext();

class NavContextProvider extends Component {
    state = {
        link: window?.location?.pathname
    }

    setLink = (newLink) => {
        this.setState({link: newLink})
    }

    render() {
        return (<NavContext.Provider value={{...this.state, setLink: this.setLink}}>
            {this.props.children}
        </NavContext.Provider>)
    }
}

export default NavContextProvider;