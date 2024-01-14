import { Badge, Form, InputGroup, ListGroup } from 'react-bootstrap'
import './style.css'
import React, { useState } from 'react'
import { chatType } from './index.type';
import Toolbar from '../../../components/toolbar';
import { useSearchParams } from 'react-router-dom';
import ViewGroup from '../viewgroup';
import MessageComponent from '../messages';


const ChatContainerHelper = ({ changeValues, accordianList }: chatType) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [chat, setChat] = useState(true)
    const [add, setAdd] = useState(false);
    const [active, setActive] = useState('')
    const setActiveState = (name: any) => {
        setActive(name.name)
        setSearchParams({ id: name?._id, name: name.name })
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
                            onClick={() => setActiveState(item)}
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto" >
                                <div className="fw-bold">{item.name}</div>
                                {item.members.length} members
                            </div>
                            <span className='eye' onClick={()=>setChat(!chat)}>👁</span>

                        </ListGroup.Item>)}

                    </ListGroup>
                </div>
                <div className="col-md-9 ">
                    <div className='border'>
                        <div className='chatbg'>
                            {chat && <MessageComponent /> || <ViewGroup heading={active}  />}


                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>)
}
export default ChatContainerHelper