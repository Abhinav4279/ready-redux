# Redux Application

The app contains three components:
App, B, C

The purporse is to test working with redux.
Store is created in store.js in app folder, containing all data. 

## Component B
It contains html input element (controlled component), the state is obtained from store using useSelector hook and updated using useDispatch hook of redux.

## Component C
It obtains this state from store and use it to output data.