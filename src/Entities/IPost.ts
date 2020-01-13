import IUser from "./IUser";
import IComment from "./IComment";

export default interface IPost{
	id: string;
	date?: string;
	title?: string;
	user?: IUser;
	comments?: IComment[];
}