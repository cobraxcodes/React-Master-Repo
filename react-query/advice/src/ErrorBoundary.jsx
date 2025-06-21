class ErrorBoundary extends React.Component{
    constructor(props) {
        super (props)
        this.state = { hasError: false }

    }   

    static getDerivedStateFromError(error){
          console.log(error)
        return { hasError: true}
    }


    // use this if u want to add error to an error logging service 
// comnponentDidCatch(error, errorInfo){
//     logErrorToMyService(error, errorInfo)
// }

render() {
    if(this.state.hasError){
        return <h1>Something went wrong~!</h1>
    }
    return this.props.children
}
}

export default ErrorBoundary