import { Badge, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap'
import './style.css'
import { chatType } from './index.type';
import { IoMdSend } from "react-icons/io";
import moment from "moment"
import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';


const ChatContainer = ({ accordianList , onSearchChange , seeGroupInfo , updateMembers, messages , fields , setActiveState, members, sendChat, nonmembers, setFields}: {
    onSearchChange : Function,
    seeGroupInfo : Function,
    updateMembers: Function, 
    accordianList: [],
    messages: string[],
    fields: {
        search: string,
        active: string,
        chat: boolean, 
        msg: string
    },
    setActiveState: Function,
    members: [],
    sendChat: Function,
    nonmembers: [],
    setFields: Function
}) => {
    const scrollRef: any = useRef();
    const [searchParams, setSearchParams] = useSearchParams();

    const {search} = fields
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (<>
        <form noValidate className="form">
            <div className="row">
                <div className="col-md-3">
                    <ListGroup >
                        {/* <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            {add ? <InputGroup className="mb-3">
                                <Form.Control
                                    value={group}
                                    onChange={(e: any) => setGroup(e.target.value)}
                                    placeholder='Enter group name' />
                                <InputGroup.Text onClick={() => saveGroup()}><span className="add-group" >Save</span></InputGroup.Text>
                            </InputGroup>
                                : <button className="button-green" onClick={() => setAdd(!add)}>Add Group</button>

                            }
                        </ListGroup.Item> */}

                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    value={search}
                                    onChange={(e: any) => onSearchChange(e.target.value)}
                                    placeholder='Search group name' />
                            </InputGroup>
                        </ListGroup.Item>


                        {accordianList.map((item: any) =>
                            <ListGroup.Item
                                active={item.name === fields.active}
                                as="li"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setActiveState(item)}
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto" >
                                    <div className="fw-bold">{item.name}</div>
                                    {item.members.length} members
                                </div>
                                {/* <span className='eye' onClick={() => setChat(false)}>👁</span> */}
                                {/* <span className='eye' onClick={() => deleteGroupFunction(item._id)}>🗑</span> */}

                            </ListGroup.Item>)}

                    </ListGroup>
                </div>
                <div className="col-md-9 ">
                    <div className='border'>
                        <div className='chatbg'>
                            <p className='group-heading' onClick={() => seeGroupInfo()}>{searchParams.get('name')}</p>
                            {fields.chat &&
                                <>

                                    <div className="chat-back" >
                                        {messages.map((message: any) =>
                                            <>
                                                {message.fromSelf ?

                                                    <div ref={scrollRef} className="message sag mtLine">
                                                        <div className="messageText" data-time={moment(message.time).format('HH:MM:SS')}>
                                                            {message.message}
                                                        </div>
                                                        <div className="resim" ></div>
                                                    </div>
                                                    : <div ref={scrollRef} className="message sol">
                                                        <div className="resim" >
                                                        </div>
                                                        <div className="messageText" data-time={moment(message.time).format('HH:MM:SS')}>
                                                            {message.message}
                                                        </div>
                                                    </div>}


                                            </>
                                        )}

                                    </div>
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            placeholder="Type your message"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            type="text"
                                            value={fields.msg}
                                            onChange={(e) => setFields("msg",e.target.value)}
                                        />
                                        <InputGroup.Text id="basic-addon2" onClick={(e)=>sendChat(e)}>
                                            <IoMdSend />
                                        </InputGroup.Text>
                                    </InputGroup></> ||
                                <>
                                    <Row>
                                        <Col className="col-text">Group Members</Col>
                                        <Col className="col-text">Add Members to Group</Col>

                                    </Row>
                                    <Row>
                                        <Col className="lister">
                                            <ul className="list-group">
                                                {members?.map((item: any) =>
                                                    <li className="list-group-item">
                                                        <div className="ms-2 me-auto">
                                                            <div ><b>{item.userId.firstName} {item.userId.lastName} </b>
                                                                <i>
                                                                    ( {item.userId.email} )
                                                                </i>
                                                                <button className="button" onClick={() => updateMembers('rem', item?.userId?._id)}>Remove</button>
                                                            </div>
                                                            {item.email}
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>

                                        </Col>
                                        <Col className="lister">
                                            <ul className="list-group">
                                                {nonmembers?.map((item: any) =>
                                                    <li className="list-group-item">
                                                        <div className="ms-2 me-auto">
                                                            <div ><b>{item.firstName} {item.lastName} </b>
                                                                <i>
                                                                    ( {item.email} )
                                                                </i>
                                                                <button className="button-green" onClick={() => updateMembers('add', item?._id)}>Add</button>
                                                            </div>
                                                        </div>

                                                    </li>
                                                )}
                                            </ul>
                                        </Col>
                                    </Row>
                                </>}
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>)
}
export default ChatContainer