import {
  Card,
  Logo,
  Container,
  Picture,
  Line,
  AvatarBox,
  Avatar,
  Tweets,
  Followers,
  Button,
} from '../globalStyle/globalStyle';
import logo from '../globalStyle/logo.png'
import picture from '../globalStyle/picture.png';
import avatar from '../globalStyle/avatar.jpg';

export const UserCard = ({ image, openModal }) => {
  //   const { webformatURL, largeImageURL, tags } = image;
  return (
    <Card>
      <Logo src={logo} alt="logo" />
      <Container>
        <Picture src={picture} alt="Background" />
        <Line></Line>
        <AvatarBox>
          <Avatar src={avatar} alt="Avatar" />
        </AvatarBox>
        <Tweets>777 TWEETS</Tweets>
        <Followers>100,501 FOLLOWERS</Followers>
        <Button>Follow</Button>
      </Container>
    </Card>
  );
};
