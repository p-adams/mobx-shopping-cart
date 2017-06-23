import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'

const AppBarComponent = () => {
    const style = {
        color: 'white'
    }
    return (
        <AppBar title={<span style={style}>MobX Shopping Cart</span>}
        iconElementRight={<FlatButton style={style} label="View Cart" />}
        />
    )
}

export default AppBarComponent