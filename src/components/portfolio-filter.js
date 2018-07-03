import React from 'react'

export default class Dropdown extends React.Component {

    render() {

        const { categories, setFilter, currentCategory } = this.props;

        return (
            <ul className="portfolio-filter">
                <li className="default" key="all" onClick={() => setFilter('all')} className="default">
                    <button tabIndex="0" className={currentCategory === 'all' ? 'current' : ''}>
						all					
					</button>
                </li>
                {categories.map((item) => {
                    return (
                        <li key={item} onClick={() => setFilter(item)}>
							<button tabIndex="0" className={currentCategory === item ? 'current' : ''}>
								{item}
							</button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}