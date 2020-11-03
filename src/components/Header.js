import React, { Component } from 'react';
import appIcon from '../assets/dot-to-dot-icon.svg';
import Typography from '@material-ui/core/Typography';

const th1 = {
	fontFamily: 'Quicksand',
	textAlign: 'left',
	fontSize: '2.5rem'
};

const th2 = {
	fontFamily: 'Quicksand',
	textAlign: 'left',
	fontSize: '1.25rem'
};

export default class Header extends Component {
	render() {
		return (
			// <div className='header'>
			<div className='header-wrapper'>
				{this.newMethod()}
				<div className='header-wrapper-title'>
					<Typography variant='h1' style={th1}>
						Dot-to-Dot
					</Typography>
					<Typography variant='h2' style={th2}>
						Creator
					</Typography>
				</div>
			</div>
			// </div>
		);
	}

	newMethod() {
		return <div className='header-wrapper-logo'>

			<object
				id='app-logo'
				className='app-logo'
				data={appIcon}
				type='image/svg+xml'></object>
		</div>;
	}
}
