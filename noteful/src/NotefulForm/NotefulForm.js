import React from 'react'
import './NotefulForm.css'
import NoteContext from '../NoteContext'

export default function NotefulForm(props) {

  const { className, ...otherProps } = props
  return (
    <NoteContext.Consumer>
      {(data)=>{
      
      return(<form
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps} 
      {...data.error}
      />
      // {data.error ? <div>You have error fool</div> :''}
      //   </form>
      )}}
   

  </NoteContext.Consumer>
  )
}
