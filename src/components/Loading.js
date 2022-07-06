import React from 'react'

const Loading = () => {
   return (
      <div
         style={{
            width: '50px',
            marginLeft: '50%',
            marginTop: '10%'
         }}
      >
         <img
            src={require('../img/loading.gif')}
            alt="Loading..."
            style={{ height: '', width: '100%' }}
         />
      </div>
   )
}

export default Loading
