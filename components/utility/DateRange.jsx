

const DateRange = ({ startYear, endYear, id }) => {
    const start = new Date(startYear);
    const end = new Date(endYear);
    return (
        <p id={id} className="sub-content">
            {start.toLocaleString('pt-BR', { month: 'short' })} {start.getFullYear()} - {end != "Invalid Date" ? end.toLocaleString('pt-BR', { month: 'short' }) + ' ' + end.getFullYear() : 'O Momento'}
        </p>
    );
};

export default DateRange;