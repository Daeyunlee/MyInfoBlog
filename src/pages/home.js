import React from 'react';
import HomeTemplate from 'components/Home/HomeTemplate';
import HomeContainer from 'containers/Home/HomeContainer';
import SerachContainer from 'containers/Search/SearchContainer';

const Home = () => (
    <HomeTemplate>
        <HomeContainer>
            <SerachContainer />
        </HomeContainer>
    </HomeTemplate>
)

export default Home;