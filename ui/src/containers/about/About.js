import React from 'react'
import { RedocStandalone } from 'redoc';


const About = () => (
  <div>
<RedocStandalone
  specUrl="http://rebilly.github.io/RebillyAPI/openapi.json"
  options={{
    nativeScrollbars: true,
    theme: { colors: { primary: { main: '#dd5522' } } },
  }}
/>

    <h1>About Page</h1>
    <p>Coming Soon!</p>
  </div>
)

export default About
