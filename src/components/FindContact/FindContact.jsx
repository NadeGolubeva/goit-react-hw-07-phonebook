import css from './FindContact.module.css';
import { useDispatch, useSelector } from 'react-redux'; 
import { setFilter } from '../../redux/filterSlice';
import { selectorFilter } from '../../redux/selectors';

export const FindContact = () => {

const dispatch = useDispatch(); 
const filter = useSelector(selectorFilter); 
    
    return (
        <>
            <label
            className={css.label}>
                <h3 className={css.h3}>
                     Find contact by name
                </h3>
                <input
                    onChange={event => dispatch(setFilter(event.target.value.trim()))}
                    type="text"
                    value={filter}
                    className={css.input}
                >
                </input>
            </label>
        </>
    )
}