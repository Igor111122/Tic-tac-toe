import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Tiktok_game.js'
import Autorization from './Autorization';
import Raiting from './Raiting';

function MainForm() {
  const [user, setUser] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const btn_loginn = () => {
    updateData(document.getElementById('username').value)
    setIsLogin(true);
    setPage(<Game />);
  }

  const [page, setPage] = useState(<Autorization log={btn_loginn} />);

  const btn_login = () => {
    setPage(<Autorization log={btn_loginn} />);
    setIsLogin(false);
  }

  const btn_Leaderboard = () => {
    setPage(<Raiting/>);
  }

  const btn_game = () => {
    setPage(<Game />);
  }

  const updateData = (value) => {
    setUser(value);
  }

  return (
    <>
      {isLogin ? <Header login={btn_login}  game={btn_game} leaderboard={btn_Leaderboard} user={user}/> : null}
      <main>{page} </main>
    </>
  );
}

function Header({login, game, leaderboard, user}) {
  return (    
      <div>
          <header>
            <nav class="dws-menu">
              <ul>
                <li><button onClick={game} className='button_'>Game</button></li>
                <li><button onClick={leaderboard} className='button_ raiting' >Raiting</button></li>
                <li><button className='button_ raiting'><i class="icon-excel" ></i>{user}</button>
                  <ul>
                    <li><button onClick={login} className='button_ raiting'>LogOut</button></li>
                    <li><button className='button_ raiting'>Language</button>
                      <ul>
                        <li><button className='button_ raiting'>Eng</button></li>
                        <li><button className='button_ raiting'>Ru</button></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </header>
      </div>
  );
}

ReactDOM.render(<MainForm />,document.getElementById('root'));
