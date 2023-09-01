import styled from 'styled-components';

// Todo Template
export const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;

  width: 800px;
  max-width: 1200px;
  min-height: 800px;

  background: #f9f7f7;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(75, 102, 130, 0.3);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  margin-top: 40px;
  margin-bottom: 30px;
  padding: 30px;
`;

// Todo Input
export const StInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 3px solid #007bff;
  border-radius: 8px;
  margin: 20px auto;

  font-size: 30px;
  width: 95%;
  height: 100px;
  margin-bottom: 10px;
  padding: 0px 20px 0px 20px;
  gap: 10px;
`;

export const StInput = styled.input`
  width: 30%;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 0px;
  border-radius: 13px;
  padding: 5px;
`;

export const StAddButton = styled.button`
  margin-left: auto;
  font-size: 20px;
  border-radius: 13px;
  padding: 7px;
  transition: background-color 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px;

  &:hover {
    background-color: #007bff;
  }
`;

// Todo Item
export const StTodoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: fit-content;
  height: fit-content;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

export const StButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
export const StButton = styled.button`
  padding: 5px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: #0056b3;
  }
`;

// Todo List
export const StList = styled.div`
  position: relative;
  border: 1px solid white;
`;

export const StTodo = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const StWorking = styled.h3`
  position: absolute;
  background-color: #007bff; /* 배경색 예시, 원하는 색상으로 변경 가능 */
  padding: 5px 10px;
  border-radius: 10px;
  color: white;
`;

export const TodoDetailBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailPage = styled.div`
  width: 85vw;
  max-width: 750px;
  padding: 20px;
  margin-bottom: 120px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #e8e8e8;
  position: relative;
  box-shadow: 0 0 10px 3px rgba(75, 102, 130, 0.3);
`;
