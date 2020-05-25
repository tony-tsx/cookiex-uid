import os from 'os'

export = parseInt(
  Object.values( os.networkInterfaces() )
    .flat( 1 )
    .find( networkInterface => networkInterface.mac !== '00:00:00:00:00:00' )
    .mac?.replace( /:|\D+/gi, '' ) || '0'
).toString( 36 )
