/**
 *
 * @author fengjun
 * @build 2020/4/29 4:31 下午
 * @name action
 * @description
 */
import {MINUS_CONST, PLUS_CONST} from "../../../store/constants";

export interface PLUS {
  type: PLUS_CONST
}

export interface MINUS {
  type: MINUS_CONST
}

export type operationAction = PLUS | MINUS;


export const plus_num = (): PLUS => {
  return {
    type: PLUS_CONST
  }
};
export const minus_num = (): MINUS => {
  return {
    type: MINUS_CONST
  }
};
