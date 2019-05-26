import React,{Component} from 'react';
import SidebarComponent from './SidebarComponent'
import MainComponent from './MainComponent'
import './App.css';


class App extends Component {
  render(){
    let urlList = [
      {tag:"Home",'url':'#', color:'red'},
      {tag:'About Us', url:'#', color:'white'},
      {tag:'Supporters',url:'#', color:'blue'},
      { tag:"Host",url:'#', color:'yellow'},
      {tag:"bhoomi",url:'#', color:'white'}
  ]
    return(
      <div className = "App" >
       <SidebarComponent navList={urlList}/>
       <MainComponent/>
      </div>
    );
  }
}

export default App;
