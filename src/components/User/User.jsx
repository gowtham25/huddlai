import React from 'react';
import Styled from 'styled-components';

const UserContainer = Styled.div`
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
    .user-container {
        border: 1px solid #eee;
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
        border-radius: .25rem!important;
        padding: 10px 13px;
        .user-details-top-container{
            display: flex;
            flex-direction: row;
            align-items: center;
            
            .user-avatar {
                padding: 43px 52px;
                background: #81d4fa;
                color: #FFF;
                font-size: 30px;
                font-weight: 700;
                border-radius: 100px;
                margin-right: 10px;
            }
            .user-details-container{
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                align-items: flex-start;
                .det-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .name {
                    font-size: 30px;
                    font-weight: 700;
                }
                .user-name {
                    font-size: 20px;
                }
            }
            @media screen and (max-width: 1024px) {
                flex-direction: column;
                .user-details-container{
                    .name {
                        font-size: 20px;
                    }
                    .user-name {
                        font-size: 12px
                    }
                }
            }
            
            @media screen and (max-width: 700px) {
                flex-direction: column;
                .user-details-container{
                    .name {
                        font-size: 20px;
                    }
                    .user-name {
                        font-size: 12px
                    }
                }
            }
        }
        .user-body-top-container {
            display: flex;
            justify-content: flex-end;
            .user-body-container {
                .company-details {
                    display: flex;
                    flex-direction: row;
                    label {
                        font-size: 17px;
                        font-weight: 700;
                        margin-right: 10px;
                    }
                    span {
                        font-size: 15px;
                    }
                    .company-container {
                        display: flex;
                        flex-direction: column;
                        align-items: self-start;
                        .skills {
                            font-size: 13px;
                            color: #9e9e9e;
                        }
                    }
                }
            }
        }
    }
`;
const User = ({ setShowUserDetails, userDetail }) => {
    const { name = '', company = {}, email = '', website = '', username = '' } = userDetail || {};
    const { name: companyName = '', catchPhrase = '', bs = '' } = company || {};
    return (
        <UserContainer>
            <div className='header'> <button onClick={() => { setShowUserDetails(false) }}>Home</button></div>
            <div className='user-container'>
                <div className='user-details-top-container'>
                    <div className='user-avatar'>{name.substr(0, 1)}</div>
                    <div className='user-details-container'>
                        <div className='det-container'>
                            <span className='name'>{username}</span>
                            <span className='user-name'>({name}) </span>
                        </div>
                        <div className='user-body-top-container'>
                            <div className='user-body-container'>
                                <div className='company-details'>
                                    <label>Email: </label>
                                    <span>{email}</span>
                                </div>
                                <div className='company-details'>
                                    <label>Company: </label>
                                    <div className='company-container'>
                                        <span>{companyName}</span>
                                        <span className='skills'>{catchPhrase}</span>
                                        <span className='skills'>{bs}</span>
                                    </div>
                                </div>
                                <div className='company-details'>
                                    <label>Website: </label><a href={`http://www.${website}`} target="_blank">{website}</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </UserContainer >
    )
}

export default User;