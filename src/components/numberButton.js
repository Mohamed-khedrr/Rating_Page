import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../redux/store";

const NumberButton = (props) => {

    const rate = useSelector(state => state.rating)
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() =>
                dispatch(setRating(props.number))
            }
                className={`${rate === props.number ? 'active' : ''} rounded-circle text-light number-btn d-flex justify-content-center align-items-center`}>
                {props.number}
            </button >
        </>
    )
}

export default NumberButton;