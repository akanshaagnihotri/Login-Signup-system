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
	    marginTop:30,
	    position:'relative',
	    top:90	
	},
	name:{
		flex:1,
		color:'blue'
	},
	inputField:{
		flex:2
	},
	button:{
		top:120,
		left:100
	}
}

export default class LoginForm extends React.Component{
	constructor(props){
		super(props);
		this.state=
		{
			email:"",
			password:"",
			allData:{}
		}
		this.loginuser=this.loginuser.bind(this);
	}
	
	
	loginuser(){
       database.ref('/Login/'+this.state.email).on('value',(response)=>{
			if(response.val()){
				let foundData = response.val();
				console.log(foundData);
				if(foundData.password==this.state.password)
				{
					alert("SuccessFul Login")
				}
				else{
					alert("Wrong Password")
				}
			}
			else{
				alert("User Doesnt Exist")
			}
		})
       

	}
	render(){
		return(
			 <div  onClick={(event)=>{event.stopPropagation()}} style={styles.box}>
        <div style={styles.leftBox}>
          
          
          <div style={styles.properties}>
            <div style={styles.name}>Email</div>
            <input style={styles.inputField}  value={this.state.email} onChange={(event)=>this.setState({email:event.target.value})}/>
          </div>
          <div style={styles.properties}>
            <div style={styles.name}>Password</div>
            <input style={styles.inputField}  value={this.state.password} onChange={(event)=>this.setState({password:event.target.value})}/>
          </div>
           <Button  style={styles.button} variant="raised" color="primary" onClick={this.loginuser} >
                LOGIN
              </Button>
            </div>
        
        <img style={styles.rightBox} src="data:image/jpeg;base64,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"/>
        
      </div>

		)
	}
}