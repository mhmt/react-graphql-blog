import gql from "graphql-tag";

/**
 * `$page` => Page Variable
 */
export const GET_POSTS = gql`query getPosts($page: Int!){
	posts(page: $page, limit: 5) {
	  title
	  user {
		firstname
	  }
	  id
	  date
	  comments {
		text
	  }
	}
  }`

/**
 * `$id` => Post Id Variable
 */
export const GET_POST_BY_ID = gql`query getPostById($id: ID!){
	post(id: $id) {
	  id
	  title
	  user {
		firstname
		id
	  }
	  date
	  comments {
		id
		text
		user {
		  firstname
		}
	  }
	}
  }`