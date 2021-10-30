/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

.marker-icon {
  color: #1a73b8;
}

.header {
  display: flex;
  flex-direction: column;
  width: 270px;
}

.btn-Detalle {
  width: 50px;
}

.header-div {
  padding-left: 5%;
  padding-top: 5%;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-color: #f4f4f4;
  border-style: solid;
  border-top: none;
}

.line1 {
  font-weight: bold;
  margin-bottom: 5px;
}

.line2 {
  color: #878787;
  margin-bottom: 5px;
}

.line3 {
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 560;
}

.line4 {
  margin-bottom: 5px;
  font-weight: bold;
}

.list1 {
  margin-bottom: 10px;
}

.list2 {
  margin-bottom: 10px;
}

.list-2 {
  margin-bottom: 5px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;