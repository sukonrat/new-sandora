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
    </>
  );
};
