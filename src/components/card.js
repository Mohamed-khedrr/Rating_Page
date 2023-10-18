import { useDispatch, useSelector } from 'react-redux';
import Slide from './slide';
import ThanksSlide from './thanksSlide';

export function Rating() {
    let submitted = useSelector(state => state.submission);

    return (
        <section className='card p-4 rounded-4 '>
            {submitted ? <ThanksSlide /> : <Slide />}
        </section>
    )
}

export default Rating;