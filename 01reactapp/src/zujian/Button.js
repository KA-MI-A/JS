import React from 'react';
// import './indexCss.less';
import { Button } from 'antd';


class ButtonText extends React.Component{
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
  export default ButtonText;