// Copyright (c) 2021 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Base from './base';

export default class DataTable extends Component {
  static displayName = 'DataTable';
  static propTypes = {
    /** Set the height of the icon, ex. '16px' */
    height: PropTypes.string
  };
  static defaultProps = {
    height: '16px',
    predefinedClassName: 'data-ex-icons-datatable'
  };

  render() {
    return (
      <Base {...this.props}>
        <g>
          <path d="M49.8627039,8 L14.1386877,8 C11.3005103,8 9,10.2588055 9,13.045531 L9,51.954469 C9,54.74165 11.3005103,57 14.1386877,57 L49.8627039,57 C52.7004174,57 54.9999999,54.74165 54.9999999,51.954469 L54.9999999,13.045531 C55.0004638,10.2588055 52.7008814,8 49.8627039,8 Z M23.6645354,52.7702626 C23.6645354,53.3860934 23.1134149,53.8844062 22.4328647,53.8844062 L13.8673027,53.8844062 C13.1862885,53.8844062 12.6351681,53.3856379 12.6351681,52.7702626 L12.6351681,45.0177179 C12.6351681,44.4009761 13.1862885,43.9022078 13.8673027,43.9022078 L22.4328647,43.9022078 C23.1134149,43.9022078 23.6645354,44.4009761 23.6645354,45.0177179 L23.6645354,52.7702626 Z M37.4773392,52.7702626 C37.4773392,53.3860934 36.9271465,53.8844062 36.2461324,53.8844062 L27.6810343,53.8844062 C26.9995562,53.8844062 26.4484358,53.3856379 26.4484358,52.7702626 L26.4484358,45.0177179 C26.4484358,44.4009761 26.9995562,43.9022078 27.6810343,43.9022078 L36.2456685,43.9022078 C36.9271465,43.9022078 37.4768752,44.4009761 37.4768752,45.0177179 L37.4768752,52.7702626 L37.4773392,52.7702626 Z M51.2910708,52.7702626 C51.2910708,53.3860934 50.7408781,53.8844062 50.059864,53.8844062 L41.494302,53.8844062 C40.8128239,53.8844062 40.2630952,53.3856379 40.2630952,52.7702626 L40.2630952,45.0177179 C40.2630952,44.4009761 40.8132878,43.9022078 41.494302,43.9022078 L50.0594001,43.9022078 C50.7408781,43.9022078 51.2906068,44.4009761 51.2906068,45.0177179 L51.2906068,52.7702626 L51.2910708,52.7702626 Z M23.6645354,39.9735533 C23.6645354,40.5893842 23.1134149,41.0886079 22.4328647,41.0886079 L13.8673027,41.0886079 C13.1862885,41.0886079 12.6351681,40.5889287 12.6351681,39.9735533 L12.6351681,32.2200976 C12.6351681,31.6042668 13.1862885,31.1054985 13.8673027,31.1054985 L22.4328647,31.1054985 C23.1134149,31.1054985 23.6645354,31.6047223 23.6645354,32.2200976 L23.6645354,39.9735533 Z M37.4773392,39.9735533 C37.4773392,40.5893842 36.9271465,41.0886079 36.2461324,41.0886079 L27.6810343,41.0886079 C26.9995562,41.0886079 26.4484358,40.5889287 26.4484358,39.9735533 L26.4484358,32.2200976 C26.4484358,31.6042668 26.9995562,31.1054985 27.6810343,31.1054985 L36.2456685,31.1054985 C36.9271465,31.1054985 37.4768752,31.6047223 37.4768752,32.2200976 L37.4768752,39.9735533 L37.4773392,39.9735533 Z M51.2910708,39.9735533 C51.2910708,40.5893842 50.7408781,41.0886079 50.059864,41.0886079 L41.494302,41.0886079 C40.8128239,41.0886079 40.2630952,40.5889287 40.2630952,39.9735533 L40.2630952,32.2200976 C40.2630952,31.6042668 40.8132878,31.1054985 41.494302,31.1054985 L50.0594001,31.1054985 C50.7408781,31.1054985 51.2906068,31.6047223 51.2906068,32.2200976 L51.2906068,39.9735533 L51.2910708,39.9735533 Z M23.6645354,26.9996561 C23.6645354,27.6159424 23.1134149,28.1142552 22.4328647,28.1142552 L13.8673027,28.1142552 C13.1862885,28.1142552 12.6351681,27.6159424 12.6351681,26.9996561 L12.6351681,19.2466558 C12.6351681,18.630825 13.1862885,18.1316012 13.8673027,18.1316012 L22.4328647,18.1316012 C23.1134149,18.1316012 23.6645354,18.630825 23.6645354,19.2466558 L23.6645354,26.9996561 Z M37.4773392,26.9996561 C37.4773392,27.6159424 36.9271465,28.1142552 36.2461324,28.1142552 L27.6810343,28.1142552 C26.9995562,28.1142552 26.4484358,27.6159424 26.4484358,26.9996561 L26.4484358,19.2466558 C26.4484358,18.630825 26.9995562,18.1316012 27.6810343,18.1316012 L36.2456685,18.1316012 C36.9271465,18.1316012 37.4768752,18.630825 37.4768752,19.2466558 L37.4768752,26.9996561 L37.4773392,26.9996561 Z M51.2910708,26.9996561 C51.2910708,27.6159424 50.7408781,28.1142552 50.059864,28.1142552 L41.494302,28.1142552 C40.8128239,28.1142552 40.2630952,27.6159424 40.2630952,26.9996561 L40.2630952,19.2466558 C40.2630952,18.630825 40.8132878,18.1316012 41.494302,18.1316012 L50.0594001,18.1316012 C50.7408781,18.1316012 51.2906068,18.630825 51.2906068,19.2466558 L51.2906068,26.9996561 L51.2910708,26.9996561 Z" />
        </g>
      </Base>
    );
  }
}
