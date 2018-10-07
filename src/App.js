import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { ListTransactions } from './components/ListTransactions/ListTransactions';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
});

class App extends Component {
  state = {
    data: [
        {
          value: 290.99,
          type: 'credit',
          date: '20/09/2018'
        }
    ]
  };

  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                          Minhas transações
                        </Typography>
                    </Toolbar>
                </AppBar>
                <ListTransactions data={this.state.data}/>
            </React.Fragment>
        </MuiThemeProvider>
    );
  }
}

export default App;
