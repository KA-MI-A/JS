import React from 'react';
import { Button } from 'antd';


class big extends React.Component{
    showDrawer=() => {
      console.log('点击事件');
    };
      render(){
        return(
          <div>
            <Button type="primary" onClick={this.showDrawer}>
                Open
            </Button>
            <div style={{width:100,height:100,backgroundColor:'pink'}}></div>
          </div>
        )
      }
    }
export default big;