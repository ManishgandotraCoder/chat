import { Badge, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap'
import './style.css'
import React, { useEffect, useRef, useState } from 'react'
import { chatType } from './index.type';
import { useSearchParams } from 'react-router-dom';
import { io } from "socket.io-client";
import { deleteGroup, getGroupById, getGroups, nonGroupMembers, saveGroupInfo, updateGroup } from '../../../redux/actions/group-actions';
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend } from "react-icons/io";
import { getMessages, sendMessage } from '../../../redux/actions/chat-actions';
import moment from "moment"

export const host = "http://localhost:5000";

const ChatContainer = ({ accordianList, callGroups }: chatType) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [chat, setChat] = useState(true);
    const [group, setGroup] = useState('')
    const [search, setSearch] = useState('')

    const scrollRef: any = useRef();
    const [arrivalMessage, setArrivalMessage] = useState({ fromSelf: false, message: '' });
    const messagesData = useSelector((item: any) => item.message)
    const data = useSelector((info: any) => info.group)

    const [messages, setMessages] = useState([]);
    const [msg, setMsg] = useState("");
    const [add, setAdd] = useState(false);
    const [active, setActive] = useState('')
    const dispatch = useDispatch()
    const socket: any = useRef();
    const setActiveState = (name: any) => {
        setActive(name.name)
        setSearchParams({ id: name?._id, name: name.name })
        setChat(true)
    }

    const saveGroup = async () => {
        dispatch(await saveGroupInfo(group))
        dispatch(await getGroups(''))
        setAdd(!add)
        setGroup('')
    }
    const onSearchChange = async (e: string) => {
        setSearch(e)
        callGroups(e)
    }
    const deleteGroupFunction = async (id: string) => {
        await deleteGroup(id)
        callGroups('')
    }

    const getData = async () => {
        dispatch(await getMessages({ group: searchParams.get("id") }))
    }
    useEffect(() => {

    }, [accordianList])


    useEffect(() => {
        socket.current?.on("recieve", (msg: any) => {
            setArrivalMessage({ fromSelf: false, message: msg });
        });
    }, []);
    useEffect(() => {
        getData()
        if (searchParams.get('id')) {
            socket.current = io(host);
            socket.current.emit("add-user", searchParams.get('id'));
        }
        const getCurrentChat = async () => {
            if (searchParams.get("id")) {
                await JSON.parse(
                    localStorage.getItem("user")!
                )?._id;
            }
        };
        getCurrentChat();
    }, [searchParams.get("id")])

    useEffect(() => {
        setMessages(messagesData?.messageList)
    }, [messagesData?.messageList, messagesData?.messageList?.length])

    useEffect(() => {
        arrivalMessage && setMessages((prev): any => [...prev, arrivalMessage]);
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMsg = async (msg: any) => {

        socket.current.emit("send-msg", {
            group: searchParams.get("id"),
            msg,
        });

        dispatch(await sendMessage({ group: searchParams.get("id"), message: msg }))
        const msgs: any = [...messages];
        msgs.push({ fromSelf: true, message: msg });
        setMessages(msgs);
    };




    const sendChat = (event: any) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };
    const updateMembers = async (type: string, ID: string) => {
        dispatch(await updateGroup(searchParams.get('id')!, type, ID));
        dispatch(await getGroupById(searchParams.get('id')!))
        dispatch(await nonGroupMembers(searchParams.get('id')!))
        callGroups()
    }
    const seeGroupInfo = async() => {
        setChat(false)
        dispatch(await nonGroupMembers(searchParams.get('id')!))
        dispatch(await getGroupById(searchParams.get('id')!))
    }
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
                                active={item.name === active}
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
                        <p className='group-heading' onClick={()=>seeGroupInfo()}>{searchParams.get('name')}</p>
                            {chat &&
                                <>
                                    
                                    <div className="chat-back">
                                        {messages.map((message: any) =>
                                            <>
                                                {message.fromSelf ?

                                                    <div className="message sag mtLine">
                                                        <div className="messageText" data-time={moment(message.time).format('HH:MM:SS')}>
                                                            {message.message}
                                                        </div>
                                                        <div className="resim" ></div>
                                                    </div>
                                                    : <div className="message sol">
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
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                        />
                                        <InputGroup.Text id="basic-addon2">
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
                                                {data.groupInfo.members?.map((item: any) =>
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
                                                {data.membersList?.map((item: any) =>
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