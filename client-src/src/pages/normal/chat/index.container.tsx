import { Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap'
import './style.css'
import { IoMdSend } from "react-icons/io";
import moment from "moment"
import { useEffect, useRef } from 'react';
import groupIcon from "../../../icons/group.png"
import messagesIcon from "../../../icons/messages.jpg"
import profileIcon from "../../../icons/profile.svg"
import ButtonComponent from '../../../components/button';

const ChatContainer = ({ _logoutChats, accordianList, onSearchChange, seeGroupInfo, updateMembers, messages, fields, setActiveState, members, sendChat, nonmembers, setFields, saveGroup, name }: {
    onSearchChange: Function,
    seeGroupInfo: Function,
    updateMembers: Function,
    accordianList: [],
    messages: string[],
    fields: {
        search: string,
        active: string,
        chat: boolean,
        msg: string,
        group: string,
        sidebar: string
    },
    setActiveState: Function,
    members: [],
    sendChat: Function,
    nonmembers: [],
    setFields: Function,
    saveGroup: Function,
    _logoutChats: Function,
    name: string
}) => {
    const scrollRef: any = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {

    }, [fields.group, name])
    return (<>

        <div className="row2">
            <div className="col-md-3 ">
                <div className="row2 rowpad">
                    <img onClick={() => setFields('sidebar', 'profile')} style={{ height: "45px", width: "45px", borderRadius: "50px", }} src={JSON.parse(localStorage.getItem('user')!).profile_pic || profileIcon} />
                    <img onClick={() => setFields('sidebar', 'chats')} style={{ height: "45px", marginLeft: "10px", padding: "5px" }} src={messagesIcon} />
                    <img onClick={() => setFields('sidebar', 'group')} style={{ height: "40px", marginLeft: "10px", padding: "5px" }} src={groupIcon} />
                </div>
                <span className='header-side-nav'>{fields.sidebar}</span>
                {fields.sidebar === 'chats' && <div  >
                        
                        <ListGroup >

                            {accordianList.map((item: any) =>
                                <ListGroup.Item
                                    active={item.name === fields.active}
                                    as="li"
                                    key={item._id}
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
                </div>}
                {fields.sidebar === 'group' && <div style={{ padding: "10px" }}>

                        &nbsp;Owner<br />
                        <InputGroup className="mb-3">
                            <Form.Control
                                disabled
                                value={JSON.parse(localStorage.getItem('user')!).firstName + JSON.parse(localStorage.getItem('user')!).lastName}
                                placeholder='Enter group name' />
                            {/* <InputGroup.Text onClick={() => saveGroup()}><span className="add-group" >Save</span></InputGroup.Text> */}
                        </InputGroup>
                        &nbsp;Group Name
                        <InputGroup className="mb-3">
                            <Form.Control
                                value={fields.group}
                                onChange={(e) => setFields("group", e.target.value)}
                                placeholder='Enter group name' />
                            {/* <InputGroup.Text onClick={() => saveGroup()}><span className="add-group" >Save</span></InputGroup.Text> */}
                        </InputGroup>
                        <ButtonComponent theme="outline-dark" handleSubmit={saveGroup} title={'SAVE'} />
                </div>}
                {fields.sidebar === 'profile' && <>
                    <center><img style={{ height: "150px", width: "150px", borderRadius: "50%", marginTop: "30px" }} src={JSON.parse(localStorage.getItem('user')!).profile_pic || profileIcon} /></center>
                    <center>{JSON.parse(localStorage.getItem('user')!).firstName} {JSON.parse(localStorage.getItem('user')!).lastName}</center>
                    <center className='profile-text'>Email : {JSON.parse(localStorage.getItem('user')!).email}</center>
                    <center className='profile-text'>Phone Number : {JSON.parse(localStorage.getItem('user')!).phone}</center>

                    <center className='profile-text-logout' onClick={() => _logoutChats()}>Logout</center>
                </>}

            </div>


            <div className="col-md-9">
                <div className=''>
                    <div >
                        <p className='group-heading' onClick={() => seeGroupInfo()}>{name}</p>
                        {fields.chat &&
                            <>
                                <div className="chat-back" >
                                    {messages.map((message: any) =>
                                        <>
                                            {message.type === "MESSAGES" ? (message.fromSelf ?

                                                <div key={message._id} ref={scrollRef} className="message sag mtLine">
                                                    <div className="messageText" data-time={moment(message.time).format('HH:MM:SS')}>
                                                        {message.message}
                                                        <img className='chat-pic' src={message.profile_pic} />
                                                    </div>
                                                    <div className="resim" ></div>
                                                </div>
                                                : <div key={message._id} ref={scrollRef} className="message sol">
                                                    <div className="resim" >
                                                    </div>
                                                    <div className="messageText-received" data-time={moment(message.time).format('HH:MM:SS')}>
                                                        <img className='chat-pic' src={message.profile_pic} />
                                                        {message.message}
                                                    </div>
                                                </div>) :
                                                <div key={message._id} ref={scrollRef} className="message_center">
                                                    <div className="messageText">
                                                        {message.message + ' on ' + moment(message.time).format('HH:MM:SS')}

                                                    </div>

                                                </div>}


                                        </>
                                    )}

                                </div>
                            </> ||
                            <div className="chat-back" >
                                <Row>
                                    <Col className="col-text">Group Members</Col>
                                    <Col className="col-text">Add Members to Group</Col>

                                </Row>
                                <Row>
                                    <Col className="lister">
                                        <ul className="list-group">
                                            {members?.map((item: any) =>
                                                <li className="list-group-item" key={item._id}
                                                >
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
                                                <li className="list-group-item" key={item._id}>
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
                            </div>}
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer">
            <div className="row2">
                <div className="col-md-3">
                    <InputGroup>
                        <Form.Control
                            value={fields.search}
                            onChange={(e: any) => onSearchChange(e.target.value)}
                            placeholder='Search ' />
                    </InputGroup>

                </div>
                <div className="col-md-9">
                    <InputGroup >
                        <Form.Control
                            placeholder="Type your message"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            type="text"
                            value={fields.msg}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    sendChat(e)
                                }
                            }}
                            onChange={(e) => setFields("msg", e.target.value)}
                        />
                        <InputGroup.Text id="basic-addon2" onClick={(e) => sendChat(e)}>
                            <IoMdSend />
                        </InputGroup.Text>
                    </InputGroup>
                </div>
            </div>

        </footer>

    </>)
}
export default ChatContainer