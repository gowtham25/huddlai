import React, { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import Styled from 'styled-components';
import IndividualCard from './IndividualCard';

const CardContainer = Styled.div`
    .scroll-container {
        height: 84vh;
        overflow: auto;
    }
    .search-container {
        margin-bottom: 22px;
    }
    .search-result {
        text-align: left;
    }
`;
const Card = ({ loading, posts = [], users = [], handleShowPost, handleShowUser }) => {
    const [searchUserId, setSearchUserId] = useState(null);
    const [searchData, setSearchData] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    const autoSuggestForm = useMemo(() => {
        return users ?.map((uVal) => ({ value: uVal.id, label: uVal.username }))
    }, [users]);

    useEffect(() => {
        if (searchUserId) {
            const { value = '' } = searchUserId || {};
            setSearchLoading(true);
            fetch(`https://jsonplaceholder.typicode.com/users/${value}/posts`)
                .then(data => data.json())
                .then(data => {
                    setSearchData(data);
                    setSearchLoading(false);
                });
        }
    }, [searchUserId])
    return (
        <CardContainer>
            <div className='search-container'>
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    placeholder='Search...'
                    defaultValue={[]}
                    isClearable={true}
                    options={autoSuggestForm}
                    onChange={(e) => {
                        e ? setSearchUserId(e) : setSearchUserId(null);
                    }}
                />
            </div>
            {searchUserId && <p className='search-result'>Search Result for: {searchUserId.label}</p>}
            <div className='scroll-container'>
                {!searchUserId && posts ?.map((pVal) => {
                    const { userId = '', id = '' } = pVal || {};
                    return (
                        <IndividualCard
                            data={pVal}
                            commentedBy={users[userId - 1]}
                            key={id}
                            handleShowPost={handleShowPost}
                            handleShowUser={handleShowUser}
                        />)
                })}

                {searchUserId && searchData ?.map((pVal) => {
                    const { userId = '', id = '' } = pVal || {};
                    return (
                        <IndividualCard
                            data={pVal}
                            commentedBy={users[userId - 1]}
                            key={id}
                            handleShowPost={handleShowPost}
                            handleShowUser={handleShowUser}
                        />)
                })}
                {(searchLoading || loading) && <p>Loading Please wait...</p>}
            </div>
        </CardContainer>
    )
}

export default Card;