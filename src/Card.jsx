import { useState } from 'react'

function Card() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="container">
            <div className="envelope-wrapper">
                <div
                    id="envelope"
                    className={`envelope ${isOpen ? 'open' : 'close'}`}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <div className="back">
                        <div className="back-top">
                            <div className="back-top-top"></div>
                        </div>
                    </div>
                    <div className="card">
                        <p className="text">
                            Happy <br />
                            Valentine's <br />
                            Day
                            <br />
                            <span className="heart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-2 h-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                    />
                                </svg>
                            </span>
                        </p>
                    </div>
                    <div className="front">
                        <div className="front-right"></div>
                        <div className="front-left"></div>
                    </div>
                </div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default Card
