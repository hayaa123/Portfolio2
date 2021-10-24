import React, { Component } from 'react'
import Introduction from './Introduction'
import Work from './Work'
import AboutMe from './AboutMe'
import Contact from './Contact'

export class Body extends Component {
    render() {
        return (
            < >
                <Introduction/>
                <AboutMe/>
                <Work/>
                <Contact/>
            </>
        )
    }
}

export default Body
