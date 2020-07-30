import React from 'react'
import { useContext } from 'react'
import {StoreContext} from '../context'
export const Home = () => {
    const {store} = useContext(StoreContext);
    console.log(store);
    const user = {
        name: 'me'
    }
    console.log(user);
    console.log(user.name);
    const {name} = user;
    console.log(name);
    return (
        <div>
            Hello from home
        </div>
    )
}
