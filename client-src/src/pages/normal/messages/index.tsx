import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import './style.css'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, sendMessage } from "../../../redux/actions/chat-actions";



export default function ChatContainer({ currentChat, socket }: any) {
  const [messages, setMessages] = useState([]);
  const scrollRef: any = useRef();
  const dispatch = useDispatch()
  const [arrivalMessage, setArrivalMessage] = useState({ fromSelf: false, message: '' });
  const [searchParams, setSearchParams] = useSearchParams();
  const messagesData = useSelector((item: any) => item.message)
  console.log(messagesData.messageList);


  const getData = async () => {
    dispatch(await getMessages({ group: searchParams.get("id") }))
  }
  useEffect(() => {
    getData()
  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          localStorage.getItem("user")!
        )?._id;
      }
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMsg = async (msg: any) => {

    socket?.current.emit("send-msg", {
      group: searchParams.get("id"),
      msg,
    });

    dispatch(await sendMessage({ group: searchParams.get("id"), message: msg }))
    const msgs: any = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket?.current) {
      socket.current.on("msg-recieve", (msg: any) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    // setMessages({messages, arrivalMessage);

    // arrivalMessage && setMessages((prev:any) => {
    //     // [...prev, arrivalMessage]
    //     console.log(prev);

    // });
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>

      <div className="chat-messages">
        {messagesData.messageList.map((message: any) => {

          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${message.fromSelf ? "sended" : "recieved"
                  }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </>
  );
}

