/**
 *
 * @author fengjun
 * @build 2020/5/9 6:32 下午
 * @name index
 * @description
 */

import React from 'react'
import {withRouter} from "react-router";
import {Link} from 'react-router-dom';

const Home = () => {

  return (
    <div style={{textAlign: "center", margin: 100}}>
      <h1><Link to={"/hello"}>go-->加减法...</Link></h1>
    </div>
  )
};

export default withRouter(Home);
