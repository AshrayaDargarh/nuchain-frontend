import React, { useRef, useEffect } from 'react';

const UptimeDowntimeComponent = ({ data, title }) => {
    const chatMessagesRef = useRef(null);

    const displayDataAsBars = (data) => {
        const first90Entries = data.slice(0, 90);
        const total = first90Entries.reduce((total, entry) => {
            return total + parseFloat(entry.uptime);
        }, 0);
        const average = (total / first90Entries.length).toFixed(2);
        const totalDays = first90Entries.length;
        const bars = first90Entries.map((entry, index) => (
            <div key={index} className="message">
                <div className="bar" style={{ height: entry.uptime, minWidth: "1px"}} />
            </div>
        ));

        return { bars, average, totalDays };
    };

    useEffect(() => {
        const { totalDays } = displayDataAsBars(data);
        const chatMessagesWidth = chatMessagesRef.current.offsetWidth;
        const chatMessageWidth = (chatMessagesWidth - totalDays * 5) / (totalDays + 2);
        chatMessagesRef.current.style.width = `${chatMessagesWidth}px`;
        const barElements = document.querySelectorAll('.bar');
        barElements.forEach(bar => {
            bar.style.width = `${chatMessageWidth}px`;
        });
    }, [data]);

    const { bars, average, totalDays } = displayDataAsBars(data);

    return (

        <div className='p-3 chat-box-network'>
            <div className="chat-container">
                <div className='px-3'>
                    <div className='d-flex justify-content-between align-items-center header-text-network'>
                        <div className='d-flex align-items-center gap-2'>
                            <p>{title}</p>
                            <i className='bi bi-question-circle' />
                        </div>
                        <p>Operational</p>
                    </div>
                </div>
                <div className="chat-messages" ref={chatMessagesRef}>
                    {bars}
                </div>
                <div className='pb-3'>
                    <div className='status-details'>
                        <div className='d-flex justify-content-between align-items-center '>
                            <p style={{ backgroundColor: "#FFFFFF", padding: "0 15px" }}>{totalDays} Days Ago </p>
                            <p style={{ backgroundColor: "#FFFFFF", padding: "0 15px" }}>{average} %  Uptime </p>
                            <p style={{ backgroundColor: "#FFFFFF", padding: "0 15px" }}>Today</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UptimeDowntimeComponent;