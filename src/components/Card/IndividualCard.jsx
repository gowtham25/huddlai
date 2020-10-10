import React from 'react';
import Styled from 'styled-components';

const IndividualCardContainer = Styled.div`
    margin: auto;
    border: 1px solid #eee;
    border-top: 4px solid #2380fb;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
    border-radius: .25rem!important;
    margin-bottom: 15px;
    padding: 11px 22px;
    :hover {
        background: #cccccc2e;
    }
    .comment-top-container {
        display: flex;
        flex-direction: column;
        .comment-header {
            cursor: pointer;
            display: flex;
            flex-direction: row;
            align-items: center;
            .avatar {
                padding: 10px 15px;
                border-radius: 50px;
                background: #81d4fa;
                color: #FFF;
                font-size: 17px;
                font-weight: 700;
            }
            .user-details {
                padding-left: 8px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                .name {
                    font-size: 14px;
                    font-weight: 700;  
                    @media screen and (max-width: 1024px) {
                        font-size: 12px;
                    }
                    
                    @media screen and (max-width: 700px) {
                        font-size: 12px;
                    }          
                }
                .user-address {
                    font-size: 13px;
                    color: #939598;
                }
                .email {
                    font-size: 13px;
                }
            }
        }
        .comment-container {
            cursor: pointer;
            .title {
                font-size: 16px;
                color: #555 ;
                line-height: 1;
                margin-bottom: .5rem;
                font-weight: 500;
                text-transform: capitalize;
                text-align: left;
                padding-left: 46px;
                margin-top: 10px;
            }
            .comment {
                text-align: justify;
                line-height: 1.7em;
                margin-bottom: 8px;
                color: #77838f;
                font-weight: 400;
                margin-top: 0px;
                padding-left: 46px;
                font-size: 15px;
            }
            @media screen and (max-width: 1024px) {
                .title {
                    padding: 0;
                }
                .comment {
                    padding: 0;
                }
            }
            
            @media screen and (max-width: 700px) {
                .title {
                    padding: 0;
                }
                .comment {
                    padding: 0;
                }
            }
        }
    }
`;
const IndividualCard = ({ data, commentedBy, handleShowPost, handleShowUser }) => {
    const { title = '', body = '' } = data || {};
    const { name = '', address = {}, email = '', username = '' } = commentedBy || {};
    const { suite = '', city = '', street = '' } = address || {};
    return (
        <IndividualCardContainer>
            <div className='comment-top-container'>
                <div className='comment-header' onClick={() => { handleShowPost && handleShowUser(commentedBy) }}>
                    <div className='avatar'>{name.substr(0, 1)}</div>
                    <div className='user-details'>
                        <div className='user-details-container'>
                            <span className='name'>{username} </span>
                            {username && <span className='name'>({name}),</span>}
                            <span className='email'>{email}</span>
                        </div>
                        <div className='user-address'>{`${suite}, ${street}, ${city}`}</div>
                    </div>
                </div>
                <div className='comment-container' onClick={() => { handleShowPost && handleShowPost(data, commentedBy) }}>
                    <h5 className='title'>{title}</h5>
                    <p className='comment'>{body}</p>
                </div>
            </div>
        </IndividualCardContainer>
    )
}

export default IndividualCard;