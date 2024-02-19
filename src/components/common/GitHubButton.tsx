import { theme } from '@/styles';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

/**
 * @default {HTMLButtonElement}
 */
export const GitHubButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton {...props}>
      <GitHubIcon />
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 12px 65.5px;
  border-radius: 100px;

  display: flex;
  gap: 8px;

  background-color: ${theme.palette.black};
  color: ${theme.palette.white};

  ${theme.typo.label1};
`;

const GitHubIcon = () => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_392_3205)">
        <path
          d="M9.5 0C4.5305 0 0.5 4.02975 0.5 9C0.5 12.9765 3.0785 16.35 6.65525 17.5402C7.1045 17.6235 7.25 17.3445 7.25 17.1075V15.432C4.7465 15.9765 4.22525 14.37 4.22525 14.37C3.81575 13.3298 3.2255 13.053 3.2255 13.053C2.40875 12.4942 3.28775 12.5062 3.28775 12.5062C4.1915 12.5692 4.667 13.434 4.667 13.434C5.4695 14.8095 6.77225 14.412 7.286 14.1818C7.36625 13.6005 7.5995 13.203 7.8575 12.9788C5.85875 12.75 3.75725 11.9782 3.75725 8.5305C3.75725 7.54725 4.109 6.74475 4.68425 6.11475C4.59125 5.8875 4.283 4.97175 4.772 3.73275C4.772 3.73275 5.528 3.49125 7.24775 4.65525C7.9655 4.45575 8.735 4.356 9.5 4.35225C10.265 4.356 11.0352 4.45575 11.7545 4.65525C13.4727 3.49125 14.2272 3.73275 14.2272 3.73275C14.717 4.9725 14.4087 5.88825 14.3158 6.11475C14.8932 6.74475 15.242 7.548 15.242 8.5305C15.242 11.9872 13.1368 12.7485 11.1327 12.9713C11.4552 13.2502 11.75 13.7978 11.75 14.6378V17.1075C11.75 17.3468 11.894 17.628 12.3507 17.5395C15.9245 16.3477 18.5 12.975 18.5 9C18.5 4.02975 14.4703 0 9.5 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_392_3205">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
