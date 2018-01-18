import React from 'react'
import { Router, Route } from 'react-router';
import { connect } from 'react-redux';

import { Card, Grid, Header } from 'semantic-ui-react'

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
  }

  render() {
    const { alert } = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={8}>
            <Card>
              <Card.Content>
                <Card.Header>
                  Hello World!
                </Card.Header>
                <Card.Description>
                  Getting Semantic UI working.  This grid column has a card.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header>Another Column</Header>
            <span>And this one just uses a basic Header and span</span>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export default App;
