import {extendObservable} from 'mobx'
import CartStore from './CartStore'

class AppState {
    constructor() {
        extendObservable(this, {
           cartStore: new CartStore()
        })
    }
}

export default AppState