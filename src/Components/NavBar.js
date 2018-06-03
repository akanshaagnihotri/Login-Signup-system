import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

var styles={
	mainDiv:{
		width:'100%',
		position:'absolute',
		backgroundColor:'#353590',
		height:50,
		boxShadow:'3px 3px 3px grey'


	},
	logo:{
		width:50,
		height:50,
		

		
		
	},
	button:{
		position: 'relative',
        left: '75vw',
         top: -45,
         marginLeft:20
	},
	image:{
		borderRadius:"50%",
		width:50,
		height:50,
		position:'relative',
		left:'75vw'
	}
}
class Navbar extends React.Component{
  constructor(props){
  	super(props);
 

  }
  

 render(){
 	return(
<div style={styles.mainDiv}>
<img  style={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH20aBVbDIiSSDYzto9ENgh1j0hDfOszd1L1S1K_R1KkSaIDqvdA"/>
           {(this.props.userLoggedIn===true)?
			  	(<img style={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjU2pl1in9EONj7jkiPWrHBfDA25kbuEawRAiFebB0PNCLeVnl"/>):
			  	(
				  	<div>	
				  		<Button onClick={this.props.openSignUp} style={styles.button} variant="raised" color="secondary" >
		        			SIGNUP
		      			</Button>
		       			<Button onClick={this.props.openLogin} style={styles.button} variant="raised" color="secondary" >
		        			LOGIN
		      			</Button>
					</div>
				)
			  }
	       

</div>
 		)
 }
}
export default Navbar;