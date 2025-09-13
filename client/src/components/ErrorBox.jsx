import React from 'react'

function ErrorBox({errorMessage}) {
  return (
    <div className='flex transition-all items-center px-2 py-2 my-2 h-8 bg-gray-100/50 w-full animate-bounce  border border-gray-200 rounded'>
        <h1>❌ {errorMessage}</h1>
    </div>
  )
}

export default ErrorBox
