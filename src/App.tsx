import React from 'react'
import { data } from './data'
import { UserCard } from './UserCard'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	app: {
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
})

export default function App() {
	const c = useStyles()

	return (
		<div className={c.app}>
			{data.map((userData, i) => {
				return <UserCard key={i} {...userData} />
			})}
		</div>
	)
}
