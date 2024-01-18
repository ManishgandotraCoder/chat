import { Badge, Form, InputGroup, ListGroup } from 'react-bootstrap'
import './style.css'
import React, { useEffect, useRef, useState } from 'react'
import { chatType } from './index.type';
import { useSearchParams } from 'react-router-dom';
import ViewGroup from '../viewgroup';
import { io } from "socket.io-client";
import { useDispatch } from 'react-redux';
import { deleteGroup, getGroups, saveGroupInfo } from '../../../redux/actions/group-actions';
import MessageComponent from '../messages';
export const host = "http://localhost:5000";

const ChatContainer = ({ accordianList, callGroups }: chatType) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [chat, setChat] = useState(true);
    const [group, setGroup] = useState('')
    const [search, setSearch] = useState('')


    const [add, setAdd] = useState(false);
    const [active, setActive] = useState('')
    const dispatch = useDispatch()
    const socket: any = useRef();
    const setActiveState = (name: any) => {
        setActive(name.name)
        setSearchParams({ id: name?._id, name: name.name })
    }
    useEffect(() => {

    }, [accordianList])

    useEffect(() => {
        if (searchParams.get('id')) {
            socket.current = io(host);
            socket.current.emit("add-user", searchParams.get('id'));
        }
    }, [searchParams.get('id')]);
    const saveGroup = async () => {
        dispatch(await saveGroupInfo(group))
        dispatch(await getGroups(''))

    }
    const onSearchChange = async (e: string) => {
        setSearch(e)
        callGroups(e)
    }
    const deleteGroupFunction = async (id: string) => {

        await deleteGroup(id)
        callGroups('')
    }
    return (<>
        <form noValidate className="form">
            <div className="row">
                <div className="col-md-3">
                    <ListGroup >
                        <ListGroup.Item
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
                        </ListGroup.Item>

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
                                onClick={() => setActiveState(item)}
                                className="d-flex justify-content-between align-items-start"
                            >
                                <div className="ms-2 me-auto" >
                                    <div className="fw-bold">{item.name}</div>
                                    {item.members.length} members
                                </div>
                                <span className='eye' onClick={() => setChat(!chat)}>👁</span>
                                <span className='eye' onClick={() => deleteGroupFunction(item._id)}>🗑</span>

                            </ListGroup.Item>)}

                    </ListGroup>
                </div>
                <div className="col-md-9 ">
                    <div className='border'>
                        <div className='chatbg'>
                            {chat &&
                                <MessageComponent socket={socket} id={searchParams.get("id")} /> ||
                                <ViewGroup callGroups={callGroups} />}
                        </div>
                    </div>
                </div>
            </div>
        </form>

    </>)
}
export default ChatContainer