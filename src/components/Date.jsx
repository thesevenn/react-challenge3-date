import { useState } from "react";
import moment from "moment";

export default function Datew() {
    const [ from, setFrom ] = useState( "" );
    const [ to, setTo ] = useState( "" );
    const [ duration, setDuration ] = useState( "" );
    const digitReg = /\d+/;
    const charReg = /[a-zA-Z]+/;

    function updateToDate() {
        const durationDigit = duration.match( digitReg ) || [ 0 ];
        const durationChar = duration.match( charReg ) || [ "millisecondds" ];
        const dur = moment.duration( Number( durationDigit[ 0 ] ), durationChar[ 0 ] );
        let toDate = moment( from ).add( dur );
        setTo( toDate.format( "YYYY-MM-DD HH:mm" ) );
    }
    return (
        <div className="date-card">
            <label htmlFor="from-date">From Date:</label>
            <input
                type="datetime-local"
                id="from-date"
                value={from}
                onChange={( e ) => setFrom( e.target.value )}
            />

            <label htmlFor="text-box">Duration:</label>
            <input
                type="text"
                id="text-box"
                value={duration}
                placeholder="eg. 5days"
                onChange={( e ) => setDuration( e.target.value )}
                onBlur={() => updateToDate()}
            />

            <label htmlFor="To Date:">To Date:</label>
            <input
                type="datetime-local"
                id="to-date"
                value={to}
                onChange={( e ) => setTo( e.target.value )}
            />
        </div>
    );
}
