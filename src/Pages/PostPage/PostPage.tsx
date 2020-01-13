import React from 'react'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { useQuery } from 'react-apollo';
import { GET_POST_BY_ID } from '../../Utils/Queries';
import IPost from '../../Entities/IPost';
import { Result, Comment, PageHeader, Avatar, Spin, Divider } from 'antd';

function PostPage(props: RouteComponentProps<{ id: string }> & {}) {

	const { data, loading, error } = useQuery(GET_POST_BY_ID, { variables: { id: props.match.params.id } })

	const post: IPost = data && data.post;

	if (!loading && (error || post === null || post === undefined)) {
		return (
			<Result
				status="404"
				title="404"
				subTitle="Aradığınız gönderiyi bulamadık. :( "
				extra={<Link to="/">Ana Sayfa'ya Dön</Link>}
			/>
		)
	}
	return (
		<Spin spinning={loading}>
			{
				post &&
				<PageHeader
					className="PageHeader"
					onBack={() => { props.history.goBack() }}
					title={post.title}
					subTitle={post.user?.firstname + " | " + post.date}
				>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget leo posuere, porttitor nisi vitae, ultrices tortor. In metus nisl, aliquet eu efficitur in, aliquam ut justo. Nulla pellentesque magna et sapien pulvinar cursus. Mauris vehicula eget augue in lacinia. Nulla non laoreet quam. Aenean fermentum hendrerit ligula a blandit. Donec dignissim diam quis blandit porttitor. Nulla ac condimentum urna. Curabitur eget ex ornare, molestie dolor vitae, maximus nunc.

	Sed blandit, arcu in tristique lacinia, nunc velit rutrum risus, vel fringilla neque dolor nec neque. Aenean egestas orci vitae ornare suscipit. Donec bibendum sodales lacus, vel finibus magna gravida in. Curabitur vel fermentum risus, quis laoreet mauris. Sed vulputate sem eu eros condimentum aliquet. Praesent tincidunt, massa et mattis fringilla, nisi diam ultricies dui, eu vestibulum lacus dui sit amet justo. Fusce tempor erat vitae nunc ultricies elementum. Mauris sapien dolor, malesuada vitae feugiat a, elementum sed ex. Maecenas quis mi lorem. Nam sit amet massa nunc.

	Maecenas varius malesuada commodo. Proin ac felis gravida neque ornare luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus et lobortis purus, vitae aliquet arcu. Pellentesque efficitur finibus sagittis. Aenean facilisis velit non eros gravida, vel sollicitudin lacus ullamcorper. Mauris finibus cursus mollis. Donec in diam turpis. Mauris scelerisque mi sit amet nunc lacinia posuere.
					</p>
					<Divider type="horizontal" />
					<div className="CommentList">
						{
							post.comments?.map(c => {
								return (
									<Comment
										key={c.id}
										author={<a>{c.user?.firstname}</a>}
										avatar={
											<Avatar
												src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
												alt="Han Solo"
											/>
										}
										content={<p>{c.text}</p>}
									/>
								)
							})
						}
					</div>
				</PageHeader>
			}
		</Spin>
	)
}

export default withRouter(PostPage);
