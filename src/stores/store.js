import {computed, extendObservable} from 'mobx'

class CartStore {
    constructor() {
        extendObservable(this, {
            items: [
                {id: 1, item: "REAL ISHOD WAIR"}
            ],
            getItems: computed(() => {
                return this.items
            })
        })
    }
}

const store = new CartStore()
export default store