import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';

import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
   height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 768px) {
         display: flex;
         flex-direction: column;
         width: 80%;
      }
`;

export const FormContainer = styled.form`
   height: 100px;
   min-width: 500px;

   @media screen and (max-width: 768px) {
         display: flex;
         flex-direction: column;
      }
   
`;

export const PaymentButton = styled(Button)`
   margin-left: auto;
   margin-top: 30px;

   @media screen and (max-width: 768px) {
      padding-right: 100px;
   }
`;

export const CardHeader = styled.h2`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-bottom: 30px;
   padding-left: 140px;

   @media screen and (max-width: 768px) {
      padding-right: 100px;
      font-size: 25px;
   }
`;

export const StyledCardElement = styled(CardElement)`
  height: 40px;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 16px;
  color: #444;
  letter-spacing: 0.025em;

  @media screen and (max-width: 768px) {
      width: 90%;
      padding-left: 150px;
   }
`;

