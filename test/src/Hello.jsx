import PropTypes from "prop-types"



function Hello ({name, age, hobby}) {
    return(
        <div> 
            <h1>Hi! My name is {name} </h1>
            <h2>I am {age} years old</h2>
            <h2>A hobby of mine is {hobby} </h2>
        </div>
    )
}

Hello.proptypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired
}

export default Hello