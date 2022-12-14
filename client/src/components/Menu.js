import styled from "styled-components";
import LucasTube from "../img/logo.png";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Menu = ({ darkMode, setDarkMode }) => {
  const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;
  `;
  const Wrapper = styled.div`
    padding: 18px 26px;
  `;
  const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 25px;
  `;
  const Img = styled.img`
    height: 25px;
  `;
  const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
  `;

  const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({ theme }) => theme.soft};
  `;

  const Login = styled.div``;
  const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
  `;

  const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
  `;
const Navigationlink = styled(Link)`
  text-decoration: none;
  color : ${({ theme }) => theme.text};
  `


  return (
    <Container>
      <Wrapper>
        <Navigationlink to="/">
          <Logo>
            <Img src={LucasTube} />
            LucasTube
          </Logo>
        </Navigationlink>
        <Navigationlink to="/">
        <Item>
          <HomeIcon />
          Accueil
        </Item>
        </Navigationlink>
        <Item>
          <ExploreOutlinedIcon />
          Explorer
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Abonnements
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlinedIcon />
          Biblioth??que
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          Historique
        </Item>
        <Hr />
        <Login>
          Connectez-vous ?? YouTube pour cliquer sur "J'aime", ajouter un
          commentaire et vous abonner.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              SE CONNECTER
            </Button>
          </Link>
        </Login>
        <Hr />
        <Title>EXPLORER</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Musique
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sport
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Jeux vid??o
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Films et TV
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          Actualit??s
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          En direct
        </Item>
        <Hr />
        <Item>
          <SettingsOutlinedIcon />
          Param??tres
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Historique des signal...
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Aide
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon />
          Th??me
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
