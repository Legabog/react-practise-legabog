import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const starWarsChars = [
    { name: 'Дарт Вэйдер', side: 'dark' },
    { name: 'Люк Скайвокер', side: 'light' },
    { name: 'Полпатин', side: 'dark' },
    { name: 'Обиван Кеноби', side: 'light' },
]

const App = ({list}) => (
            <ul>{list.map((char, index) => {
                    return (
                        <li key={char.name + index}>
                            <strong>{char.name}</strong> - &nbsp;
                            {char.side}
                        </li>
                    )
                }) }
            </ul>    
)

const withFilteredProps = Component => ({list, side}) => {
    const filteredList = list.filter(char => char.side === side)
    return <Component list={filteredList}/>
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(<FilteredList list={starWarsChars} side="light"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
