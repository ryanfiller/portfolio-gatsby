import React from 'react'

export default class Dropdown extends React.Component {

    render() {

        const { categories, setFilter, currentCategory } = this.props;

        return (
            <ul className="portfolio-filter">
                <li className="default" key="all" onClick={() => setFilter('all')} className="default">
                    <a href="#" tabIndex="0" className={currentCategory === 'all' ? 'current' : ''}>
						all					
					</a>
                </li>
                {categories.map((item) => {
                    return (
                        <li key={item} onClick={() => setFilter(item)}>
							<a href="#" tabIndex="0" className={currentCategory === item ? 'current' : ''}>
								{item}
							</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}