import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Modal, Popover, Select} from 'antd';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { HowToBuyModal } from '../HowToBuyModal';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { ConnectButton } from '@oyster/common';
import { MobileNavbar } from '../MobileNavbar';

const btnStyle: React.CSSProperties = {
  border: 'none',
  height: 40,
  paddingRight: 50,
};

const menuIcon: React.CSSProperties = {
  width: 35 , 
  paddingRight:10,
};


const getDefaultLinkActions = (connected: boolean) => {
  return [
    <Link to={`/`} key={'explore'}>
      <Popover
        trigger="click"
        placement="bottomLeft"
        content={
          <div
            style={{
              width: 200,
            }}
          >
             <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
            <img src={'nft.png'} style={menuIcon}/>
              All NFTS
            </Button>
         </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'arts.png'} style={menuIcon}/>
              Arts
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'cards.png'} style={menuIcon}/>
             Cards
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
               <img src={'games.png'} style={menuIcon}/>
              Games
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'sports.png'} style={menuIcon}/>
              Sports
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'tiktok.png'} style={menuIcon}/>
              Tiktok
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'memes.png'} style={menuIcon}/>
              Memes
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'fashion.png'} style={menuIcon}/>
              Fashion
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'ticketing.png'} style={menuIcon}/>
              Ticketing
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'music.png'} style={menuIcon}/>
              Music & SFX
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'virtual-worlds.png'} style={menuIcon}/>
              Virtual Worlds
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'domain-name.png'} style={menuIcon}/>
              Domain names
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'collectibles.png'} style={menuIcon}/>
              Collectibles
            </Button>
            </Link>

            <Link to={`/`}>
            <Button
              className="metaplex-button-default"
              style={btnStyle}
            >
              <img src={'metaverse.png'} style={menuIcon}/>
              Metaverse NFTs
            </Button>
            </Link>
          </div>
        }
      >
       <Button className="app-btn"> Explore</Button>

      </Popover>
    
  
    </Link>,

    <Link to={`/artworks`} key={'artwork'}>
      <Button className="app-btn">{connected ? 'My Items' : 'Artwork'}</Button>
    </Link>,
    <Link to={`/artists`} key={'artists'}>
      <Button className="app-btn">Creators</Button>
    </Link>,
    <Link to={`/analytics`} key={'analytics'}>
    <Button className="app-btn">Stats</Button>
  </Link>,
     <input 
     type = "search" 
     placeholder = "  Search " 
    style={{width: 250, height: 30, borderRadius: 10, marginTop: 20}}
   />
  ];
};

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {
  const { connected } = useWallet();
  return ( 
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
      }}
    >
      {getDefaultLinkActions(connected)}
    </div>
  );
};

export const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Modal
          title={<img src={'/sandora-logo.png'} />}
          visible={isModalVisible}
          footer={null}
          className={'modal-box'}
          closeIcon={
            <img
              onClick={() => setIsModalVisible(false)}
              src={'/modals/close.svg'}
            />
          }
        >
          <div className="site-card-wrapper mobile-menu-modal">
            <Menu onClick={() => setIsModalVisible(false)}>
              {getDefaultLinkActions(connected).map((item, idx) => (
                <Menu.Item key={idx}>{item}</Menu.Item>
              ))}
            </Menu>
            <div className="actions">
              {!connected ? (
                <div className="actions-buttons">
                  <ConnectButton
                    onClick={() => setIsModalVisible(false)}
                    className="secondary-btn"
                  />
                  <HowToBuyModal
                    onClick={() => setIsModalVisible(false)}
                    buttonClassName="black-btn"
                  />
                </div>
              ) : (
                <>
                  <CurrentUserBadgeMobile
                    showBalance={false}
                    showAddress={true}
                    iconSize={24}
                    closeModal={() => {
                      setIsModalVisible(false);
                    }}
                  />
                  <Notifications />
                  <Cog />
                </>
              )}
            </div>
          </div>
        </Modal>
        <MenuOutlined
          onClick={() => setIsModalVisible(true)}
          style={{ fontSize: '1.4rem' }}
        />
      </>
    );

  return <DefaultActions />;
};

export const LogoLink = () => {
  return (
    <Link to={`/`}>
      <img src={'sandora-logo.png'} style={{width: 200 }}/>
    </Link>
  );
};

export const AppBar = () => {
  const { connected } = useWallet();
  return (
    <>
      <MobileNavbar />
      <div id="desktop-navbar">
        <div className="app-left">
          <LogoLink />
          &nbsp;&nbsp;&nbsp;
          <MetaplexMenu />
        </div>
        <div className="app-right">
          {!connected && (
            <HowToBuyModal buttonClassName="modal-button-default" />
          )}
          {!connected && (
            <ConnectButton style={{ height: 48 }} allowWalletChange />
          )}
          {connected && (
            <>
              <CurrentUserBadge
                showBalance={false}
                showAddress={true}
                iconSize={24}
              />
              <Notifications />
              <Cog />
            </>
          )}
        </div>
      </div>
    </>
  );
};
