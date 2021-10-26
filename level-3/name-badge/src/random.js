class NameBadge extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            favFood: "",
            phone: "",
            badgeBox: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.addBadge = this.addBadge.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addBadge(event){
        event.preventDefault()
        const newItem = {firstName: this.prevState.firstName,
                        lastName: this.prevState.lastName,
                        email: this.prevState.email}
           this.setState(prevState => {
               return{
                   badgeBox : [
                       ...prevState.badgeBox,
                       newItem
                   ]
               }
           })
    }
}