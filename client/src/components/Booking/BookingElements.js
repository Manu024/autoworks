import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const BookingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100%;
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BookingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  z-index: 1000;
  width: 60%;
  padding: 20px 64px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 600px) {
    width: 80%;
    align-items: flex-start;
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 2.3rem;
  right: 4rem;
`;

export const Icon = styled(FaTimes)`
  font-size: 1.5rem;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #e8175d;
  }
`;

export const BookingHeading = styled.h1`
  justify-self: center;
  padding-bottom: 16px;
  color: #e8175d;
`;
export const BookingForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px 0;
`;
export const BookingLabel = styled.label`
  font-size: 1.1rem;
  padding: 12px 0;
`;
export const BookingInput = styled.input`
  padding-bottom: 12px;
  border: none;
  outline: none;
  width: 65%;
  border-bottom: 3px solid #544a59;

  &:focus,
  &:hover {
    border-bottom-color: #e8175d;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const BookingLabelServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  overflow-y: scroll;
`;
export const BookingLabelServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export const BookingServiceLabel = styled.label`
  &:hover {
    color: #e8175d;
  }
`;
export const BookingServiceInput = styled.input`
  margin-right: 12px;
  width: 12px;
  height: 12px;
  &:checked {
    background: #e8175d;
  }
`;

export const BookingBtnWrapper = styled.div`
  padding: 20px 0;
`;
export const BookingBtn = styled.button`
  padding: 12px 64px;
  background: #e8175d;
  outline: none;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #000;
    color: #e8175d;
  }
  &:disabled {
    background: rgba(0, 0, 0, 0.8);
    color: #e8175d;
    cursor: not-allowed;
  }
`;
