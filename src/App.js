import React from 'react';
import BaseForm from './components/BaseForm';
import StepsComponent from './components/Steps';
import { Card } from 'antd';

function App() {
  return (
    <div className="App">
      <Card style={{height: 'auto', margin: '25px', padding: '20px'}} className="shadow">
        <StepsComponent />
        <BaseForm />
      </Card>
    </div>
  );
}

export default App;