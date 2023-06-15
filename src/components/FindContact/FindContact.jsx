import css from './FindContact.module.css';

import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';

export const FindContact = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <>
            <label
            className={css.label}>
                <p>
                     Find contact by name
                </p>
                <input
                    onChange={evt => dispatch(setFilter(evt.target.value.trim()))}
                    type="text"
                    name="filter"
                    value={filter}
                    className={css.input}
                >
                </input>
            </label>
        </>
    )
}