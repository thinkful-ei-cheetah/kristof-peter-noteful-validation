import React from 'react'
import './NotefulForm.css'
import NoteContext from '../NoteContext'

export default function NotefulForm(props) {

  const { className,children, ...otherProps } = props
  return (
    <NoteContext.Consumer>
      {(data)=>{
      
      return(<form
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}>
      
      {data.error ? <div>Field cannot be blank</div> :''}
      {children}
        </form>
      )}}
  

  </NoteContext.Consumer>
  )
}
