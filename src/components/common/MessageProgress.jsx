import line from "../../../public/line.png";
import flower from "../../../public/flower.png";
import Card from 'react-bootstrap/Card';
import jump from "../../../public/jump.png";
import { MessageDate } from "./MessageDate";
import { MessageFirstState } from "./MessageFirstState";
import { MessageGeneralState } from "./MessageGeneralState";

export function MessageProgress() {
    return (
        <>
            <div className="notification-container col-4">

                <div className="message-state">

                    {[
                        'Dark',
                    ].map((variant) => (
                        <Card
                            bg={variant.toLowerCase()}
                            key={variant}
                            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                            style={{ width: '100%' }}
                            className="mb-2 message-state"
                        >
                            <Card.Header className="pd-2 pt-3 px-3 m-0 card-header" ><h5 className="mb-0 proposal-detail-text">Proposal History</h5></Card.Header>
                            <MessageFirstState state={'Pending'} />
                            <MessageGeneralState state={'Queued'} />
                            <MessageGeneralState state={'Active'} />
                            <Card.Body style={{ 'display': 'flex', 'margin': '-31px 0px 0px 0px', 'padding': '0px 0px 30px 0px' }}>
                                <div className="MessageProgress col-2">
                                    <img src={flower} alt="" className="flower" />
                                </div>
                                <div className="message-detail mt-3 col-10">
                                    <div className="state">
                                        <Card.Title className="mb-0">Executed</Card.Title>
                                        <img src={jump} style={{ 'width': '20px' }} className="mx-2" />
                                    </div>
                                    <MessageDate></MessageDate>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}