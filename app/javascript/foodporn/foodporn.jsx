import React from 'react'
import { Card, Grid, Header } from 'semantic-ui-react'

const FoodpornApp = (props) => (
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

export default FoodpornApp
