import { Badge, Form, InputGroup, ListGroup } from 'react-bootstrap'
import './style.css'
import React, { useState } from 'react'
import { chatType } from './index.type';
import Toolbar from '../../../components/toolbar';
import { useSearchParams } from 'react-router-dom';


const ChatContainerHelper = ({ changeValues, accordianList }: chatType) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [add, setAdd] = useState(false);
    const [active, setActive] = useState('')
    const setActiveState = (name: any) => {
        setActive(name.name)
        setSearchParams({ id: name._id, name: name.name })
    }
    return (<>
        <form noValidate className="form">
            <div className="row">
                <div className="col-md-3">

                    <ListGroup >
                        <ListGroup.Item>{add ? <InputGroup className="mb-3">
                            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                            <InputGroup.Text onClick={() => setAdd(!add)}>Save</InputGroup.Text>
                        </InputGroup>
                            : <span onClick={() => setAdd(!add)}>Add Groups</span>}</ListGroup.Item>
                        {accordianList.map((item: any) => <ListGroup.Item
                            active={item.name === active}
                            as="li"

                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto" onClick={() => setActiveState(item)}>
                                <div className="fw-bold">{item.name}</div>
                                {item.members.length} members
                            </div>
                            {/* <Badge bg="primary" pill>
                                14
                            </Badge> */}
                        </ListGroup.Item>)}

                    </ListGroup>
                </div>
                <div className="col-md-9 ">
                    <div className='border'>
                        <Toolbar logout={false} heading={active} background="#FFF" />
                        <div className='chatbg'>

                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>)
}
export default ChatContainerHelper