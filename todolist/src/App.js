import 'semantic-ui-css/semantic.min.css'
import logo from './logo.svg';
import './App.css';
import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


function App() {
  return (
    <div>
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='arrow right' />
        </Button.Content>
      </Button>
    </div>
  );
}

export default App;
