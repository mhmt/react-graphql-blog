import React from 'react'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AppRouter from '../Router';

export default function AppMain() {
	return (
		<ApolloProvider client={client}>
			<AppRouter />
		</ApolloProvider>
	)
}


const client = new ApolloClient({
	uri: "https://fakeql.com/graphql/05085a2477540b3c60a1f188a3be6421",
	fetchOptions: {
		credentials: "include"
	},
	request: async operation => {
		const token = `Bearer ${localStorage.getItem("TOKEN")}`;
		operation.setContext({
			headers: {
				Authorization: token || null
			}
		});
	}
});