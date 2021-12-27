import { useWallet } from '@solana/wallet-adapter-react';
import { Col, Layout, Row, Tabs, Card } from 'antd';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import { useMeta } from '../../../../contexts';
import { CardLoader } from '../../../../components/MyLoader';
import { Banner } from '../../../../components/Banner';
import { HowToBuyModal } from '../../../../components/HowToBuyModal';

import { useAuctionsList } from './hooks/useAuctionsList';
import { AuctionRenderCard } from '../../../../components/AuctionRenderCard';

const cardStyle: React.CSSProperties = {
  width: '80%',
   height: '90%'
};

const cardImg: React.CSSProperties = {
  width: 150,
  marginLeft: '15%'
};

const cardTitle: React.CSSProperties = {
  textAlign: 'center', 
  marginTop: 0, 
  marginBottom: 20
};


const { TabPane } = Tabs;
const { Content } = Layout;

export enum LiveAuctionViewState {
  All = '0',
  Participated = '1',
  Ended = '2',
  Resale = '3',
}

export const SalesListView = () => {
  const [activeKey, setActiveKey] = useState(LiveAuctionViewState.All);
  const { isLoading } = useMeta();
  const { connected } = useWallet();
  const { auctions, hasResaleAuctions } = useAuctionsList(activeKey);

  return (
    <>
      <Banner
        src="/Solana_NFT_banner.gif"
        headingText="Explore Thousands Of Digital Art And Collectibles."
        subHeadingText="Buy and sell NFTs and browse our massive collection of digital art and collectibles by top artists from around the world."
        actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}
        useBannerBg
      />
      <Layout>
        <Content style={{ display: 'flex', flexWrap: 'wrap' }}>

          <Col style={{ width: '100%', marginTop: 50, marginLeft: 80 , marginBottom: 50}}>
         
            <Row>
              <Tabs
                activeKey={activeKey}
                onTabClick={key => setActiveKey(key as LiveAuctionViewState)}
              >
                <TabPane
                  tab={
                    <>
                      <span className="live"></span> Live
                    </>
                  }
                  key={LiveAuctionViewState.All}
                ></TabPane>
                {hasResaleAuctions && (
                  <TabPane
                    tab="Secondary Marketplace"
                    key={LiveAuctionViewState.Resale}
                  ></TabPane>
                )}
                <TabPane tab="Ended" key={LiveAuctionViewState.Ended}></TabPane>
                {connected && (
                  <TabPane
                    tab="Participated"
                    key={LiveAuctionViewState.Participated}
                  ></TabPane>
                )}
              </Tabs>
            </Row>
            <Row>
              <div className="artwork-grid">
                {isLoading &&
                  [...Array(10)].map((_, idx) => <CardLoader key={idx} />)}
                {!isLoading &&
                  auctions.map(auction => (
                    <Link
                      key={auction.auction.pubkey}
                      to={`/auction/${auction.auction.pubkey}`}
                    >
                      <AuctionRenderCard auctionView={auction} />
                    </Link>
                  ))}
              </div>
            </Row>
          </Col>
          <Col  style={{ width: '100%', marginTop: 50, marginLeft: 80 , marginBottom: 50}}>
          <Row>
            <h1 style={{color: 'white', textAlign: 'center'}}>Browse by category</h1>
              <div className="artwork-grid" >
                    <Link
                      to={`/category`}
                      key={'category'}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#ff8000'}}>
                          <img src={'arts.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={ cardTitle}>Arts</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>               
            
                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#b700ff'}}>
                          <img src={'cards.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Cards</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>  

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: ' #1fa9ff'}}>
                          <img src={'games.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Games</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>         

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#00ff6e'}}>
                          <img src={'sports.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Sports</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link> 

                    {/*  
                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#002aff'}}>
                          <img src={'tiktok.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Tiktok</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>    
 */}
                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#ffd500'}}>
                          <img src={'memes.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Memes</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>  


                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#ff0037'}}>
                          <img src={'fashion.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Fashion</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>    

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#314cff'}}>
                          <img src={'ticketing.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Ticketing</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>   

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#3ec420'}}>
                          <img src={'music.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Music & SFX</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>                                                 
              

              <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#e44d23'}}>
                          <img src={'virtual-worlds.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Virtual Worlds</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link> 

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#852bfa'}}>
                          <img src={'domain-name.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Domain Names</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>  

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#ff00ea'}}>
                          <img src={'collectibles.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Collectibles</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link> 

                    <Link
                      to={`/`}
                    >
                     <Card hoverable={true} className={`auction-render-card`} bordered={false} style={ cardStyle }>
                      <div className={'card-art-info'} >
                        <div className="auction-gray-wrapper" style={{backgroundColor: '#00a043'}}>
                          <img src={'metaverse.png'} style={ cardImg } />                                           
                          <div className={'art-name'} style={cardTitle}>Metaverse NFTs</div>                        
                        </div>
                      </div>
                    </Card>                    
                    </Link>         
                    </div>                       
            </Row>
          </Col>
        </Content>       
      </Layout>
      <Banner
        src="/banner-7.png"
        headingText="Start your own collection today"
        subHeadingText="Sandora is a shared liquidity NFT market smart contract which is used by multiple websites to provide the users the best possible experience."
        actionComponent={<HowToBuyModal buttonClassName="secondary-btn" />}
        useBannerBg
      />
      <div className='widget-container'>

        <div className='elementor-widget-container-4F5CEB'>
        <div className='infobox-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M18.0001 25.5C23.4931 25.5 28.2976 27.8625 30.9106 31.3875L28.1476 32.694C26.0206 30.174 22.2706 28.5 18.0001 28.5C13.7296 28.5 9.97956 30.174 7.85256 32.694L5.09106 31.386C7.70406 27.861 12.5071 25.5 18.0001 25.5ZM18.0001 3C19.9892 3 21.8968 3.79018 23.3034 5.1967C24.7099 6.60322 25.5001 8.51088 25.5001 10.5V15C25.5 16.9327 24.7538 18.7907 23.4171 20.1867C22.0804 21.5826 20.2564 22.4086 18.3256 22.4925L18.0001 22.5C16.0109 22.5 14.1033 21.7098 12.6968 20.3033C11.2902 18.8968 10.5001 16.9891 10.5001 15V10.5C10.5002 8.56731 11.2464 6.70926 12.5831 5.31333C13.9197 3.91741 15.7437 3.09138 17.6746 3.0075L18.0001 3ZM18.0001 6C16.8522 5.99994 15.7478 6.43849 14.9127 7.22593C14.0776 8.01336 13.5749 9.09016 13.5076 10.236L13.5001 10.5V15C13.4989 16.1714 13.9546 17.297 14.7702 18.1377C15.5858 18.9785 16.6972 19.468 17.868 19.5024C19.0389 19.5368 20.177 19.1132 21.0405 18.3218C21.9041 17.5304 22.425 16.4334 22.4926 15.264L22.5001 15V10.5C22.5001 9.30653 22.026 8.16193 21.182 7.31802C20.3381 6.47411 19.1935 6 18.0001 6Z" fill="white"></path></svg>
        </div>
          <div className='infobox-content'>
            <h3>Discover Top Artists and Creators</h3>
            <p>Explore beautiful digital art by talented artists from the world.</p>
          </div>
        </div>

        <div className='elementor-widget-container-FF6D3D'>
        <div className='infobox-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M33 19.4985V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H19.5V19.4985H33ZM16.5 19.4985V31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V19.4985H16.5ZM16.5 4.5V16.4985H3V6C3 5.60218 3.15804 5.22064 3.43934 4.93934C3.72064 4.65804 4.10218 4.5 4.5 4.5H16.5ZM31.5 4.5C31.8978 4.5 32.2794 4.65804 32.5607 4.93934C32.842 5.22064 33 5.60218 33 6V16.4985H19.5V4.5H31.5Z" fill="white"></path></svg>        </div>
          <div className='infobox-content'>
            <h3>Buy And Sell Your NFTs</h3>
            <p>Easily buy and sell your NFTs in the largest marketplace.</p>
          </div>
        </div>

        <div className='elementor-widget-container-25CFAA'>
        <div className='infobox-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M21 9H24V12H31.5C31.8978 12 32.2794 12.158 32.5607 12.4393C32.842 12.7206 33 13.1022 33 13.5V24.75L24 19.5L24.054 31.593L27.3885 28.368L30.0615 33H13.5C13.1022 33 12.7206 32.842 12.4393 32.5607C12.158 32.2794 12 31.8978 12 31.5V24H9V21H12V13.5C12 13.1022 12.158 12.7206 12.4393 12.4393C12.7206 12.158 13.1022 12 13.5 12H21V9ZM33 26.007V31.5C33.0001 31.6563 32.9758 31.8117 32.928 31.9605L29.988 26.8695L33 26.007ZM6 21V24H3V21H6ZM6 15V18H3V15H6ZM6 9V12H3V9H6ZM6 3V6H3V3H6ZM12 3V6H9V3H12ZM18 3V6H15V3H18ZM24 3V6H21V3H24Z" fill="white"></path></svg>        </div>
          <div className='infobox-content'>
            <h3>Grow Your Digital Art Collection</h3>
            <p>Add new, trending and rare artwork to your collection.</p>
          </div>
        </div>

        <div className='elementor-widget-container-FFCA40'>
        <div className='infobox-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M30 10.5V7.5H6V28.5H30V25.5H18C17.6022 25.5 17.2206 25.342 16.9393 25.0607C16.658 24.7794 16.5 24.3978 16.5 24V12C16.5 11.6022 16.658 11.2206 16.9393 10.9393C17.2206 10.658 17.6022 10.5 18 10.5H30ZM4.5 4.5H31.5C31.8978 4.5 32.2794 4.65804 32.5607 4.93934C32.842 5.22064 33 5.60218 33 6V30C33 30.3978 32.842 30.7794 32.5607 31.0607C32.2794 31.342 31.8978 31.5 31.5 31.5H4.5C4.10218 31.5 3.72064 31.342 3.43934 31.0607C3.15804 30.7794 3 30.3978 3 30V6C3 5.60218 3.15804 5.22064 3.43934 4.93934C3.72064 4.65804 4.10218 4.5 4.5 4.5ZM19.5 13.5V22.5H30V13.5H19.5ZM22.5 16.5H27V19.5H22.5V16.5Z" fill="white"></path></svg>        </div>
          <div className='infobox-content'>
            <h3>Earn Money By Trading NFTs</h3>
            <p>Get paid by selling NFTs with secured payment methods.</p>
          </div>
        </div>

      </div>
    </>
  );
};
