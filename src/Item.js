import React from 'react'
import {inject, observer} from 'mobx-react'

const Item = inject('inventory')(observer (class Item extends Component {

}))