import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



class AppBarExampleIcon extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title={null}
                    iconElementLeft={<IconButton> <NavigationArrowBack /></IconButton>}
                />
            </MuiThemeProvider>
        );
    }
}

export default AppBarExampleIcon;