export interface ImageProperties {
	id: number
	date_created: string
	date_created_gmt: string
	date_modified: string
	date_modified_gmt: string
	src: string
	name: string
	alt: string
}

export interface UserProperties {
	id: number
	username: string
	name: string
	first_name: string
	last_name: string
	email: string
	url: string
	description: string
	link: string
	locale: string
	nickname: string
	slug: string
	registered_date: string
	roles: string[]
	password: string
	capabilities: Record<string, boolean>
	extra_capabilities: Record<string, boolean>
	avatar_urls: Record<string, string>
	meta: Record<string, any>
	acf?: {
		dob?: string;
		country?: string;
		state?: string;
		city?: string;
		postcode?: string;
		address_1?: string;
		address_2?: string;
		phone?: string;
		billing_email?: string;
		refresh_token?: string;
	  }
}

export interface TagProperties {
	id: number
	count: number
	description: string
	link: string
	name: string
	slug: string
	taxonomy: 'post_tag'
	meta: Record<string, any>
}

export interface CategoryProperties {
	id: number
	count: number
	description: string
	link: string
	name: string
	slug: string
	taxonomy: 'category'
	parent: number
	meta: Record<string, any>
}

export interface CommentProperties {
	id: number
	post: number
	parent: number
	author: number
	author_name: string
	author_email: string
	author_url: string
	author_ip: string
	author_user_agent: string
	date: string
	date_gmt: string
	content: {
		rendered: string
	}
	link: string
	status: 'hold' | 'approved' | 'spam' | 'trash'
	type: string
	author_avatar_urls: Record<string, string>
	meta: Record<string, any>
}

export interface MediaProperties {
	id: number
	date: string
	date_gmt: string
	guid: {
		rendered: string
	}
	modified: string
	modified_gmt: string
	slug: string
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	type: 'attachment'
	link: string
	title: {
		rendered: string
	}
	author: number
	comment_status: 'open' | 'closed'
	ping_status: 'open' | 'closed'
	template: string
	meta: Record<string, any>
	description: {
		rendered: string
	}
	caption: {
		rendered: string
	}
	alt_text: string
	media_type: 'image' | 'file'
	mime_type: string
	media_details: {
		width: number
		height: number
		file: string
		sizes: Record<
			string,
			{
				file: string
				width: number
				height: number
				mime_type: string
				source_url: string
			}
		>
	}
	source_url: string
}

export interface PageProperties {
	id: number
	date: string
	date_gmt: string
	guid: {
		rendered: string
	}
	modified: string
	modified_gmt: string
	slug: string
	status: 'publish' | 'future' | 'draft' | 'pending' | 'private'
	type: 'page'
	link: string
	title: {
		rendered: string
	}
	content: {
		rendered: string
		protected: boolean
	}
	excerpt: {
		rendered: string
		protected: boolean
	}
	author: number
	featured_media: number
	parent: number
	menu_order: number
	comment_status: 'open' | 'closed'
	ping_status: 'open' | 'closed'
	template: string
	meta: Record<string, any>
}
