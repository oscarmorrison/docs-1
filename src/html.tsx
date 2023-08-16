import PropTypes from 'prop-types'
import React from 'react'

const HTML = (props: any) => {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        {/* OneTrust Cookies Consent Notice start for prisma.io  */}

        <script
          src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
          data-document-language="true"
          type="text/javascript"
          charSet="UTF-8"
          data-domain-script="22c2e2c0-3df0-4958-8672-1194370ee230"
        />
        <script type="text/javascript">function OptanonWrapper() {}</script>
        {/* OneTrust Cookies Consent Notice end for prisma.io */}
        <script src="https://cdn.jsdelivr.net/npm/darkreader@4.9.58/darkreader.min.js" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: 'DarkReader.auto({brightness: 100,contrast: 90,sepia: 10});',
          }}
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
