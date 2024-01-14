import React from "react"
import "./style.css"
import { Accordion, ListGroup, Badge } from "react-bootstrap"
import { updateGroup } from "../../../redux/actions/group-actions"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

const ViewGroupContainer = ({ heading, groupMembers, nongroupMembers }: { heading: string, nongroupMembers: any, groupMembers: any }) => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    
    const updateMembers = async(type: string, info: string ) => {
        let groupId: any = searchParams.get('id')
          dispatch( await updateGroup(groupId, type, info));
    }

    return (<>

        <div className="card bg-light cards" style={{ height: "70vh" }}>
            <div className="card-header">{heading}</div>
            <div className="card-body">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Group Members</Accordion.Header>
                        <Accordion.Body>
                            {groupMembers?.map((item: any) => <ListGroup as="ol" numbered>
                                <ListGroup.Item
                                    as="li"
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item.userId.firstName} {item.userId.lastName}</div>
                                        {item.userId.email}
                                    </div>
                                    <Badge bg="primary" pill onClick={()=> updateMembers('rem', item.userId._id)}>
                                        Remove Member
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>)}

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Add Members</Accordion.Header>
                        <Accordion.Body>
                            {nongroupMembers?.map((item: any) => <ListGroup as="ol" numbered>
                                <ListGroup.Item
                                    className="d-flex justify-content-between align-items-start"
                                >
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{item.firstName} {item.lastName}</div>
                                        {item.email}
                                    </div>
                                    <Badge bg="primary" pill onClick={()=> updateMembers('add', item._id)}>
                                        Add Member
                                    </Badge>
                                </ListGroup.Item>
                            </ListGroup>)}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    </>)
}
export default ViewGroupContainer