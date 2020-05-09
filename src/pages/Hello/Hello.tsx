import React, {Fragment} from "react";

import {Button,} from "antd";
import {PlusOutlined, MinusOutlined} from '@ant-design/icons';
import {minus_num, operationAction, plus_num} from "./store/action";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {I_state} from "./store/reducer";

export interface Props {
  home: any,
  onPlus?: () => void,
  onMinus?: () => void,
}

const Hello = ({home, onPlus, onMinus}: Props) => {

  return (
    <Fragment>
      <div style={{textAlign: "center"}}>
        <h1 style={{marginRight: "10em"}}>{document.title}</h1>
        <h2>TS 加减计数器</h2>
        <h2>{home.count}</h2>
        <Button.Group>
          <Button type={"primary"} icon={<PlusOutlined/>} onClick={onPlus}/>
          <Button type={"default"} icon={<MinusOutlined/>} onClick={onMinus}/>
        </Button.Group>
      </div>
    </Fragment>
  );
}


export const mapStateToProps = (state: any) => ({
  home: state.home
});

export const mapDispatchToProps = (dispatch: Dispatch<operationAction>) => ({
  onPlus: () => dispatch(plus_num()),
  onMinus: () => dispatch(minus_num()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
