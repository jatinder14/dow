import line from "../../../public/line.png";
import flower from "../../../public/flower.png";

export function MessageProgress() {
   return(
        <div className="MessageProgress col-3">
            <img src={flower} alt="" className="flower"/>
            <img src={line} alt=""  className="line"/>
        </div>
    )
}