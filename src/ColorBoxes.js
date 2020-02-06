import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './ColorBoxes.css'

class ColorBoxes extends Component {
    state = { 
        colors: []
    }

    clickedColor = (color) => {
        let newColor = this.randomColorGenerator()
        
        if (color !== newColor) {
            const {colors} = this.state
            this.setState(
                { 
                    colors: colors.map(stateColor => {
                        if (stateColor === color ) {
                            return newColor
                        } else {
                            return stateColor
                        }
                    })  
                });
        }
    }

    randomColorGenerator = () => {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
        return randomColor
    }

    renderColors = () => {
        
        return this.state.colors.map(c => 
        <div key={c}><ColorBox color={c} clickedColor={this.clickedColor}/></div>)
    }

    componentDidMount() {
        let colorKey
        let colors = []
        for(let i=0; i < 21; i++) {
            colorKey = this.randomColorGenerator()
            colors.push(colorKey)
            
        }
        this.setState({ colors: colors  });
    }
    render() { 
        
        return ( 
            <div className="ColorBoxes">
                {this.renderColors()}
            </div>
        );
    }
}
export default ColorBoxes;




// this.setState({ colors: newColors  });
            // const {colors} = this.state
            // this.setState({
            //     colors: {
            //         ...colors,
            //         [color]: newColor,
            //     }
            // })