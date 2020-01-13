import IPost from "./IPost";
import IUser from "./IUser";

export default interface IComment{
	id: string;
	text?: string;
	post?: IPost;
	user?: IUser;
}