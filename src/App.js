import React  from 'react';
import Products from './Products.js';
import center from 'react-center';

class App extends React.Component {
  render() {
    return (
      <div>
      	<center>
        <header className="App-header"><h1>Products Management</h1></header>
        </center>
        <section>
        <center>
          <Products></Products>
         </center>
        </section>
      </div>
    );
  }
} 

export default App;