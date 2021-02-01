import React from 'react'
import { UserData } from './data'
import { Avatar } from './Avatar'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	parent: {
		zoom: 0.5,
		position: 'relative',
		margin: [120, 30, 30, 30],
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		background: '#eee',
		borderRadius: 10,
		width: 450,
		boxShadow: `5px 5px 10px rgba(0, 0, 0, 0.15)`,
		height: 150,
		fontFamily: 'sans-serif',
		textAlign: 'center',
	},
	avatar: {
		position: 'absolute',
		top: -50,
		left: 30,
	},
	text: {
		paddingLeft: 200,
	},
	socialIcons: {
		margin: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	socialIcon: {
		fontSize: '1.2em',
		display: 'flex',
		justifyContent: 'center',
		width: 40,
		height: 40,
		borderRadius: '50%',
		alignItems: 'center',
		cursor: 'pointer',
		border: 0,
		'&:hover': {
			background: '#ddd',
		},
		'&:active': {
			background: '#ccc',
		},
		'&:focus': {
			outline: 'none',
		},
		'&:focus:not(:active)': {
			border: '3px solid #33f',
		},
	},
})

export const UserCard = (userData: UserData) => {
	const { name } = userData

	const c = useStyles()

	return (
		<div className={c.parent}>
			<div className={c.avatar}>
				<Avatar size={180} {...userData} />
			</div>
			<div className={c.text}>
				<h2>{name}</h2>
				<div className={c.socialIcons}>
					<button
						title='Like'
						aria-label='Like'
						className={c.socialIcon}
					>
						<span aria-hidden>🧡</span>
					</button>
					<button
						title='Favorite'
						aria-label='Favorite'
						className={c.socialIcon}
					>
						<span aria-hidden>⭐</span>
					</button>
					<button
						title='Email'
						aria-label='Email'
						className={c.socialIcon}
					>
						<span aria-hidden>📧</span>
					</button>
				</div>
			</div>
		</div>
	)
}
