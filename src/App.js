import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
import './App.css';
import Card from './components/Card/Card';
import Posts from './components/Posts/Posts';
import User from './components/User/User';

const AppContainer = Styled.div`
	width: 50%;
	margin: auto;
	height: 100vh;
	font-family: monospace;
	.top-title {
		font-size: 20px;
    	font-family: sans-serif;
	}
	@media screen and (max-width: 1024px) {
		width: 90%;
    	padding: 20px;
	}
	
	@media screen and (max-width: 700px) {
		width: 90%;
    	padding: 20px;
	}
`;
function App() {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	const [showPostDetails, setShowPostDetails] = useState(false);
	const [showUserDetails, setShowUserDetails] = useState(false);
	const [dataDetail, setDataDetail] = useState({});
	const [userDetail, setUserDetail] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(data => data.json())
			.then(data => setPosts(data));

		fetch('https://jsonplaceholder.typicode.com/users')
			.then(data => data.json())
			.then(data => {
				setUsers(data);
				setLoading(false);
			});
	}, []);
	const handleShowPost = (data, commentedBy) => {
		setShowPostDetails(true);
		setDataDetail(data);
		setUserDetail(commentedBy);
	}
	const handleShowUser = (commentedBy) => {
		setShowUserDetails(true);
		setUserDetail(commentedBy);
	}
	return (
		<div className="App">
			<AppContainer>
				<h2 className='top-title'>Forum</h2>
				{!showPostDetails && !showUserDetails && (
					<Card
						posts={posts}
						users={users}
						handleShowPost={handleShowPost}
						handleShowUser={handleShowUser}
						loading={loading}
					/>
				)}
				{showPostDetails && (
					<Posts
						dataDetail={dataDetail}
						userDetail={userDetail}
						setShowPostDetails={setShowPostDetails}
					/>
				)}
				{showUserDetails && (
					<User
						userDetail={userDetail}
						setShowUserDetails={setShowUserDetails}
					/>
				)}
			</AppContainer>
		</div>
	);
}

export default App;
