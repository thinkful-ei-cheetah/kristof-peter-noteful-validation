import React from 'react'
import './NotefulForm.css'
import NoteContext from '../NoteContext'
import API from '../App/API';
import {withRouter} from 'react-router';


export default withRouter(function NotefulForm(props) {
    console.log(props);
  const { className,children, ...otherProps } = props
  async function handleSubmit(e, data ) {
    e.preventDefault();

    if (props.type === 'folders'){
      console.log(props)
      await API.apiPost({ datum:{name:data.folderName, }, type:props.type})
      await data.updateState();
      props.history.push(`/`);
    }
    else

    await API.apiPost({ datum:{name:data.noteNameInput, content:data.noteContentInput,folderId:data.noteFolderSelect,modified:Date.now() ,}, type:'notes'})
    await data.updateState();
    console.log(data.noteFolderSelect)
    props.history.push(`/folder/${data.noteFolderSelect}`);
  }
  return (
    <NoteContext.Consumer>
      {(data)=>{
      
      return(<form
      className={['Noteful-form', className].join(' ')}
      action='#'
      onSubmit={(e) => handleSubmit(e,data)}
      {...otherProps}>
      
      {data.error ? <div>Field cannot be blank</div> :''}
      {children}
        </form>
      )}}
  

  </NoteContext.Consumer>
  )
})
