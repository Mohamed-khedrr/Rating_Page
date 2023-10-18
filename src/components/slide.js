import { isSubmitted } from "../redux/store";
import NumberButton from "./numberButton";
import Star from "./star"
import { useDispatch, useSelector } from 'react-redux';

const Slide = () => {
    let submitted = useSelector(state => state.submission);
    let rating = useSelector(state => state.rating)
    const dispatch = useDispatch();

    return (
        <>
            <Star />
            <h2 className='text-light mt-3'>How did we do ?</h2>
            <p >please let us know how we did with
                your support to help us improve our offering!</p>
            <div className='numbers-container d-flex justify-content-between my-3'>
                <NumberButton number={1} />
                <NumberButton number={2} />
                <NumberButton number={3} />
                <NumberButton number={4} />
                <NumberButton number={5} />
            </div>
            <button onClick={() => dispatch(isSubmitted(true))} disabled={!rating} className={`sub-btn rounded-pill  border-0 mt-3 ${!rating ? 'sub-disabled' : ''}`}>Submit</button>
        </>
    )
}

export default Slide;