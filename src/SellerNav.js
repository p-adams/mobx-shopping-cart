import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import Paper from 'material-ui/Paper'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import SellerForm from './SellerForm'

const SellerNav = inject("inventory")(observer (class SellerNav extends Component {
    render() {
        return (
            <Paper zDepth={5}>
            <Toolbar style={{backgroundColor: 'white'}}>
                <ToolbarGroup>
                    <ToolbarTitle text={<h4>Want to sell an item?</h4>} style={{color: 'black'}}/>
                    <ToolbarSeparator style={{background: 'black'}}/>
                    <RaisedButton
                        label="Sell Item"
                        primary={true}
                        onClick={() => this.props.inventory.toggleSeller()}
                        />
                </ToolbarGroup>
            </Toolbar>
             <SellerForm/>
            </Paper>
        )
    }
}))

export default SellerNav