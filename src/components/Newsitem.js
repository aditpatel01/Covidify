import React from 'react'

export default function Newsitem({title, content, description, author, publishedAt, source}) {
    return (
        <div className="news">
            <h1 className="news__title">{title}</h1>
            <p className="news__desc">{description}</p>
            <span className="news__author">{author}</span> <br />
            <span className="news__published">{publishedAt}</span>
            <span className="news__source">{source}</span>
        </div>
    )
}
