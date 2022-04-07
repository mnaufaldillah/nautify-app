import {useEffect, useState } from 'react';
import Navbar from '../../components/searchapi/navbar';
import PlayList from '../../components/searchapi/playlist';
import Main from '../../layout/main';
import initData from '../../simple/data'
import { callback } from '../../lib/auth';
import { getProfile, getSearchTrack } from '../../lib/spotify';


const Pages = () => {
  const [trackList, setTrakList] = useState(initData);
  const [ auth, setAuth ] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    callback();
    const payload = callback();
    if (payload) {
      setAuth(payload);
      getProfile(payload.access_token).then((respond) => {
        setUserData(respond);
      });
    }
  }, []);
  const handleSearch = (query) => {
    const options = {
      q: query,
      type: 'track',
      limit: 12,
    };
    getSearchTrack(auth.access_token, options).then((respond) => {
      setTrakList(respond.tracks.items);
    });
  };
  return(
  <div>
    <Navbar auth={auth} />
    <Navbar userData={{...userData, ...auth}} handleSearch={handleSearch}/>
    <Main>
      <PlayList data={trackList}/>
    </Main>
  </div>
);
};

export default Pages;