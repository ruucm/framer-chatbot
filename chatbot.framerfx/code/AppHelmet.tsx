import * as React from 'react'
import { PropertyControls, ControlType } from 'framer'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import * as smoothscroll from 'smoothscroll-polyfill'

// kick off the smoothscroll polyfill!
smoothscroll.polyfill()

const GlobalStyle = createGlobalStyle`

  .slider-desc {
    /* font styles */
    span[data-text='true'] {
      font-family: 'Spoqa Han Sans';
      font-weight: bold;
      line-height: 1.22;
      font-size: 11.75px;
      /* white-space: nowrap; */
    }
    /* vertically center */
    div[data-contents='true'] {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

// Define type of property
interface Props {}

const helmet = (
  <Helmet>
    {/* ko - spoqa-han-sans */}
    <link
      href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"
      rel="stylesheet"
      type="text/css"
    />
  </Helmet>
)

export class AppHelmet extends React.Component<Props> {
  // Set default properties
  static defaultProps = {}

  // Items shown in property panel
  static propertyControls: PropertyControls = {}

  render() {
    return (
      <div>
        {helmet}
        <GlobalStyle />
      </div>
    )
  }
}
