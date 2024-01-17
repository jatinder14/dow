import line from "../../../public/line.png";
import flower from "../../../public/flower.png";
import Card from 'react-bootstrap/Card';
import jump from "../../../public/jump.png";


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
                            className="mb-2"
                        >
                            <Card.Header className="py-1 px-2 m-0" ><h5>Proposal History</h5></Card.Header>
                            <Card.Body style={{ 'display': 'flex', 'padding': '0' }}>
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                    <img src={line} alt="" className="line" />
                                </div>
                                <div className="message-detail mt-3">
                                    <div className="state">

                                        <Card.Title>Pending</Card.Title>
                                        <img src={jump} style={{ 'width': '20px' }} className="mx-2" />
                                    </div>
                                    <Card.Text>
                                        <span className="date-time">{"02-11-2023 09:58:28"}</span>
                                    </Card.Text>
                                </div>

                            </Card.Body>
                            <Card.Body style={{ 'display': 'flex', 'margin': '-77px 0px', 'padding': '30px 0' }}>
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                    <img src={line} alt="" className="line" />
                                </div>
                                <div className="message-detail mt-3">

                                    <Card.Title>Active</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                </div>

                            </Card.Body>
                            <Card.Body style={{ 'display': 'flex' }}>
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                    <img src={line} alt="" className="line" />
                                </div>
                                <div className="message-detail mt-3">

                                    <Card.Title>Pending</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                </div>

                            </Card.Body>
                            <Card.Body style={{ 'display': 'flex', 'margin': '-77px 0px' }}>
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                    <img src={line} alt="" className="line" />
                                </div>
                                <div className="message-detail mt-3">

                                    <Card.Title>Active</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                </div>

                            </Card.Body>
                            <Card.Body style={{ 'display': 'flex' }}>
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                    <img src={line} alt="" className="line" />
                                </div>
                                <div className="message-detail mt-3">

                                    <Card.Title>Queued</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                </div>

                            </Card.Body>
                            <Card.Body style={{ 'display': 'flex', 'margin': '-77px 0px 0 0' }} >
                                <div className="MessageProgress ">
                                    <img src={flower} alt="" className="flower" />
                                </div>
                                <div className="message-detail mt-3">

                                    <Card.Title>Executed</Card.Title>
                                    {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                </div>

                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}