import { useState } from 'react';
import styled from "styled-components";
import IpadMini from './assets/ipad-mini.png'
import Book from './assets/book.png'
import WashingMachine from './assets/washing-machine.png'
import Oven from './assets/oven.png'


const Main = styled.main`
`

const Container = styled.div`
  width: 1201px;
  height: 1154px;
  border: 1px solid blue;
  margin: 24px auto;
`

const ItemTitle = styled.div`
  width: 94px;
  height: 28px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
`

const ItemList = styled.figure`
  width: 1200px;
  height: 282px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
`

const ItemCard = styled.img`
  width: 282px;
  height: 282px;
`

const PostGroup = styled.div`
  display: flex;
  gap: 24px;
`

const Post = styled.div`
  width: 282px;
  height: 64px;
  margin-top: 16px;
`

const PostTitle = styled.h4`
  width: 282px;
  height: 17px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.71px;
  font-family: Pretendard;
  margin: 0;
`

const Price = styled.div`
  width: 81px;
  height: 19px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19.09px;
  font-family: Pretendard;
  margin-top: 6px;
`

const CountLike = styled.div`
  width: 282px;
  height: 16px;
  display: flex;
  gap: 4px;
  margin-top: 6px;
`

const LikeButton = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19.09px;
  font-family: Pretendard;
  cursor: pointer;
`

const Count = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 19.09px;
  font-family: Pretendard;
`

const Items = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
      <Main>
      <Container>
        <ItemTitle>베스트 상품</ItemTitle>
        <ItemList>
          <ItemCard src={IpadMini}></ItemCard>
          <ItemCard src={Book}></ItemCard>
          <ItemCard src={WashingMachine}></ItemCard>
          <ItemCard src={Oven}></ItemCard>
        </ItemList>
        <PostGroup>
        <Post>
          <PostTitle>아이패드 미니 팝니다</PostTitle>
          <Price>500,000원</Price>
          <CountLike>
            <LikeButton onClick={handleClick}>{count === 0 ? '♡' : '♥'} </LikeButton> 
            <Count>{count}</Count>
          </CountLike>
        </Post>
        <Post>
          <PostTitle>책 팝니다</PostTitle>
          <Price>50,000원</Price>
          <CountLike>
            <LikeButton onClick={handleClick}>{count === 0 ? '♡' : '♥'} </LikeButton> 
            <Count>{count}</Count>
          </CountLike>
        </Post>
        <Post>
          <PostTitle>세탁기 팝니다</PostTitle>
          <Price>500,000원</Price>
          <CountLike>
            <LikeButton onClick={handleClick}>{count === 0 ? '♡' : '♥'} </LikeButton> 
            <Count>{count}</Count>
          </CountLike>
        </Post>
        <Post>
          <PostTitle>오븐 팝니다</PostTitle>
          <Price>300,000원</Price>
          <CountLike>
            <LikeButton onClick={handleClick}>{count === 0 ? '♡' : '♥'} </LikeButton> 
            <Count>{count}</Count>
          </CountLike>
        </Post>
        </PostGroup>
      </Container>
      </Main>
  );
};

export default Items;