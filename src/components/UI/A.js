import React from 'react'
import B from './B';

export default function A(props) {
    console.log(props);
  return (
    <>
    <div>A Server side components</div>
    <B />

    </>
  )
}
