import React from 'react';
import Button from 'material-ui/Button';
import firebase from "../Common/firebase";
const database=firebase.database();

var styles={
	back:{
		backgroundColor:'#d0c5c5',
		width:'100vw',
		height:'100vh'
	},
	box:{
		width: 600,
	    height: 450,
	    zIndex: 2000,
	    backgroundColor:'white',
	    position: 'relative',
	    top: 120,
	    left: 350,
	    display:'flex',
	    flexDirection:'row',
	    boxShadow:'2px 2px 2px grey'


	},
	leftBox:{
		height:450,
		width:300,
		backgroundColor:'white',
		flex:1
	},
	rightBox:{
		height:450,
		width:300,
		backgroundColor:'blue',
		flex:1
	},
	properties:{
	 display:'flex',
	    flexDirection:'row',
	    margin:10,
	    marginTop:20,
	    position:'relative',
	    top:70	
	},
	name:{
		flex:1,
		color:'blue'
	},
	inputField:{
		flex:2
	},
	button:{
		top:90,
		left:100
	}
}

export default class SignUpForm extends React.Component {
	constructor(props){
		super(props);
		this.state=
		{
			name:"",
			email:"",
			password:"",
			contact:"",
			TotalDataBackend:null
		}
		this.addToDatabase=this.addToDatabase.bind(this);
	}
	componentDidMount(){
		console.log("Component Did componentDidMount Fired")
	   	database.ref('/Login').on('value',(response)=>{

			if(response.val()){
			 	this.setState({TotalDataBackend:response.val()})
			}
		})	
	}
				
			addToDatabase(){
				let obj={
					name:this.state.name,
					email:this.state.email,
					password:this.state.password,
					contact:this.state.contact
				}
				if(this.state.TotalDataBackend==null){ //when nothing in firebase

					database.ref('/Login/'+this.state.email).set(obj).then(()=>{
					    alert("posted")
					});
				}
				else{ // we got something at ComponentDidMount
					console.log("We Got something at did mount")
					console.log(Object.entries(this.state.TotalDataBackend))
					
					let foundData = Object.entries(this.state.TotalDataBackend).some((ind)=>{
						return(this.state.email == ind[0])	
					});
					
					if(foundData){
						alert("already existing user")
					}
					
					else{
						database.ref('/Login/'+this.state.email).set(obj).then(()=>{
					    	alert("data posted")
						})

					}
				} 

				

				
			}
			 
	render(){
		return(
			 <div  onClick={(event)=>{event.stopPropagation()}} style={styles.box}>
        <div style={styles.leftBox}>
          <div style={styles.properties}>
            <div style={styles.name}>Name:</div>
            <input style={styles.inputField} value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/>
          </div>
          <div style={styles.properties}>
            <div style={styles.name}>E-mail:</div>
            <input style={styles.inputField} value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
          </div>
          <div style={styles.properties}>
            <div style={styles.name}>Password:</div>
            <input style={styles.inputField} value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
          </div>
          <div style={styles.properties}>
            <div style={styles.name}>ContactNo:</div>
            <input style={styles.inputField} value={this.state.contact} onChange={(event)=>this.setState({contact:event.target.value})}/>
          </div>
           <Button onClick={this.addToDatabase}  style={styles.button} variant="raised" color="primary" >
                SIGN UP
              </Button>
            </div>
        
        <img style={styles.rightBox} src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&h=350"/>
        
      </div>

		)
	}
}