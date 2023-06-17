## Redux for user LIst

1. Create form comp
2. create RTD comp, child of form
3. Create local stat, get form data and send data to RTD comp and display in real time

==== send list to redux

1. userSlice and plug in the store
2. to send data to state, call actionCreator function to the Form and dispatch with data
3. to read data from state, use useSelector to pull data from the redux store and loop through the list to dispaly in the Display comp.
