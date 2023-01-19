import React from 'react';
import { Link } from 'react-router-dom';

export function ErrorPage() {
	return (
		<div>
			<div className="fullScreen-section text-light">
				<h3>Page not found</h3>
				<Link to="/">
					<div className="bordo mt-3">
						<h3>Home</h3>
					</div>
				</Link>
			</div>
		</div>
	);
}