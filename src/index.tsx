/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import Calculator from './Calculator'

const root = document.getElementById('root')

render(() => <>
<Calculator/>

</>, root!)
