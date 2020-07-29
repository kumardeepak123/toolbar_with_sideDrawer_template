import React ,{Component}from "react";
import Auxiliary from '../auxiliary/auxiliary'
import  './layout.css'
 //import classes from  './layout.css'
import ToolBar from'../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {

  state={
    showSideDrawer: false 
  }


  sideDrawerCloseHandler=()=>{
     this.setState({showSideDrawer:false}) ;
  }

  toggleSideDrawerHandler=()=>{

    this.setState((prevState)=>{
  return {showSideDrawer : ! prevState.showSideDrawer}
    })
  }

  render() {

    return (
      <Auxiliary>
        <ToolBar toggleClicked={this.toggleSideDrawerHandler}/>
      <SideDrawer Open={this.state.showSideDrawer} backDropRemove={this.sideDrawerCloseHandler}/> 
      <main className= 'Content'>{this.props.children}</main>
     </Auxiliary>
    )
  };

}

export default Layout;
