import { createUseStyles } from 'react-jss'
import { UserData } from './data'
import { getColorAndBackground, getInitials, getUrl } from './formatters'

const useStyles = createUseStyles({
	background: ({ size, background }) => ({
		background,
		position: 'relative',
		width: size,
		height: size,
		borderRadius: '50%',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.15)',
	}),
	text: ({ color, initials, size }) => ({
		// scale the text size depending on avatar size and
		// number of initials
		color,
		fontSize: Math.round(size / (1.4 * Math.max([...initials].length, 2))),
		position: 'absolute',
		fontFamily:
			'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, "Microsoft YaHei", "微软雅黑", "微軟雅黑", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
		userSelect: 'none',
	}),
	img: ({ size }) => ({
		position: 'absolute',
		width: size,
		height: size,
		top: 0,
		left: 0,
		borderRadius: '50%',
	}),
})

export const Avatar = ({
	emailMd5,
	name,
	size = 50,
}: UserData & { size?: number }) => {
	const url = getUrl(emailMd5, size)

	const initials = getInitials(name)

	const c = useStyles({ size, initials, ...getColorAndBackground(emailMd5) })

	return (
		<div className={c.background}>
			<div aria-hidden='true' className={c.text}>
				{initials}
			</div>
			<img className={c.img} src={url} alt={`${name}’s avatar`} />
		</div>
	)
}
