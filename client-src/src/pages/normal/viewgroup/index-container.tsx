import React from "react"
import "./style.css"
import {  Row, Col } from "react-bootstrap"


const ViewGroupContainer = ({ updateMembers, groupMembers, nongroupMembers }: { updateMembers: Function, nongroupMembers: any, groupMembers: any }) => {
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
                    {nongroupMembers?.map((item: any) =>
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
    </>)
}
export default ViewGroupContainer