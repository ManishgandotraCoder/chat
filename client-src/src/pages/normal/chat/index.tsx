import ChatContainer from "./index.container"
import { useDispatch, useSelector } from "react-redux"
import { getMessages, sendMessage } from '../../../redux/actions/chat-actions';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { io } from "socket.io-client";
import { deleteGroup, getGroupById, getGroups, nonGroupMembers, saveGroupInfo, updateGroup } from '../../../redux/actions/group-actions';
import React, { useEffect, useRef, useState } from 'react'
import { logoutChats } from "../../../redux/actions/user-actions";
export const host = "http://localhost:5000";

const ChatComponent = () => {
    const group = useSelector((item: any) => item.group)
    const getGroupData = async (e: any) => {
        dispatch(await getGroups(e))
    }
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const [allFields, setAllFields] = useState({
        search: '',
        active: '',
        chat: true,
        msg: '',
        id: '',
        messages: [],
        add: false,
        group: '',
        sidebar: 'chats'
    })
    const scrollRef: any = useRef();
    const [arrivalMessage, setArrivalMessage] = useState({ fromSelf: false, message: '' });
    const messagesData = useSelector((item: any) => item.message)
    const data = useSelector((info: any) => info.group)
    const dispatch = useDispatch()
    const socket = io(host);

    const setActiveState = (name: any) => {
        setAllFields({ ...allFields, active: name.name, chat: true })
        setSearchParams({ id: name?._id, name: name.name })
    }
    useEffect(() => {


        function onFooEvent(value: any) {
            console.log("onfooo", value);

        }
        socket.on('foo', onFooEvent);

        return () => {
            socket.off('foo', onFooEvent);
        };
        // socket.current?.on("recieve", (msg: any) => {
        //     console.log("inn")
        //     setArrivalMessage({ fromSelf: false, message: msg });
        // });
    }, []);
    const saveGroup = async () => {
        dispatch(await saveGroupInfo(allFields.group))
        dispatch(await getGroups(''))
        setAllFields({ ...allFields, add: !allFields.add, group: '', sidebar: "chats" })
    }
    const onSearchChange = async (e: string) => {
        setAllFields({ ...allFields, search: e })
        getGroupData(e)
    }
    const deleteGroupFunction = async (id: string) => {
        await deleteGroup(id)
        getGroupData('')
    }

    const getData = async () => {

    }

    useEffect(() => {
        let _id: string = searchParams.get("id") || ''
        setAllFields({ ...allFields, id: _id })

        getData()
        if (_id) {
            socket.emit("add-user", _id);
        }
        const getCurrentChat = async () => {
            if (_id) {
                await JSON.parse(
                    localStorage.getItem("user")!
                )?._id;
            }
            dispatch(await getMessages({ group: _id }))
        };
        getCurrentChat();
    }, [searchParams.get("id")])

    useEffect(() => {
        setAllFields({ ...allFields, messages: messagesData?.messageList })

    }, [messagesData?.messageList, messagesData?.messageList?.length])

    // setMessages((prev): any => [...prev, arrivalMessage]);

    useEffect(() => {
        console.log("Arrival mesage")
        // arrivalMessage && 
        // setAllFields(

        //     {...allFields, messages: (prev: string[]): any => [...prev, arrivalMessage]}

        // );
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [allFields.messages]);

    const handleSendMsg = async (msg: any) => {

        // socket.current.emit("send-msg", {
        //     group: allFields.id,
        //     msg,
        // });
        socket.emit('foo', {
            group: allFields.id,
            msg,
        }, () => {
            console.log("in");

        });
        dispatch(await sendMessage({ group: searchParams.get("id"), message: msg }))
        const msgs: any = [...allFields.messages];
        msgs.push({
            fromSelf: true, 
            message: msg,
            profile_pic: await JSON.parse(
                localStorage.getItem("user")!
            )?.profile_pic,
            type :"MESSAGES"
        });
        setAllFields({ ...allFields, messages: msgs, msg: '' });
    };

    const sendChat = (event: any) => {
        event.preventDefault();
        if (allFields.msg.length > 0) {
            handleSendMsg(allFields.msg);
        }
    };
    const updateMembers = async (type: string, ID: string) => {
        dispatch(await updateGroup(allFields.id, type, ID));
        dispatch(await getGroupById(allFields.id))
        dispatch(await nonGroupMembers(allFields.id))
        getGroupData('')
    }
    const seeGroupInfo = async () => {
        setAllFields({ ...allFields, chat: false });

        dispatch(await nonGroupMembers(allFields.id))
        dispatch(await getGroupById(allFields.id))
    }
    const setFields = (id: string, value: string) => {
        setAllFields({ ...allFields, [id]: value })
    }
    useEffect(() => {
        getGroupData('')
        let _id: string = searchParams.get("id") || ''
        setAllFields({ ...allFields, id: _id })
    }, [])
    const _logoutChats = async () => {
        dispatch(await logoutChats())
        localStorage.clear();
        navigate('/')
    }
    return (<ChatContainer
        onSearchChange={onSearchChange}
        seeGroupInfo={seeGroupInfo}
        name={searchParams.get("name")!}
        setActiveState={setActiveState}
        sendChat={sendChat}
        messages={allFields.messages}
        updateMembers={updateMembers}
        accordianList={group.groupList}
        saveGroup={saveGroup}
        fields={{ search: allFields.search, active: allFields.active, chat: allFields.chat, msg: allFields.msg, group: allFields.group, sidebar: allFields.sidebar }}
        members={data.groupInfo.members}
        nonmembers={data.membersList}
        setFields={setFields}
        _logoutChats={_logoutChats}
    />)
}
export default ChatComponent