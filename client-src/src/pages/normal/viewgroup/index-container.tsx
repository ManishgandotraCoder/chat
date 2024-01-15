import React from "react"
import "./style.css"
import { Accordion, ListGroup, Badge, Row, Col } from "react-bootstrap"
import { updateGroup } from "../../../redux/actions/group-actions"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

const ViewGroupContainer = ({ heading, groupMembers, nongroupMembers }: { heading: string, nongroupMembers: any, groupMembers: any }) => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    const updateMembers = async (type: string, info: string) => {
        let groupId: any = searchParams.get('id')
        dispatch(await updateGroup(groupId, type, info));
    }

    return (<>
        <Row>
            <Col className="col-text">Group Members</Col>
            <Col className="col-text">Add Members to Group</Col>

        </Row>
        <Row>
            <Col className="lister">
                <ul className="list-group">
                    {groupMembers?.map((item: any) =>
                        <li className="list-group-item">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.userId.firstName} {item.userId.lastName}</div>
                                {item.userId.email}
                                <span className="button" onClick={() => updateMembers('rem', item?._id)}>Remove</span>

                                {item.email}

                            </div>

                        </li>
                    )}
                </ul>

            </Col>
            <Col className="lister">
                <ul className="list-group">
                    {nongroupMembers?.map((item: any) =>
                        <li className="list-group-item">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.firstName} {item.lastName}</div>
                                <span className="button" onClick={() => updateMembers('add', item?._id)}>Add</span>

                                {item.email}

                            </div>

                        </li>
                    )}
                </ul>
            </Col>
        </Row>

        <div className="container row ">
            {/* <div className="col-md-6">
                {groupMembers?.map((item: any) => 
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.userId.firstName} {item.userId.lastName}</div>
                            {item.userId.email}
                        </div>
                        <Badge className="badge" onClick={() => updateMembers('rem', item.userId?._id)}>
                            Remove
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                
            )}
            </div>
            <div className="col-md-6 lister">
                {nongroupMembers?.map((item: any) => 
                <ListGroup as="ol" numbered >
                    <ListGroup.Item
                        className="d-flex justify-content-between align-items-start "
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.firstName} {item.lastName}</div>
                            {item.email}
                        </div>
                        <Badge bg="primary" pill onClick={() => updateMembers('add', item?._id)}>
                            Add
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>)}

            </div>    */}
        </div>
    </>)
}
export default ViewGroupContainer