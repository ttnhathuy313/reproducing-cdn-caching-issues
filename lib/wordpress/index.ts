export interface FetchOptionsRequest extends RequestInit {
	pagination?: boolean
	NoRevalidation?: boolean
	revalidationTime?: number
}

export const fetchWordpress = async (url: string, options: FetchOptionsRequest) => {
	const response = await fetch(`${process.env.WORDPRESS_API_URL}/${url}`, {
		...options,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
		},
		next: {
			revalidate: options.NoRevalidation ? 0 : (options.revalidationTime || 86000),
			// tags: ['wordpress'],
		},
	})


	const data = await response.json()

	if (!options.pagination) {
		return data
	}

	return {
		data,
		headers: response.headers,
	}
}