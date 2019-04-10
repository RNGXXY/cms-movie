import React,{ Component } from 'react'
import { } from './styledComponents'
import { red, blue } from 'ansi-colors';

class Header extends Component{

    render(){
        return(
            <div style={{
              width:'1000px',
              height:'500px',
              display: 'flex',
              background:blue,
            }}>
              <div style={{
                display:'flex',
                flex:1,
                background:red,
              }}>
                
              </div>

            </div>
        )
    }
}

export default Header