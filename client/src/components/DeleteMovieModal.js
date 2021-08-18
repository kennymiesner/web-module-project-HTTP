import React from 'react'
import { Link } from 'react-router-dom'

const DeleteMovieModal = () => {

  // const handleDelete = e => {
  //   e.preventDefault()
  //   props.deleteMovie(id)
  //   push('/movies')
  // }

  return (
    <div id="deleteMovieModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">						
              <h4 className="modal-title">Delete Movie</h4>
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times</button>
            </div>
            <div className="modal-body">					
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning"><small>This action cannot be undone.</small></p>
            </div>
            <div className="modal-footer">
              <Link to={`/movies/`}><input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/></Link>
              <input type="submit" className="btn btn-danger" value="Delete"/>
            </div>
          </form>
        </div>
      </div>
    </div>)
}

export default DeleteMovieModal
