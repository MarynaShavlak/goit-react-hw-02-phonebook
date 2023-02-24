import styled from 'styled-components';

export const ContactsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 30px;
`;

export const ContactItem = styled.li`
  margin: 0;
  display: flex;
  column-gap: 10px;
  align-items: center;
  font-size: 30px;
  
  .contact__name {
    font-style: italic;
   }

   .contact__number {
    flex-grow:1;
  }
`;
export const DeleteContactButton = styled.button`
  display: flex;
  column-gap: 10px;
  min-width: 40px;
  align-self: center;
  align-items: center;
  padding: 10px 30px;
  background-color: #fde7f0;
  color: black;
  border: 5px solid transparent;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  box-shadow: 5px 5px 8px 1px rgba(112, 111, 111, 1);
  cursor: pointer;
  transition: 250ms background-color ease-in, 250ms color ease-in;
  &:hover {
    background-color: #f787b4;
    color: white;
  }
  `;
