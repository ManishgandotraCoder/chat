import { Form, InputGroup, ListGroup } from 'react-bootstrap'
import './style.css'
import React, { useState } from 'react'
import { chatType } from './index.type';
const Input = React.lazy(() => import("../../../components/input"));

const ChatContainerHelper = ({ changeValues }: chatType) => {
    const [add, setAdd] = useState(false);
    const [groupName, setGroupname] = useState('')
    return (<>
        <form noValidate className="form">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <ListGroup>
                            <ListGroup.Item className='add-group'>
                                {add ? <InputGroup className="mb-3">
                                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                                    <InputGroup.Text onClick={() => setAdd(!add)}>Save</InputGroup.Text>
                                </InputGroup>
                                    : <span onClick={() => setAdd(!add)}>Add Groups</span>}
                            </ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="col-md-9 ">

                    </div>
                </div>
            </div>
        </form>

    </>)
}
export default ChatContainerHelper