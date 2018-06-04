import React from 'react'

import { breaks, colors, fonts, container } from '../config/config';

import styled from 'styled-components';

export default class Dropdown extends React.Component {

    render() {

        const { title, items, itemOnClick } = this.props;

        return (
            <StyledDropdown className="dropdown">
                <div key={title} onClick={() => itemOnClick('')}>
                    {title}
                </div>
                {items.map((item) => {
                    return (
                        <div key={item} onClick={() => itemOnClick(item)}>
                            {item}
                        </div>
                    )
                })}
            </StyledDropdown>
        )
    }
}

// const Dropdown = (items) => (
//     <StyledDropdown className="dropdown">
//     {console.log(this.props.items)}
//         {/* {items.map((item) => {
//             <div>{item}</div>
//         })} */}
//     </StyledDropdown>
// )
// export default Dropdown

const StyledDropdown = styled.div`
    display: block;
`


{/* <nav class="subnav js-subnav-mobile">
    <div class="subnav__title js-expander">
        <span>Categories</span>
    </div>
    <ul class="subnav__list js-expandee">
        {% for tag in tags %}
            <li class="subnav__link {% if page.filter == tag %}active{% endif %}">
                <a href="/{{ tag }}/">
                    {{ tag }}
                </a>
            </li>
        {% endfor %}
        <li class="subnav__link {% if page.filter == tag %}active{% endif %}">
            <a href="/{{ page.parent }}/">
                all
            </a>
        </li>
    </ul>
</nav> */}