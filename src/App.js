import logo from './logo.svg';
import './App.css';
import { tabs } from './Data/tabs';
import { useState } from 'react';

function App() {
  let [activeTabs, setActiveTabs] = useState(0);
  let [activeContent, setActiveContent] = useState(tabs[0]);

  let changeData = (index) => {
      setActiveTabs(index)
      setActiveContent(tabs[index]);
  };
  return (
    <div className="App">
      <div className='tabsOuter'>
        <h1 style={{ textAlign: 'left' }}>
          Law Prop Vision Mission and Values
        </h1>

        <ul>
          {tabs.map((tabsItem, index) => {
            return (
              <li>
                <button onClick={() => (changeData(index))} className={(activeTabs == index) ? "activeBtn" : ""}>{tabsItem.title}</button>
              </li>
            )
          })}
        </ul>
        {(activeContent !== "") ?
          <p>{activeContent.description}</p>
          :
          ""
        }
      </div>
    </div>
  );
}

export default App;
