import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardMotor from '../components/CardMotor';
import { Modal, Button, Form, FormGroup,FormControl } from 'react-bootstrap';


const ListMotor = () => {
  const URL = "http://localhost:3500/motor"

  const getData = async () => {
    const response = axios.get(URL);

    return response;
  }

  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState([]);
  const [show, setShow] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //const [dataForm, setDataForm] = useState({ refer: "", model: "" });

  const handleChangeModal = ({ target }) => {

    setDataModal({
      ...dataModal,
      [target.name]: target.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
   const response = await axios.put(`${URL}/${dataModal.id}`,dataModal)
   console.log(response);
   handleClose();
   setUpdateList(!updateList)

  }

  useEffect(() => {
    getData()
      .then((response) => {

        setList(response.data);

      });
  }, [updateList])

  return (
    <div>
      {
        list.map((motorbike, index) => (

          <CardMotor
            key={index}
            motorbike={motorbike}
            setUpdateList={setUpdateList}
            updateList={updateList}
            handleClose={handleClose}
            handleShow={handleShow}
            setDataModal={setDataModal}
          />
        ))
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Güncelle
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>

            <Form.Group className='mb-3'>
              <Form.Control
                type="text"
                placeholder="Refer"
                name="refer"
                value={dataModal.refer}
                onChange={handleChangeModal}
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                type="text"
                placeholder="Model"
                name="model"
                value={dataModal.model}
                onChange={handleChangeModal}
              />
            </Form.Group>
          </Modal.Body>
        </Form>

        <Modal.Footer>
          <Button variant="secondary" type='reset' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} type="submit">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ListMotor