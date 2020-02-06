import React, { Component } from 'react';
import ColorBox from './ColorBox'
import './ColorBoxes.css'

class ColorBoxes extends Component {
    state = { 
        colors: {}
    }

    clickedColor = (color) => {
        let newColor = this.randomColorGenerator()
        let newColors = this.state.colors
        newColors[newColor] = newColors[color]
        delete newColors[color]
        newColors[newColor] = newColor
        

        console.log(newColors[color], 'i am newColors')
        if (color !== newColor) {
            console.log('i am changing state', newColor)
            console.log(color, 'i am current color')
            console.log(this.state.colors[color])
        
            this.setState({ colors: newColors  });
            // const {colors} = this.state
            // this.setState({
            //     colors: {
            //         ...colors,
            //         [color]: newColor,
            //     }
            // })
        }
        console.log(this.state)
        
    }

    randomColorGenerator = () => {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
        return randomColor
    }

    renderColors = () => {
        let colors = []
        colors = Object.keys(this.state.colors)
        return colors.map(c => 
        <div key={c}><ColorBox color={c} clickedColor={this.clickedColor}/></div>)
    }

    componentDidMount() {
        let colorKey
        let colors = {}
        for(let i=0; i < 4; i++) {
            colorKey = this.randomColorGenerator()
            colors[colorKey] = colorKey
            
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