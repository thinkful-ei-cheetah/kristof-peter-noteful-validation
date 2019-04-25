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
      {data.error ? <div>You have error fool</div> :'test'}
      {children}
        </form>
      )}}
   

  </NoteContext.Consumer>
  )
}
