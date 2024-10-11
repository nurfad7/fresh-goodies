import { FC } from "react";

interface IconProps {
  icon: string;
}

const Icon: FC<IconProps> = ({icon}) => {
  switch (icon) {
    case "search": return (
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    case "sliders": return (
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11V3" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 21V13" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15C7.65685 15 9 16.3431 9 18Z" stroke="#000000" strokeWidth="3"/>
        <path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke="#000000" strokeWidth="3"/>
      </svg>)
    case "heart": return (
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    case "red-heart": return (
      <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#FF0000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>)
    case "substract": return (
      <svg fill="#000000" height="1rem" width="1rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <g>
            <path d="M490.667,234.667H21.333C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h469.333
              c11.782,0,21.333-9.551,21.333-21.333C512,244.218,502.449,234.667,490.667,234.667z"/>
          </g>
        </g>
      </svg>)
    case "substract-white": return (
      <svg fill="#FFFFFF" height="1rem" width="1rem" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <g>
          <g>
            <path d="M490.667,234.667H21.333C9.551,234.667,0,244.218,0,256c0,11.782,9.551,21.333,21.333,21.333h469.333
              c11.782,0,21.333-9.551,21.333-21.333C512,244.218,502.449,234.667,490.667,234.667z"/>
          </g>
        </g>
      </svg>)
    case "add": return (
      <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
          <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>      
        </g>
      </svg>)
    case "add-white": return (
      <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g>
          <line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"/>
          <line fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"/>      
        </g>
      </svg>)
    case "cross": return (
      <svg width="1.2rem" height="1.2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
      </svg>)
    case "shipping": return (
      <svg fill="#000000" width="1.4rem" height="1.4rem" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z"/>
      </svg>)
    default: return
  }
}

export default Icon;