import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoMdSend } from "react-icons/io";
import React, { useState } from "react";

export default function ChatInputMessage({ handleSendMsg }: any) {
  const [msg, setMsg] = useState("");
 
  const sendChat = (event:any) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };
  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type your message"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="text"
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
            />
        <InputGroup.Text id="basic-addon2">
        <button type="submit" onClick={(event) => sendChat(event)}>
          <IoMdSend />
        </button>
        </InputGroup.Text>
      </InputGroup>


    </>
  );
}
