import line from "../../../public/line.png";
import flower from "../../../public/flower.png";
import Card from 'react-bootstrap/Card';
import jump from "../../../public/jump.png";
import { MessageDate } from "./MessageDate";


export const MessageGeneralState = ({ state, date, redirect }) => (
    <>
        <div style={{ 'display': 'flex', 'margin': '-31px 0px 0px 0px', 'padding': '0px 0' }}>
            <div className="MessageProgress col-2">
                <img src={flower} alt="" className="flower" />
                <img src={line} alt="" className="line" />
            </div>
            <div className="message-detail mt-3 col-10">
                <div className="state">
                    <h5 className="mb-0">{state}</h5>
                    <img src={jump} style={{ 'width': '20px' }} className="mx-2" />
                </div>
                <MessageDate></MessageDate>
            </div>
        </div>
    </>

)