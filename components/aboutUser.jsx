import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles({
	wrapper: {
		height: '192px',
		background: '#FFFFFF',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
		borderRadius: '10px',
	},
	item: {
		height: '96px',
		padding: '0 75px',
		borderBottom: '1px solid #CAE7FE',
		display: 'flex',
		alignItems: 'center',
		'&:last-child': {
			borderBottom: 'none'
		},
		'@media (max-width: 767px)': {
			padding: '0 20px'
		 },
	},
	icon: {
		marginRight: '45px',
		'@media (max-width: 575px)': {
            marginRight: '30px'
        }
	},
	info: {
		color: '#313131',
		fontSize: '18px',
		'@media (max-width: 575px)': {
            fontSize: '14px'
        }
	}
})

export default function Home() {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.wrapper}>
				<div className={classes.item}>
					<img className={classes.icon} src="/mail.svg" alt="mail"/>
					<div className={classes.info}>example@mail.ru</div>
				</div>
				<div className={classes.item}>
					<img className={classes.icon} src="/phone.svg" alt="phone"/>
					<div className={classes.info}>Укажите номер телефона</div>
				</div>
			</div>
		</div>
	)
}
