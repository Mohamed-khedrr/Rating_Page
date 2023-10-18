import { useSelector } from "react-redux";
import MobileImage from "./moblieImg";
const ThanksSlide = () => {
    let state = useSelector(state => state.rating)
    return (
        <section className="d-flex flex-column text-center justify-content-center align-items-center my-3">
            <MobileImage />
            <img src="../images/favicon-32x32.png" alt="" />
            <h6 className="selection-description rounded-pill px-3 py-1 my-4">You Selected {state} out of 5 </h6>
            <h3 className="text-light">Thank you!</h3>
            <p>We appreciate you taking the time to give a rating if you ever need  more support,
                don't hesitate to get in touch!</p>
        </section>
    )
}


export default ThanksSlide;