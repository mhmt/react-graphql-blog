import React from 'react'
import IPost from '../../Entities/IPost'
import { Card, Badge, Icon } from 'antd'

export default function PostItem(props: IPostItemProps) {

	const onClick = () => {
		props.onPostClick(props.post.id);
	}

	return (
		<Card
			hoverable
			key={props.post.id}
			title={props.post.title}
			className="PostItem"
			onClick={onClick}
		>
			<h5>{props.post.user?.firstname}</h5>
			<span>{props.post.date}</span>
			<span>
				<Badge count={props.post.comments?.length || 0}>
					<Icon type="message" className={"CommentIcon"} />
				</Badge>
			</span>
		</Card>
	)
}

interface IPostItemProps {
	post: IPost;
	onPostClick: (id: string) => void;
}