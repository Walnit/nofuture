import React from 'react';

export default function FindMentor(props) {
    const lines = props.content.split("<br>");
    return (
        <div className="findmentor-container">
            <div className="findmentor-photo">
                <a href={props.photo} target="_blank" rel="noopener noreferrer">
                    <img 
                        src={props.photo} 
                        alt={props.content_title} 
                        style={{ 
                            width: '100px', 
                            height: '100px', 
                            borderRadius: '50%', 
                            objectFit: 'cover' 
                        }} 
                    />
                </a>
            </div>
            <div className="findmentor-content">
                <div className="findmentor-content-title">
                    {props.content_title}
                </div>
                <div className='findmentor-detail'>
                    {lines.map((line, index) => (
                        <div key={index}>{line}</div>
                    ))}
                </div>
                <div className='findmentor-profile'>
                    {props.profile}
                </div>
            </div>
        </div>
    );
}