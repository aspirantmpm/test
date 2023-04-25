import styled from 'styled-components';
import '@fontsource/montserrat';

export const Card = styled.div`
  width: 380px;
  height: 460px;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  padding: 28px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 76px;
  margin-top: 20px;
  margin-left: 20px;
  position: absolute;
`;

export const Picture = styled.img`
  position: absolute;
  width: 308px;
  height: 168px;
`;

export const Line = styled.div`
  height: 8px;
  width: 380px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f;
  box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  position: absolute;
  margin-top: 186px;
`;

export const AvatarBox = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 85.92px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f;
  box-shadow: 0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 40px;
`;

export const Tweets = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 256px;
  margin-bottom: 0;
`;

export const Followers = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin-top: 16px;
  margin-bottom: 0;
`;

export const Button = styled.button`
  background: #5cd3a8;
  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px #00000040;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  width: 196px;
  border-radius: 10px;
  margin-top: 26px;
`;
