import React, { Component } from 'react';
// import Controls from './Controls';
// import Value from './Value';
import './Counter.css';

class Counter extends Component {
  render() 
      return <div className="Counter">
      <span className="Counter__value">{value}</span>;
          <div className="Counter">
              <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить на 1
    </button>
  </div> 
</div>;
</div>;
            

          
      
}

render() {
    const { value } = this.state;

    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }