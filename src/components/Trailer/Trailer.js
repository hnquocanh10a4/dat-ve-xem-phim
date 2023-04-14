import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AN_TRAILER } from '../../redux/types/QuanLyPhimType';

export default function Trailer({ props }) {
    // const [hidden, setHidden] = useState('');
    const { trailer, hidden } = useSelector((state) => {
        return state.QuanLyPhimReducer.trailer;
    });
    const dispatch = useDispatch();
    return (
        <div className="" hidden={hidden}>
            <div
                className="fixed inset-0 overflow-hidde bg-black z-10 opacity-40 "
                onClick={() => {
                    // setHidden(true);
                    dispatch({
                        type: AN_TRAILER,
                    });
                }}
            ></div>

            <iframe
                className="fixed z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="960"
                height="515"
                src={trailer}
                // src="https://www.youtube.com/embed/RFinNxS5KN4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    );
}
