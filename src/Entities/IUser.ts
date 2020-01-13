import IPost from "./IPost";
import IComment from "./IComment";

export default interface IUser{
	id: string;
	firstname?: string;
	age?: number;
	posts?: IPost[];
	comments?: IComment[];
}