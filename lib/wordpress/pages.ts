'use server'

import { fetchWordpress } from './index'
import { ImageProperties, UserProperties } from './properties'

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
	acf: Record<string, any>
}

export interface PagesRequestProperties {
	context?: 'view' | 'embed' | 'edit'
	page?: number
	per_page?: number
	search?: string
	after?: string
	author?: number[]
	author_exclude?: number[]
	before?: string
	exclude?: number[]
	include?: number[]
	menu_order?: number
	offset?: number
	order?: 'asc' | 'desc'
	orderby?: 'author' | 'date' | 'id' | 'include' | 'modified' | 'parent' | 'relevance' | 'slug' | 'title' | 'menu_order'
	parent?: number[]
	parent_exclude?: number[]
	slug?: string[]
	status?: ('publish' | 'future' | 'draft' | 'pending' | 'private')[]
}

export const fetchPages = async (params: PagesRequestProperties): Promise<PageProperties[]> => {
	const {
		context = 'view',
		page = 1,
		per_page = 20,
		search,
		after,
		author,
		author_exclude,
		before,
		exclude,
		include,
		menu_order,
		offset,
		order = 'desc',
		orderby = 'date',
		parent,
		parent_exclude,
		slug,
		status,
	} = params

	const queryParams: Record<string, string> = {
		context,
		page: page.toString(),
		per_page: per_page.toString(),
		order,
		orderby,
	}

	if (search) queryParams.search = search
	if (after) queryParams.after = after
	if (author) queryParams.author = author.join(',')
	if (author_exclude) queryParams.author_exclude = author_exclude.join(',')
	if (before) queryParams.before = before
	if (exclude) queryParams.exclude = exclude.join(',')
	if (include) queryParams.include = include.join(',')
	if (menu_order !== undefined) queryParams.menu_order = menu_order.toString()
	if (offset) queryParams.offset = offset.toString()
	if (parent) queryParams.parent = parent.join(',')
	if (parent_exclude) queryParams.parent_exclude = parent_exclude.join(',')
	if (slug) queryParams.slug = slug.join(',')
	if (status) queryParams.status = status.join(',')

	const response = await fetchWordpress(`pages?${new URLSearchParams(queryParams)}&acf_format=standard`, {
		method: 'GET',
		next: {
			revalidate: 86000,
			// tags: ['pages'],
		},
	})

	return response
}

export const fetchPage = async (slug: string): Promise<PageProperties> => {
	const response = await fetchPages({
		slug: [slug],
	})
	
	return response[0]
}
