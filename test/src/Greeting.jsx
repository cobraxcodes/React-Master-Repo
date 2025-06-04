function Greet ({name = 'User'}){ // if a name is not passed as an argument, default parameter values is used
    return (
        <h1>Hello, {name}. Nice to see you today!</h1>
    )
}





export default Greet