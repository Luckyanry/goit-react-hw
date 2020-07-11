import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: max-content;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 5px 0px rgba(191, 205, 222, 0.75);
  text-align: center;
  margin: 0 auto;
`;

const Desc = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 32px;
  padding: 30px 0 22px;
  margin: 0;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.4);
  margin: 0 auto 24px;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #122236;
  margin: 0;
`;

const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  width: 83px;
  height: max-content;
  border-top: 1px solid rgb(228, 233, 240);
  background-color: rgb(243, 246, 249);
  text-align: center;
  padding: 12px 0 15px;

  :first-child {
    border-bottom-left-radius: 4px;
  }

  :nth-child(2) {
    border-left: 1px solid rgb(228, 233, 240);
    border-right: 1px solid rgb(228, 233, 240);
  }

  :last-child {
    border-bottom-right-radius: 4px;
  }
`;

const Label = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 400;
`;

const Quantity = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #1f3349;
`;

export { Container, Desc, Avatar, Img, Name, StatsList, Item, Label, Quantity };
