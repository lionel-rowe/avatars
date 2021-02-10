export const getColorAndBackground = (md5: string) => {
	const hex = md5.match(/^[0-9a-f]{6}/i)

	const matches = (hex?.[0] ?? '000000').match(/.{2}/g)!

	const [red, green, blue] = matches.map(hex => parseInt(hex, 16))

	// Formula from https://www.w3.org/TR/AERT/#color-contrast
	const luminance = (red * 0.299 + green * 0.587 + blue * 0.114) / 255

	const color = luminance > 0.6 ? '#222' : '#fff'

	return {
		background: `rgb(${[red, green, blue]})`,
		color,
	}
}

export const getInitials = (name: string, maxLength = 3) => {
	const collapsed = name.replace(/\s+/g, '')

	if (collapsed.length <= maxLength) return collapsed

	const trimmed = name.trim()

	const hasSpaces = /\s/.test(trimmed)

	const chars = [...trimmed]

	const initials: string[] = []

	for (const [idx, char] of chars.entries()) {
		if (
			!chars[idx - 1] ||
			/\s|-/.test(chars[idx - 1]) ||
			(!hasSpaces && char.toLowerCase() !== char)
		) {
			initials.push(char)

			if (initials.length > maxLength) {
				return initials[0]
			}
		}
	}

	return initials.join('')
}

export const getUrl = (emailMd5: string, size: number) => {
	// 250px is large enough that it will suffice for most purposes,
	// but small enough that it won't require too much bandwidth.
	// We limit the minimum size to improve caching.
	return `https://www.gravatar.com/avatar/${emailMd5}?s=${Math.max(
		size,
		250,
	)}&d=blank`
}
