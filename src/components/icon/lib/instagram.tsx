import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const instagram = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 24 24" {...rest}>
      <Path
        d="M12.0002 0.333252C15.17 0.333252 15.5655 0.344919 16.8092 0.403252C18.0517 0.461585 18.8975 0.656419 19.6418 0.945752C20.4118 1.24209 21.0605 1.64342 21.7092 2.29092C22.3024 2.87413 22.7614 3.57961 23.0543 4.35825C23.3425 5.10142 23.5385 5.94842 23.5968 7.19092C23.6517 8.43459 23.6668 8.83009 23.6668 11.9999C23.6668 15.1698 23.6552 15.5653 23.5968 16.8089C23.5385 18.0514 23.3425 18.8973 23.0543 19.6416C22.7623 20.4207 22.3031 21.1263 21.7092 21.7089C21.1258 22.302 20.4204 22.761 19.6418 23.0541C18.8987 23.3423 18.0517 23.5383 16.8092 23.5966C15.5655 23.6514 15.17 23.6666 12.0002 23.6666C8.83033 23.6666 8.43483 23.6549 7.19116 23.5966C5.94866 23.5383 5.10283 23.3423 4.3585 23.0541C3.57954 22.7618 2.87394 22.3027 2.29116 21.7089C1.6978 21.1258 1.23875 20.4203 0.945996 19.6416C0.656663 18.8984 0.461829 18.0514 0.403496 16.8089C0.348663 15.5653 0.333496 15.1698 0.333496 11.9999C0.333496 8.83009 0.345163 8.43459 0.403496 7.19092C0.461829 5.94725 0.656663 5.10259 0.945996 4.35825C1.23794 3.57913 1.6971 2.87346 2.29116 2.29092C2.87411 1.69736 3.57966 1.23827 4.3585 0.945752C5.10283 0.656419 5.9475 0.461585 7.19116 0.403252C8.43483 0.348419 8.83033 0.333252 12.0002 0.333252ZM12.0002 6.16659C10.4531 6.16659 8.96934 6.78117 7.87537 7.87513C6.78141 8.96909 6.16683 10.4528 6.16683 11.9999C6.16683 13.547 6.78141 15.0307 7.87537 16.1247C8.96934 17.2187 10.4531 17.8333 12.0002 17.8333C13.5473 17.8333 15.031 17.2187 16.125 16.1247C17.2189 15.0307 17.8335 13.547 17.8335 11.9999C17.8335 10.4528 17.2189 8.96909 16.125 7.87513C15.031 6.78117 13.5473 6.16659 12.0002 6.16659ZM19.5835 5.87492C19.5835 5.48814 19.4299 5.11721 19.1564 4.84372C18.8829 4.57023 18.5119 4.41659 18.1252 4.41659C17.7384 4.41659 17.3675 4.57023 17.094 4.84372C16.8205 5.11721 16.6668 5.48814 16.6668 5.87492C16.6668 6.26169 16.8205 6.63263 17.094 6.90612C17.3675 7.17961 17.7384 7.33325 18.1252 7.33325C18.5119 7.33325 18.8829 7.17961 19.1564 6.90612C19.4299 6.63263 19.5835 6.26169 19.5835 5.87492ZM12.0002 8.49992C12.9284 8.49992 13.8187 8.86867 14.475 9.52505C15.1314 10.1814 15.5002 11.0717 15.5002 11.9999C15.5002 12.9282 15.1314 13.8184 14.475 14.4748C13.8187 15.1312 12.9284 15.4999 12.0002 15.4999C11.0719 15.4999 10.1817 15.1312 9.52529 14.4748C8.86891 13.8184 8.50016 12.9282 8.50016 11.9999C8.50016 11.0717 8.86891 10.1814 9.52529 9.52505C10.1817 8.86867 11.0719 8.49992 12.0002 8.49992Z"
        fill={color}
      />
    </SVG>
  );
};
