import PropTypes from 'prop-types'

function Greet ({name = 'User'}){ // if a name is not passed as an argument, default parameter values is used
    return (
        <h1>Hello, {name}. Nice to see you today!</h1>
    )
}

// to set a prop type
// in this case name is a string
Greet.propTypes = {
    name: PropTypes.string //.isRequired // .isRequired is used to make a prop required
}



export default Greet