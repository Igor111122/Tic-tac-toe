import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './Raiting.css';

class Raiting extends React.Component{
    render() {
        return (    
            <div>
    <table>
    <tr>
      <th>№</th>
      <th>Player</th>
      <th>Score</th>
    </tr>
    <tr>
      <td>1</td>
      <td>Me</td>
      <td>1000</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Igor</td>
      <td>40</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Kodji</td>
      <td>10</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Name</td>
      <td>1</td>
    </tr>
    </table>

    </div>
        );
      }
}


export default Raiting
