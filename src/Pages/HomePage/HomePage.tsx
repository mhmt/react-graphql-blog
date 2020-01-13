import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { GET_POSTS } from '../../Utils/Queries';
import { Pagination, Spin } from 'antd';
import IPost from '../../Entities/IPost';
import PostItem from './PostItem';

function HomePage(props: RouteComponentProps & {}) {
	const [page, setPage] = React.useState(1);

	let { data, loading } = useQuery(GET_POSTS, { variables: { page: page } });

	const posts: IPost[] = data && data.posts ? data.posts : [];

	const onPageChange = (page: number) => {
		setPage(page);
	}

	const onPostClick = (id: string) => {
		props.history.push(`/post/${id}`);
	}

	return (
		<div className="PostContainer">
			<Spin spinning={loading}>
				<div className="PostList">
					{
						posts.map((post) => <PostItem post={post} onPostClick={onPostClick} />)
					}
				</div>
			</Spin>
			<div className="PaginationWrapper">
				<Pagination defaultCurrent={1} defaultPageSize={5} total={25} onChange={onPageChange} />
			</div>
		</div>
	)
}

export default withRouter(HomePage);
