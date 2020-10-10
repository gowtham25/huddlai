import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import IndividualCard from '../Card/IndividualCard';

const PostsContainer = Styled.div`
    .header {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding: 13px 0;
        button {
            cursor: pointer;
            background: transparent;
            outline: none;
            border: none;
            color: blue;
            font-weight: bold;
            font-size: 15px;
            &:hover {
                color: #0000ff7d;
            }
        }
    }
    .comment-title {
        text-align: left;
        font-size: 14px;
        margin: 8px 0;
    }
    .sub-comments-contaier {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 73vh;
        overflow-y: auto;
        .comment-sub-top-container {
            border: 1px solid #eee;
            box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
            border-radius: .25rem!important;
            margin-bottom: 15px;
            padding: 10px 13px;
            width: 96%;
            .comment-container {
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: baseline;
                .title {
                    font-size: 14px;
                    color: #555 ;
                    line-height: 1;
                    margin-bottom: .5rem;
                    font-weight: 500;
                    text-transform: capitalize;
                    text-align: left;
                    padding-left: 46px;
                    margin-top: 4px;
                }
                .comment {
                    text-align: justify;
                    line-height: 1.7em;
                    margin-bottom: 8px;
                    color: #77838f;
                    font-weight: 400;
                    margin-top: 0px;
                    padding-left: 46px;
                    font-size: 14px;
                }
                .email {
                    padding-left: 46px;
                    font-weight: 700;
                    font-size: 14px;
                }
            }
            @media screen and (max-width: 1024px) {
                width: 96%;
                .comment-container {
                    .title {
                        padding: 0;
                    }
                    .comment {
                        padding: 0;
                    }
                    .email {
                        padding: 0px;
                    }
                }
            }
            
            @media screen and (max-width: 700px) {
                width: 90%;
                .comment-container {
                    .title {
                        padding: 0;
                    }
                    .comment {
                        padding: 0;
                    }
                    .email {
                        padding: 0px;
                    }
                }
            }
        }
    }
`;
const Posts = ({ dataDetail, userDetail, setShowPostDetails }) => {
    const [allComment, setAllcomment] = useState([]);
    const { id = '' } = dataDetail || {};
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(data => data.json())
            .then(data => setAllcomment(data));
    }, [id]);

    return (
        <PostsContainer>
            <div className='header'> <button onClick={() => { setShowPostDetails(false) }}>Home</button></div>
            <IndividualCard
                data={dataDetail}
                commentedBy={userDetail}
            />
            <h5 className='comment-title'>Comments</h5>
            <div className='sub-comments-contaier'>
                {allComment ?.map((aVal) => {
                    const { body = '', name = '', id = '', email = '' } = aVal || {};
                    return (
                        <div className='comment-sub-top-container' key={id}>
                            <div className='comment-container' >
                                <h5 className='title'>{name}</h5>
                                <p className='comment'>{body}</p>
                                <span className='email'>{email}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </PostsContainer>
    )
}

export default Posts;