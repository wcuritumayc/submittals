import { useState } from 'react';
import ReactDOM from 'react-dom';
import './SubmittalModal.css';

const Modal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const [status, setStatus] = useState([]);
  const [id, setId] = useState('');
  const [spec, setSpec] = useState('');
  const [revision, setRevision] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState([]);
  const [priority, setPriority] = useState([]);
  const [dueDate, setDueDate] = useState('');
  const [ballInCourt, setBallInCourt] = useState('');
  const [address, setAddress] = useState('');

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3 className='modal-title'>Create Item</h3>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <hr />
        <div className="modal-body">
          <form onSubmit={(e) => {
            e.preventDefault();
            debugger
            const formData = {
              "status": status,
              "id": id,
              "spec": spec,
              "revision": revision,
              "title": title,
              "type": type,
              "priority": priority,
              "dueDate": dueDate,
              "ballInCourt": ballInCourt,
              "address": address
            };
            console.log("formData", formData);
            onSubmit(formData);
            onClose();
          }
          }>
            <div className="form-group">
              <label>Status:</label>
              <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="inProgress">In Progress</option>
                <option value="pending">Pending</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div className="form-group">
              <label>Nro. Item:</label>
              <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Specification:</label>
              <input type="text" value={spec} onChange={(e) => setSpec(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Revision:</label>
              <input type="number" value={revision} onChange={(e) => setRevision(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Title:</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Type:</label>
              <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="typeA">Type A</option>
                <option value="typeB">Type B</option>
                <option value="typeC">Type C</option>
              </select>
            </div>
            <div className="form-group">
              <label>Priority:</label>
              <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div className="form-group">
              <label>Due Date:</label>
              <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Ball In Court:</label>
              <input type="text" value={ballInCourt} onChange={(e) => setBallInCourt(e.target.value)}/>
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/>
            </div>
            
            <div className="modal-footer">
              <button onClick={onClose}>Cancel</button>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
