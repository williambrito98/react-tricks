import React, { Component, Fragment } from 'react'
import Planet from './planet'

const showMessage = () => {
    console.log('message')
}

const clickOnPlanet = (name) => {
    console.log('clicou no planeta ' + name)
}

class Planets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [
                {
                    name: 'marte',
                    description: 'Lorem Ipsum',
                    img_url: 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/24/9c/a7/249ca77a-b16f-e4a5-2f13-08d25b93961f/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png'
                },
                {
                    name: 'mercurio',
                    description: 'Lorem Ipsum',
                    img_url: 'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/24/9c/a7/249ca77a-b16f-e4a5-2f13-08d25b93961f/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png'
                }
            ]
        }
    }

    componentDidMount() {
        console.log('O COMPONENTE FOI MONTADO')
    }

    removeLast() {
        let newPlanets = [...this.state.planets]
        newPlanets.pop()
        this.setState(state => ({
            planets: newPlanets
        }))
    }

    duplicateLastPlanet() {
        let lastPlanet = this.state.planets[this.state.planets.length - 1]
        this.setState(state => ({
            planets: [...this.state.planets, lastPlanet]
        }))
    }

    render() {
        return (
            <Fragment>
                <h3>Planet List</h3>
                {this.state.planets.map((item) =>
                    <Planet
                        name={item.name}
                        description={item.description}
                        img_url={item.img_url}
                        key={item.name}
                    />
                )}

                {/* <Planet
          name='marte'
          description='Lorem Ipsum'
          img_url='https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/24/9c/a7/249ca77a-b16f-e4a5-2f13-08d25b93961f/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png'
          clickOnPlanet={clickOnPlanet} />
        <Planet
          name=''
          description='Lorem Ipsum'
          img_url='https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/24/9c/a7/249ca77a-b16f-e4a5-2f13-08d25b93961f/AppIcon-0-1x_U007emarketing-0-0-0-7-0-0-85-220.png/1200x630wa.png'
          clickOnPlanet={clickOnPlanet} /> */}
                <button onClick={showMessage}>Show message</button>
                <button onClick={this.removeLast.bind(this)}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet.bind(this)}>Duplicate Last</button>
            </Fragment>
        )
    }
}

export default Planets
