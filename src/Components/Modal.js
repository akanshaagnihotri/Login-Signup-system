import React from 'react';
var styles={
	back:{
		backgroundColor:'#d0c5c5',
		width:'100vw',
		height:'100vh'
	}
}
class Modal extends React.Component{
	constructor(props){
		super(props);
	}

render(){
	let {showBox,closeBox,children} = this.props
	return(
		<div>
	{
		showBox===true
		?
		(<div style={styles.back} onClick={closeBox}>
			{children}
		</div>):
		""
	}
	</div>
	)
}
}
export default Modal;