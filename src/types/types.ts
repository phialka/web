export interface Search {
	prompt: string;
	count: number | null;
	offset: number | null;
}

export interface Profile {
	user_id: string;
	name: string;
	description: string;
	tag: string;
	birthdate: string;
	photo: File | null;
}

export interface CreateProfile {
	name: string;
	description: string;
	tag: string;
	birthdate: string;
	login: string;
	password: string;
}

export interface EditProfile {
	name: string;
	description: string;
	tag: string;
	birthdate: string;
}

export interface SearchUsers extends Search {}

export interface File {
	file_id: string;
	download_id: string;
	size: number;
	hash: string;
	mime_type: string;
	upload_at: string;
}

export interface JWT {
	token: string;
	refresh: string;
}

export interface Server {
	server_id: string;
	owner_id: string;
	title: string;
	description: string;
	logo: File | null;
	created_at: string;
}

export interface CreateServer {
	title: string;
	description: string;
}

export interface Channel {
	channel_id: string;
	server_id: string;
	title: string;
	description: string;
	logo: File | null;
	created_at: string;
}

export interface CreateChannel {
	server_id: string;
	title: string;
	description: string;
}

export interface EditChannel {
	title: string;
	description: string;
}

export interface Chat {
	chat_id: string;
	members: Profile[] | [];
}

export interface Message {
	content: string;
	reply_message_id: string;
	attachments: Attachments[];
}

export interface Attachments {
	attach_type: string;
	file_id: string;
}

export interface GetMessages {
	sequence: number;
	count: number | null;
}