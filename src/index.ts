const pid = process?.pid?.toString( 36 ) ?? ''
const address: string = require && module?.exports ? require( './address' ) : ''

const uid = ( prefix = '', suffix = '' ) =>
  `${prefix}${address}${pid}${now().toString( 36 )}${suffix}`

uid.process = ( prefix = '', suffix = '' ) =>
  `${prefix}${pid}${now().toString( 36 )}${suffix}`
0
uid.time = ( prefix = '', suffix = '' ) =>
  `${prefix}${now().toString( 36 )}${suffix}`

let last: number

const now = () => {
  const time = Date.now()
  last = last ?? time
  return last = time > last ? time : last + 1
}

namespace uid {}

export default uid
