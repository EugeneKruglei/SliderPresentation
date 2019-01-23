import React, {Component} from 'react';
import './App.css';
import {Impress, Step} from 'react-impressjs';
import 'react-impressjs/styles/react-impressjs.css';
import Nav from './Nav/Nav';

let w = window.innerWidth;
let h = window.innerHeight;
let x = window.innerWidth * 2;
let y = window.innerHeight * 2;

/*const menuItems = [
    'step-1',
    'step-2',
    'step-3',
    'step-4',
    'step-5'
];*/


class App extends Component {
    /*constructor(props) {
        super(props);
        this.state = {
            current: "active",
            duration: 1500
        };
        // this.handleClick = this.handleClick.bind(this);
    };*/
/*
    handleClick(menuItem) {
        this.setState({active: menuItem});
    }*/

    // componentWillReceiveProps(nextProps, nextState) {
    // this.setState({ active: menuItems[menuItems.indexOf(window.location.hash.slice(2))]});
    // }

    // menuItems[menuItems.indexOf(window.location.hash.slice(2))]
    render() {
        return (
            <div>
                <Nav current={"active"}/>
                <Impress
                    rootData={{
                        width: 320,
                        height: 450,
                        maxScale: 1,
                        minScale: 0,
                        perspective: 10000,
                        transitionDuration: 1000
                    }}
                    progress={true}
                    fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
                >
                    <Step exact path='menuItems[0]' className={"home"}
                          data={
                              {
                                  x: x,
                                  y: y,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,
                                  rotateZ: 0,
                                  scale: 2
                              }} duration={750}>
                        <p></p>
                        <button href="#/step-1" className="buy">Buy Now</button>
                    </Step>
                    <Step path='menuItems[1]' className={'about'} data={
                        {
                            x: x - w / 2,
                            y: y - h / 2,
                            z: 10000,
                            rotateX: 0,
                            rotateY: 0, //ok 45
                            rotateZ: 0,
                            scale: 1
                        }} duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                        <button href="#/step-1" className="buy">Buy Now</button>
                    </Step>
                    <Step path='menuItems[2]' className={'product'}
                          data={
                              {
                                  x: x + w / 2,
                                  y: y + h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0,//ok -45
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[3]' className={'contact'}
                          data={
                              {
                                  x: x - w / 2,
                                  y: y + h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0, ////ok 45
                                  rotateZ: 0,
                                  scale: 1
                              }}
                          duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                    <Step path='menuItems[4]' className={'about1'}
                          data={
                              {
                                  x: x + w / 2,
                                  y: y - h / 2,
                                  z: 10000,
                                  rotateX: 0,
                                  rotateY: 0, //ok -45
                                  rotateZ: 0,
                                  scale: 1
                              }} duration={750}>
                        <p>Made by your <b>Creativity</b> !!</p>
                    </Step>
                </Impress>
            </div>
        );
    }
}

export default App;
