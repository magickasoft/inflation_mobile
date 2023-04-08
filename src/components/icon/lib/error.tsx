import React from 'react';
import SVG, {G, Path} from 'react-native-svg';

export const error = ({...rest}) => {
  return (
    <SVG viewBox="0 0 128 128" {...rest}>
      <G opacity="0.3">
        <Path
          opacity="0.3"
          d="M126.187 49.6883C125.303 43.6086 122.575 37.9465 118.37 33.4674C114.165 28.9883 108.687 25.908 102.675 24.643C98.4056 23.7325 94.5599 21.429 91.7423 18.0947C87.2999 12.8489 81.4844 8.94403 74.9476 6.81759C68.4107 4.69115 61.4108 4.42722 54.7323 6.05536C48.0539 7.6835 41.9608 11.1394 37.1361 16.0357C32.3113 20.932 28.9454 27.0752 27.4157 33.7769C26.7642 36.6081 25.4904 39.2587 23.6868 41.5363C21.8832 43.8138 19.5951 45.6612 16.9886 46.9443C13.0078 48.931 9.55777 51.8377 6.92417 55.4234C4.29057 59.0092 2.54925 63.1709 1.84447 67.5637C1.13969 71.9565 1.49173 76.454 2.87143 80.6837C4.25113 84.9133 6.61878 88.7533 9.77824 91.8856C12.9377 95.018 16.798 97.3524 21.0394 98.6955C25.2808 100.039 29.7812 100.352 34.1678 99.6092C38.5543 98.8666 42.7008 97.0894 46.2637 94.425C49.8266 91.7605 52.7034 88.2855 54.6557 84.2878C55.4324 82.693 56.6438 81.3501 58.1505 80.4139C59.6571 79.4777 61.3976 78.9863 63.1714 78.9962C63.4581 78.9984 63.7446 78.9972 64.0311 78.9928C66.844 79.0095 69.5675 79.9826 71.7541 81.7522C73.9406 83.5218 75.4601 85.9826 76.0629 88.7302C76.7236 91.4438 77.9452 93.989 79.6491 96.2019C81.353 98.4148 83.5014 100.246 85.956 101.579C88.4106 102.911 91.117 103.715 93.9009 103.938C96.6849 104.161 99.4847 103.798 102.12 102.874C105.874 101.558 109.149 99.151 111.527 95.9621C113.905 92.7733 115.277 88.9473 115.468 84.9741C115.647 80.4932 117.23 76.182 119.993 72.6501C122.541 69.4497 124.405 65.7608 125.47 61.8113C126.535 57.8618 126.779 53.7358 126.187 49.6883Z"
          fill="#C9C1F5"
        />
        <Path
          opacity="0.3"
          d="M44.7432 25.4937C45.0362 22.7624 44.3237 20.018 42.7389 17.7743C41.1541 15.5306 38.8058 13.9416 36.1338 13.3047C33.4617 12.6678 30.6491 13.0267 28.2226 14.3143C25.7962 15.6019 23.9223 17.7299 22.9518 20.2997C22.0658 19.5977 21.0002 19.1592 19.8767 19.0341C18.7533 18.9091 17.6174 19.1026 16.5987 19.5926C15.58 20.0825 14.7197 20.8492 14.1161 21.8049C13.5125 22.7606 13.1898 23.8668 13.1851 24.9972C13.1851 25.1706 13.1967 25.3411 13.2112 25.5108C11.1982 26.2072 9.49783 27.5957 8.41312 29.4289C7.32841 31.2621 6.92984 33.4209 7.28842 35.5205C7.64701 37.6202 8.73947 39.5243 10.3711 40.8936C12.0027 42.2629 14.0676 43.0084 16.1976 42.9972H41.8038C43.9381 43.0083 46.0068 42.2597 47.6398 40.8853C49.2728 39.5109 50.3636 37.6004 50.7171 35.4955C51.0706 33.3905 50.6637 31.2285 49.5692 29.3961C48.4748 27.5637 46.7641 26.1804 44.7432 25.4937H44.7432Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M41.8037 39.9969H16.1976C14.0632 39.9992 11.9972 39.2446 10.3667 37.8673C8.73619 36.49 7.64684 34.5792 7.29228 32.4745C7.06775 33.7696 7.13003 35.0982 7.47473 36.3666C7.81942 37.635 8.43814 38.8124 9.28727 39.8158C10.1364 40.8191 11.1953 41.624 12.3892 42.1737C13.5832 42.7234 14.8832 43.0045 16.1976 42.9972H41.8037C43.1182 43.0043 44.4182 42.7231 45.6121 42.1733C46.806 41.6235 47.8649 40.8185 48.714 39.8152C49.5631 38.8118 50.1818 37.6344 50.5266 36.366C50.8713 35.0976 50.9337 33.769 50.7093 32.4738C50.3548 34.5787 49.2655 36.4897 47.6349 37.8671C46.0044 39.2445 43.9382 39.9992 41.8037 39.9969Z"
          fill="#5CBEFF"
        />
        <Path
          opacity="0.3"
          d="M13.2112 28.5111C13.1968 28.3414 13.1851 28.1708 13.1851 27.9974C13.1898 26.8671 13.5125 25.7608 14.1161 24.8051C14.7197 23.8494 15.58 23.0828 16.5987 22.5929C17.6174 22.1029 18.7533 21.9094 19.8768 22.0344C21.0002 22.1595 22.0658 22.598 22.9518 23.2999C23.9081 20.7129 25.779 18.5657 28.2108 17.2643C30.6427 15.9629 33.467 15.5974 36.15 16.2369C38.833 16.8764 41.1889 18.4766 42.7722 20.735C44.3555 22.9935 45.0567 25.7537 44.7432 28.494C46.2716 29.0167 47.6315 29.9402 48.681 31.168C49.7305 32.3959 50.431 33.8831 50.7093 35.4742C51.0755 33.3718 50.6746 31.2078 49.5796 29.376C48.4847 27.5443 46.7684 26.1666 44.7432 25.4937C45.0363 22.7624 44.3237 20.018 42.7389 17.7744C41.1541 15.5307 38.8058 13.9416 36.1338 13.3048C33.4617 12.6679 30.6491 13.0268 28.2227 14.3144C25.7962 15.602 23.9223 17.7299 22.9518 20.2997C22.0658 19.5978 21.0002 19.1592 19.8768 19.0342C18.7533 18.9091 17.6174 19.1027 16.5987 19.5926C15.58 20.0826 14.7197 20.8492 14.1161 21.8049C13.5125 22.7606 13.1898 23.8668 13.1851 24.9972C13.1851 25.1706 13.1968 25.3411 13.2112 25.5109C11.1978 26.192 9.49448 27.5708 8.40896 29.3982C7.32344 31.2256 6.92736 33.381 7.29228 35.4749C7.56907 33.8921 8.2637 32.412 9.30432 31.1877C10.3449 29.9634 11.6937 29.0393 13.2112 28.5111Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M41.8037 43.9971H16.1973C13.8951 44.0081 11.6598 43.2236 9.86941 41.7762C8.07905 40.3289 6.84358 38.3076 6.37198 36.0542C5.90037 33.8008 6.22159 31.4537 7.28128 29.4099C8.34098 27.366 10.0741 25.751 12.1875 24.8379C12.2195 23.6417 12.5563 22.4734 13.1661 21.4438C13.7759 20.4142 14.6385 19.5574 15.6722 18.9544C16.7058 18.3515 17.8763 18.0225 19.0727 17.9985C20.2691 17.9745 21.4518 18.2564 22.5088 18.8174C23.7417 16.3388 25.775 14.3487 28.2794 13.1692C30.7839 11.9897 33.6131 11.6897 36.3092 12.3177C39.0053 12.9458 41.4106 14.4653 43.136 16.6301C44.8613 18.795 45.8057 21.4788 45.8164 24.2471C45.8164 24.4395 45.8115 24.6338 45.8008 24.8315C47.9165 25.7423 49.6525 27.3562 50.7149 29.4C51.7773 31.4438 52.1007 33.792 51.6304 36.0469C51.1601 38.3018 49.9251 40.325 48.1343 41.7737C46.3435 43.2225 44.1071 44.008 41.8037 43.9971H41.8037ZM19.21 19.9971C17.8811 19.9954 16.6058 20.5208 15.6639 21.4582C14.722 22.3955 14.1903 23.6682 14.1855 24.9971C14.1855 25.1411 14.1953 25.2837 14.207 25.4248C14.2262 25.6461 14.1711 25.8675 14.0505 26.054C13.9299 26.2406 13.7507 26.3817 13.541 26.4551C11.751 27.0735 10.2389 28.3076 9.27428 29.9373C8.30966 31.5671 7.95528 33.4864 8.27432 35.3532C8.59336 37.2199 9.56508 38.9127 11.0162 40.1295C12.4673 41.3464 14.3035 42.0082 16.1973 41.9971H41.8037C43.7013 42.008 45.5408 41.3433 46.9931 40.122C48.4454 38.9006 49.4157 37.2023 49.7303 35.3309C50.0448 33.4596 49.6832 31.5373 48.7101 29.9082C47.7369 28.2791 46.2158 27.0495 44.4189 26.4395C44.2037 26.3657 44.0201 26.2207 43.8983 26.0286C43.7765 25.8364 43.7238 25.6084 43.749 25.3823C43.7931 25.0055 43.8156 24.6265 43.8164 24.2471C43.8054 21.8413 42.9523 19.5153 41.4053 17.6728C39.8582 15.8303 37.7148 14.5877 35.3472 14.1606C32.9796 13.7336 30.5372 14.149 28.4439 15.3348C26.3506 16.5206 24.7386 18.402 23.8877 20.6523C23.8322 20.7996 23.7428 20.9316 23.6267 21.0378C23.5106 21.144 23.3711 21.2212 23.2195 21.2633C23.0679 21.3053 22.9085 21.311 22.7543 21.2799C22.6001 21.2487 22.4554 21.1816 22.332 21.084C21.4452 20.3773 20.344 19.9939 19.21 19.9971H19.21Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M41.8038 24.9972C42.8125 24.9961 43.8143 25.1634 44.7678 25.4924L41.8038 24.9972Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M44.7676 26.4927C44.6565 26.4925 44.5463 26.4739 44.4414 26.4375C43.5929 26.1447 42.7013 25.9958 41.8037 25.9971C41.5385 25.9971 41.2841 25.8917 41.0966 25.7042C40.9091 25.5166 40.8037 25.2623 40.8037 24.9971C40.8037 24.7319 40.9091 24.4775 41.0966 24.29C41.2841 24.1024 41.5385 23.9971 41.8037 23.9971C42.9233 23.9958 44.0353 24.1817 45.0937 24.5469C45.3174 24.6241 45.5064 24.778 45.6272 24.9814C45.7481 25.1848 45.793 25.4244 45.7539 25.6578C45.7147 25.8911 45.5942 26.103 45.4136 26.2559C45.233 26.4087 45.0041 26.4926 44.7675 26.4927L44.7676 26.4927Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M13.2098 25.5007C14.1704 25.1663 15.1805 24.9961 16.1976 24.9972L13.2098 25.5007Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M13.21 26.501C12.9737 26.5009 12.7451 26.4172 12.5646 26.2646C12.3841 26.1121 12.2635 25.9006 12.2241 25.6676C12.1847 25.4346 12.229 25.1952 12.3492 24.9917C12.4694 24.7883 12.6578 24.634 12.8809 24.5562C13.9471 24.1848 15.0683 23.9958 16.1973 23.9971C16.4625 23.9971 16.7169 24.1025 16.9044 24.29C17.0919 24.4775 17.1973 24.7319 17.1973 24.9971C17.1973 25.2623 17.0919 25.5167 16.9044 25.7042C16.7169 25.8917 16.4625 25.9971 16.1973 25.9971C15.2924 25.9958 14.3937 26.1472 13.5391 26.4448C13.4334 26.482 13.3221 26.501 13.21 26.501Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M22.9122 20.2632C23.5914 20.7903 24.1501 21.4566 24.5508 22.2173L22.9122 20.2632Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M24.5518 23.2173C24.3695 23.2175 24.1906 23.1678 24.0344 23.0736C23.8783 22.9795 23.7509 22.8444 23.666 22.6831C23.3309 22.0491 22.8649 21.4935 22.2988 21.0532C22.0899 20.8904 21.9542 20.6513 21.9213 20.3884C21.8885 20.1256 21.9613 19.8604 22.1237 19.6512C22.2862 19.442 22.525 19.3057 22.7877 19.2723C23.0505 19.2389 23.3158 19.3112 23.5254 19.4732C24.3162 20.0888 24.9673 20.8654 25.4356 21.7515C25.5157 21.9038 25.5552 22.0742 25.5502 22.2463C25.5452 22.4183 25.4959 22.5862 25.407 22.7336C25.3181 22.881 25.1927 23.003 25.0429 23.0877C24.8931 23.1725 24.7239 23.2171 24.5518 23.2173Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M94.6121 21.6615C94.4558 20.2048 94.8359 18.7412 95.6811 17.5446C96.5263 16.348 97.7788 15.5005 99.2038 15.1608C100.629 14.8211 102.129 15.0126 103.423 15.6993C104.717 16.386 105.717 17.5208 106.234 18.8913C106.707 18.517 107.275 18.2831 107.874 18.2164C108.473 18.1497 109.079 18.2529 109.623 18.5142C110.166 18.7755 110.625 19.1844 110.947 19.6941C111.269 20.2038 111.441 20.7938 111.443 21.3967C111.443 21.4892 111.437 21.5801 111.429 21.6706C112.503 22.042 113.41 22.7826 113.988 23.7603C114.567 24.738 114.779 25.8893 114.588 27.0091C114.397 28.129 113.814 29.1445 112.944 29.8748C112.074 30.6051 110.972 31.0027 109.836 30.9967H96.1798C95.0415 31.0026 93.9382 30.6033 93.0672 29.8703C92.1963 29.1373 91.6146 28.1184 91.426 26.9958C91.2375 25.8731 91.4545 24.7201 92.0382 23.7428C92.6219 22.7655 93.5343 22.0277 94.6121 21.6615V21.6615Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M94.6121 23.6617C94.4558 22.205 94.8359 20.7413 95.6811 19.5447C96.5263 18.3481 97.7787 17.5006 99.2038 17.161C100.629 16.8213 102.129 17.0127 103.423 17.6994C104.717 18.3861 105.717 19.521 106.234 20.8915C106.707 20.5172 107.275 20.2833 107.874 20.2166C108.473 20.1499 109.079 20.2531 109.622 20.5144C110.166 20.7757 110.625 21.1846 110.947 21.6943C111.268 22.204 111.441 22.794 111.443 23.3968C111.443 23.4894 111.437 23.5803 111.429 23.6708C112.209 23.9441 112.905 24.4138 113.451 25.0346C113.996 25.6554 114.372 26.4064 114.543 27.215C114.798 26.0696 114.621 24.8704 114.046 23.8473C113.472 22.8242 112.54 22.0491 111.429 21.6706C111.437 21.5801 111.443 21.4891 111.443 21.3967C111.441 20.7938 111.268 20.2038 110.947 19.6941C110.625 19.1844 110.166 18.7756 109.622 18.5143C109.079 18.253 108.473 18.1498 107.874 18.2164C107.275 18.2831 106.707 18.517 106.234 18.8914C105.724 17.5115 104.726 16.3663 103.429 15.6721C102.132 14.978 100.626 14.783 99.1951 15.1241C97.7641 15.4652 96.5076 16.3187 95.6632 17.5232C94.8187 18.7278 94.4448 20.2 94.6121 21.6615C93.495 22.0355 92.5561 22.8099 91.9765 23.8355C91.3969 24.861 91.2177 26.0649 91.4735 27.2148C91.6449 26.4018 92.0242 25.6471 92.5742 25.0244C93.1243 24.4016 93.8264 23.9321 94.6121 23.6617Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M109.836 28.9965H96.1798C95.0816 28.9975 94.0161 28.623 93.1601 27.9351C92.304 27.2472 91.7089 26.2873 91.4735 25.2146C91.4016 25.5372 91.3635 25.8663 91.3598 26.1967C91.3625 27.4724 91.8718 28.6948 92.7757 29.5949C93.6796 30.4951 94.9041 30.9994 96.1798 30.9967H109.836C110.468 30.998 111.094 30.8749 111.678 30.6344C112.262 30.3939 112.793 30.0407 113.241 29.595C113.688 29.1492 114.043 28.6197 114.286 28.0367C114.529 27.4536 114.655 26.8284 114.656 26.1967C114.653 25.8663 114.615 25.5372 114.543 25.2148C114.307 26.2874 113.712 27.2473 112.856 27.9352C112 28.6231 110.935 28.9975 109.836 28.9965Z"
          fill="#5CBEFF"
        />
        <Path
          opacity="0.3"
          d="M109.836 31.9966H96.1797C94.8712 32.0025 93.5992 31.5653 92.5708 30.7562C91.5424 29.9471 90.8182 28.8137 90.516 27.5405C90.2138 26.2674 90.3515 24.9294 90.9066 23.7445C91.4618 22.5595 92.4016 21.5974 93.5733 21.0147V20.9966C93.5787 19.4539 94.0917 17.956 95.0332 16.734C95.9747 15.512 97.2923 14.6338 98.7825 14.2352C100.273 13.8365 101.853 13.9395 103.279 14.5283C104.705 15.117 105.897 16.1588 106.672 17.4927C107.28 17.2523 107.935 17.1563 108.586 17.2123C109.237 17.2683 109.867 17.4748 110.425 17.8154C110.982 18.156 111.454 18.6216 111.801 19.1753C112.148 19.729 112.362 20.3558 112.426 21.0063C113.601 21.586 114.544 22.5468 115.103 23.7318C115.662 24.9169 115.802 26.2563 115.502 27.5315C115.201 28.8067 114.477 29.9424 113.449 30.7533C112.42 31.5642 111.146 32.0025 109.836 31.9966V31.9966ZM100.598 15.9966C99.2688 15.9949 97.9935 16.5203 97.0516 17.4577C96.1097 18.395 95.578 19.6677 95.5733 20.9966C95.5739 21.1818 95.585 21.3668 95.6065 21.5508C95.6316 21.7768 95.5789 22.0047 95.4571 22.1968C95.3353 22.3889 95.1517 22.5337 94.9365 22.6074C94.0826 22.8968 93.3595 23.4808 92.897 24.2548C92.4344 25.0287 92.2625 25.9421 92.4121 26.8313C92.5617 27.7205 93.023 28.5273 93.7134 29.1073C94.4037 29.6873 95.2781 30.0026 96.1797 29.9966H109.836C110.736 30.0026 111.608 29.6888 112.298 29.111C112.988 28.5332 113.45 27.7291 113.602 26.8422C113.754 25.9553 113.585 25.0433 113.127 24.2689C112.669 23.4946 111.95 22.9083 111.1 22.6147C110.89 22.5416 110.71 22.4006 110.589 22.214C110.469 22.0274 110.413 21.8059 110.433 21.5845C110.438 21.5225 110.443 21.46 110.443 21.3965C110.441 20.9815 110.321 20.5757 110.099 20.2253C109.877 19.8749 109.561 19.5939 109.187 19.4145C108.813 19.2351 108.396 19.1644 107.983 19.2105C107.571 19.2566 107.18 19.4176 106.854 19.6753C106.731 19.7729 106.587 19.8401 106.432 19.8713C106.278 19.9024 106.119 19.8968 105.967 19.8548C105.816 19.8128 105.676 19.7356 105.56 19.6295C105.444 19.5234 105.354 19.3913 105.299 19.2441C104.935 18.2912 104.291 17.4708 103.452 16.8911C102.613 16.3114 101.618 15.9995 100.598 15.9966Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M96.1798 21.3967C95.6418 21.3961 95.1075 21.4854 94.599 21.6608L96.1798 21.3967Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M94.5986 22.6611C94.3621 22.661 94.1332 22.5771 93.9526 22.4243C93.7721 22.2714 93.6516 22.0595 93.6125 21.8262C93.5734 21.5929 93.6182 21.3533 93.739 21.1499C93.8599 20.9465 94.0489 20.7926 94.2725 20.7153C94.8861 20.5038 95.5306 20.396 96.1797 20.3965C96.4449 20.3965 96.6993 20.5018 96.8868 20.6894C97.0743 20.8769 97.1797 21.1313 97.1797 21.3965C97.1797 21.6617 97.0743 21.916 96.8868 22.1036C96.6993 22.2911 96.4449 22.3965 96.1797 22.3965C95.7526 22.3959 95.3285 22.4667 94.9248 22.6059C94.8199 22.6423 94.7097 22.6609 94.5986 22.6611Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M111.43 21.6652C110.918 21.4869 110.379 21.3961 109.836 21.3967L111.43 21.6652Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M111.43 22.6655C111.318 22.6655 111.206 22.6465 111.101 22.6094C110.694 22.468 110.266 22.396 109.836 22.3965C109.571 22.3965 109.316 22.2911 109.129 22.1036C108.941 21.9161 108.836 21.6617 108.836 21.3965C108.836 21.1313 108.941 20.8769 109.129 20.6894C109.316 20.5018 109.571 20.3965 109.836 20.3965C110.491 20.3958 111.141 20.5054 111.759 20.7207C111.982 20.7985 112.17 20.9528 112.29 21.1563C112.411 21.3597 112.455 21.5991 112.416 21.8321C112.376 22.0651 112.256 22.2766 112.075 22.4291C111.895 22.5817 111.666 22.6654 111.43 22.6655Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M106.255 18.8719C105.893 19.153 105.595 19.5084 105.381 19.9141L106.255 18.8719Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M105.381 20.9141C105.209 20.914 105.039 20.8696 104.89 20.7849C104.74 20.7003 104.614 20.5783 104.525 20.4309C104.436 20.2835 104.387 20.1156 104.382 19.9435C104.377 19.7714 104.417 19.601 104.497 19.4487C104.777 18.9176 105.167 18.452 105.641 18.0825C105.85 17.9196 106.116 17.8466 106.379 17.8794C106.642 17.9123 106.882 18.0484 107.044 18.2578C107.207 18.4672 107.28 18.7328 107.248 18.996C107.215 19.2593 107.079 19.4987 106.869 19.6616C106.62 19.8554 106.414 20.1001 106.267 20.3794C106.182 20.5408 106.054 20.676 105.898 20.7703C105.742 20.8645 105.563 20.9142 105.381 20.9141Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M90.7724 58.015C90.3681 56.4755 90.4332 54.8504 90.9592 53.3482C91.4853 51.8459 92.4484 50.5352 93.7247 49.5843C95.0011 48.6334 96.5326 48.0857 98.1225 48.0114C99.7125 47.9372 101.288 48.3399 102.648 49.1678C103.918 47.4872 105.664 46.2281 107.66 45.5541C109.656 44.8802 111.808 44.8228 113.837 45.3893C115.866 45.9559 117.677 47.1201 119.035 48.7306C120.393 50.341 121.235 52.3229 121.45 54.4183C123.128 54.9957 124.546 56.1493 125.453 57.6739C126.36 59.1985 126.697 60.9953 126.403 62.7449C126.11 64.4945 125.206 66.0834 123.852 67.2292C122.498 68.375 120.781 69.0033 119.007 69.0026L91.0061 69.0028C89.5681 69.0036 88.187 68.4409 87.1592 67.4352C86.1313 66.4295 85.5385 65.0611 85.5079 63.6234C85.4773 62.1857 86.0114 60.7933 86.9955 59.7448C87.9797 58.6963 89.3356 58.0753 90.7724 58.015Z"
          fill="#EEF6FF"
        />
        <Path
          opacity="0.3"
          d="M90.7723 61.0153C90.5101 60.0476 90.4413 59.0377 90.5699 58.0434C89.7564 58.1039 88.9667 58.3457 88.2588 58.751C87.5508 59.1562 86.9425 59.7147 86.4783 60.3855C86.0141 61.0564 85.7059 61.8225 85.5761 62.6279C85.4464 63.4333 85.4985 64.2574 85.7285 65.0401C86.0358 63.9221 86.6895 62.9303 87.5957 62.2072C88.5019 61.484 89.6141 61.0667 90.7723 61.0153Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M98.5064 51.003C99.9677 51.0033 101.401 51.4064 102.648 52.168C103.918 50.4875 105.664 49.2283 107.66 48.5543C109.656 47.8804 111.808 47.823 113.837 48.3895C115.866 48.9561 117.677 50.1204 119.035 51.7308C120.393 53.3412 121.235 55.3231 121.45 57.4185C122.686 57.8474 123.788 58.5919 124.647 59.5782C125.506 60.5645 126.092 61.7583 126.347 63.0412C126.722 61.254 126.431 59.3917 125.529 57.8039C124.627 56.2161 123.177 55.0122 121.45 54.4183C121.235 52.3229 120.393 50.3409 119.035 48.7305C117.677 47.1201 115.866 45.9558 113.837 45.3893C111.808 44.8227 109.656 44.8802 107.66 45.5541C105.664 46.228 103.918 47.4872 102.648 49.1677C101.436 48.4298 100.049 48.0281 98.6305 48.0039C97.2118 47.9797 95.8123 48.3338 94.5759 49.0298C93.3395 49.7259 92.3108 50.7387 91.5957 51.9642C90.8805 53.1897 90.5048 54.5836 90.507 56.0024C90.5125 56.4887 90.5639 56.9733 90.6605 57.4499C91.02 55.6333 91.9986 53.9976 93.4294 52.822C94.8602 51.6463 96.6546 51.0034 98.5064 51.003Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M90.7723 55.0146C90.7245 54.8302 90.6963 54.6385 90.6605 54.4496C90.6221 54.6447 90.5938 54.8432 90.5699 55.0431C90.6387 55.0376 90.7029 55.0176 90.7723 55.0146Z"
          fill="#5CBEFF"
        />
        <Path
          opacity="0.3"
          d="M119.007 66.0023L91.0061 66.0024C89.8161 66.0019 88.6584 65.6154 87.7067 64.9009C86.7551 64.1864 86.061 63.1824 85.7285 62.0398C85.5881 62.5151 85.5135 63.0074 85.5065 63.503C85.5065 64.9616 86.0859 66.3605 87.1173 67.3919C88.1487 68.4233 89.5475 69.0027 91.0061 69.0027L119.007 69.0026C120.119 69.0129 121.218 68.7738 122.225 68.3027C123.232 67.8317 124.12 67.1407 124.825 66.2807C125.529 65.4208 126.031 64.4137 126.295 63.3338C126.558 62.2539 126.576 61.1286 126.347 60.0409C125.994 61.726 125.071 63.2383 123.735 64.3238C122.398 65.4093 120.729 66.0019 119.007 66.0023Z"
          fill="#5CBEFF"
        />
        <Path
          opacity="0.3"
          d="M91.0059 70.0029C89.4059 70.0033 87.8621 69.4134 86.6702 68.3462C85.4782 67.279 84.7219 65.8095 84.5462 64.2193C84.3704 62.6291 84.7876 61.0299 85.7177 59.7281C86.6478 58.4264 88.0255 57.5136 89.5869 57.1646C89.5338 56.7795 89.507 56.3912 89.5068 56.0024C89.5046 54.4803 89.889 52.9826 90.624 51.6497C91.359 50.3169 92.4205 49.1925 93.709 48.3822C94.9975 47.5719 96.4707 47.1021 97.9904 47.017C99.5101 46.9319 101.027 47.2342 102.397 47.8955C103.839 46.2594 105.717 45.0675 107.812 44.4591C109.906 43.8507 112.13 43.851 114.224 44.4598C116.318 45.0687 118.196 46.2611 119.638 47.8975C121.079 49.534 122.025 51.547 122.365 53.7012C124.163 54.4735 125.638 55.8425 126.543 57.5769C127.448 59.3114 127.727 61.305 127.332 63.221C126.937 65.1371 125.893 66.8582 124.377 68.0937C122.86 69.3292 120.963 70.0034 119.007 70.0024L91.0059 70.0029ZM98.5069 49.0029C97.4364 48.9987 96.3794 49.2409 95.4176 49.7109C94.4559 50.1809 93.6153 50.8661 92.961 51.7133C92.3066 52.5605 91.8562 53.547 91.6445 54.5963C91.4328 55.6456 91.4656 56.7296 91.7403 57.7642C91.7778 57.9085 91.7825 58.0595 91.7541 58.2059C91.7257 58.3523 91.6649 58.4906 91.5761 58.6104C91.4874 58.7303 91.3729 58.8288 91.2411 58.8986C91.1093 58.9685 90.9635 59.008 90.8145 59.0142C89.6391 59.0636 88.53 59.5716 87.7249 60.4294C86.9198 61.2871 86.483 62.4262 86.508 63.6023C86.5331 64.7784 87.018 65.8978 87.8589 66.7205C88.6997 67.5432 89.8295 68.0036 91.0059 68.0029L119.007 68.0024C120.544 68.0034 122.032 67.4589 123.206 66.466C124.38 65.4731 125.164 64.096 125.418 62.5796C125.672 61.0633 125.379 59.506 124.593 58.1848C123.807 56.8635 122.578 55.8639 121.124 55.3638C120.944 55.3016 120.785 55.1891 120.666 55.0397C120.548 54.8904 120.475 54.7102 120.455 54.5205C120.26 52.6248 119.499 50.8317 118.27 49.3748C117.041 47.9179 115.403 46.8647 113.567 46.3523C111.731 45.8399 109.784 45.8922 107.978 46.5022C106.173 47.1123 104.593 48.2518 103.444 49.7725C103.295 49.9696 103.077 50.1042 102.834 50.1504C102.591 50.1966 102.339 50.151 102.128 50.0225C101.037 49.3575 99.7844 49.0048 98.5068 49.0029H98.5069Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M120.993 59.7524C120.835 59.7523 120.68 59.7149 120.539 59.6431C120.398 59.5714 120.277 59.4674 120.184 59.3396C120.091 59.2119 120.03 59.064 120.005 58.908C119.981 58.7521 119.993 58.5925 120.042 58.4424C120.505 57.0163 120.623 55.5011 120.389 54.0204C120.154 52.5397 119.572 51.1356 118.691 49.9226C117.81 48.7096 116.655 47.7222 115.319 47.041C113.984 46.3598 112.506 46.0041 111.007 46.0029C110.742 46.0029 110.487 45.8976 110.3 45.71C110.112 45.5225 110.007 45.2681 110.007 45.0029C110.007 44.7377 110.112 44.4834 110.3 44.2958C110.487 44.1083 110.742 44.0029 111.007 44.0029C112.822 44.0043 114.61 44.4349 116.227 45.2595C117.844 46.0842 119.242 47.2795 120.309 48.7479C121.376 50.2163 122.08 51.9161 122.364 53.7085C122.648 55.501 122.504 57.3352 121.944 59.0615C121.879 59.2623 121.752 59.4373 121.581 59.5614C121.41 59.6855 121.204 59.7523 120.993 59.7524Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M94.6289 60.3647C94.3864 60.365 94.1521 60.277 93.9697 60.1172C93.1496 59.3986 92.0963 59.0026 91.0059 59.0029C90.7406 59.0029 90.4863 58.8976 90.2988 58.71C90.1112 58.5225 90.0059 58.2681 90.0059 58.0029C90.0059 57.7377 90.1112 57.4834 90.2988 57.2958C90.4863 57.1083 90.7406 57.0029 91.0059 57.0029C92.5811 57.0028 94.1029 57.5747 95.2881 58.6123C95.441 58.7464 95.5493 58.924 95.5987 59.1213C95.6481 59.3185 95.6362 59.5262 95.5646 59.7165C95.493 59.9069 95.3651 60.0709 95.198 60.1867C95.0308 60.3025 94.8323 60.3646 94.6289 60.3647Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M105.012 52.3447C104.853 52.345 104.696 52.3072 104.555 52.2347C104.413 52.1622 104.291 52.0569 104.198 51.9277C103.549 51.0242 102.695 50.2879 101.705 49.7794C100.716 49.2709 99.6194 49.0047 98.5068 49.0029C98.2416 49.0029 97.9873 48.8976 97.7997 48.71C97.6122 48.5225 97.5068 48.2681 97.5068 48.0029C97.5068 47.7377 97.6122 47.4834 97.7997 47.2958C97.9873 47.1083 98.2416 47.0029 98.5068 47.0029C99.9369 47.0051 101.346 47.347 102.618 48.0005C103.89 48.654 104.989 49.6004 105.823 50.7617C105.93 50.9111 105.994 51.0871 106.008 51.2704C106.022 51.4538 105.985 51.6373 105.901 51.8009C105.817 51.9645 105.689 52.1018 105.533 52.1978C105.376 52.2937 105.196 52.3445 105.012 52.3447V52.3447Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M122.01 86.0298C121.877 86.0292 121.747 86.0024 121.625 85.951C121.503 85.8995 121.392 85.8244 121.3 85.73C121.207 85.6389 121.133 85.5299 121.083 85.4095C121.033 85.2892 121.008 85.16 121.01 85.0298C121.008 84.8981 121.033 84.7674 121.083 84.6455C121.133 84.5236 121.207 84.4128 121.3 84.3198C121.438 84.1772 121.616 84.0798 121.81 84.0404C122.005 84.0011 122.207 84.0217 122.39 84.0996C122.45 84.1299 122.51 84.1596 122.56 84.1899C122.616 84.2251 122.667 84.2689 122.71 84.3198C122.806 84.4087 122.881 84.5179 122.93 84.6396C122.98 84.7637 123.007 84.8959 123.01 85.0297C123.009 85.1606 122.982 85.2899 122.931 85.4102C122.879 85.5305 122.804 85.6392 122.71 85.73C122.667 85.7809 122.616 85.8247 122.56 85.8598C122.51 85.8896 122.45 85.9199 122.39 85.9497C122.27 86.0012 122.14 86.0284 122.01 86.0298Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M120.005 90.0264H114.004C113.739 90.0264 113.484 89.921 113.297 89.7335C113.109 89.5459 113.004 89.2916 113.004 89.0264C113.004 88.7612 113.109 88.5068 113.297 88.3193C113.484 88.1317 113.739 88.0264 114.004 88.0264H120.005C120.27 88.0264 120.524 88.1317 120.712 88.3193C120.9 88.5068 121.005 88.7612 121.005 89.0264C121.005 89.2916 120.9 89.5459 120.712 89.7335C120.524 89.921 120.27 90.0264 120.005 90.0264Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M118.004 86.0259H111.005C110.74 86.0259 110.485 85.9205 110.298 85.733C110.11 85.5455 110.005 85.2911 110.005 85.0259C110.005 84.7607 110.11 84.5063 110.298 84.3188C110.485 84.1312 110.74 84.0259 111.005 84.0259H118.004C118.269 84.0259 118.523 84.1312 118.711 84.3188C118.899 84.5063 119.004 84.7607 119.004 85.0259C119.004 85.2911 118.899 85.5455 118.711 85.733C118.523 85.9205 118.269 86.0259 118.004 86.0259Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M110.004 90.0259H108.005C107.74 90.0259 107.485 89.9205 107.298 89.733C107.11 89.5455 107.005 89.2911 107.005 89.0259C107.005 88.7607 107.11 88.5063 107.298 88.3188C107.485 88.1312 107.74 88.0259 108.005 88.0259H110.004C110.269 88.0259 110.523 88.1312 110.711 88.3188C110.899 88.5063 111.004 88.7607 111.004 89.0259C111.004 89.2911 110.899 89.5455 110.711 89.733C110.523 89.9205 110.269 90.0259 110.004 90.0259Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M118.004 94.0269H110.004C109.739 94.0269 109.484 93.9215 109.297 93.734C109.109 93.5464 109.004 93.2921 109.004 93.0269C109.004 92.7617 109.109 92.5073 109.297 92.3198C109.484 92.1322 109.739 92.0269 110.004 92.0269H118.004C118.269 92.0269 118.523 92.1322 118.711 92.3198C118.899 92.5073 119.004 92.7617 119.004 93.0269C119.004 93.2921 118.899 93.5464 118.711 93.734C118.523 93.9215 118.269 94.0269 118.004 94.0269Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M16 78.02C15.9331 78.022 15.8661 78.0186 15.7998 78.0098C15.7402 77.9898 15.6699 77.9698 15.6094 77.9497C15.5498 77.9199 15.4902 77.8896 15.4394 77.8598C15.3852 77.8219 15.3351 77.7784 15.29 77.73C15.1946 77.638 15.1189 77.5277 15.0674 77.4057C15.0159 77.2837 14.9896 77.1525 14.9902 77.02C14.9904 76.9554 15.0002 76.8912 15.0195 76.8296C15.032 76.7653 15.0486 76.7018 15.0693 76.6396C15.0996 76.5796 15.1298 76.52 15.1601 76.4697C15.1954 76.4133 15.2392 76.3628 15.29 76.3198C15.3351 76.2714 15.3852 76.2279 15.4394 76.1899C15.4902 76.1597 15.5497 76.1299 15.6093 76.0996C15.6699 76.0796 15.7402 76.0601 15.7997 76.04C15.9613 76.0087 16.128 76.0178 16.2851 76.0666C16.4423 76.1155 16.5848 76.2024 16.7001 76.3198C16.8396 76.4587 16.9347 76.6358 16.9735 76.8288C17.0123 77.0217 16.993 77.2218 16.918 77.4038C16.8431 77.5858 16.7159 77.7415 16.5525 77.8511C16.3891 77.9608 16.1968 78.0196 16 78.02Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M16.9941 74.0249H14.9941C14.7289 74.0249 14.4746 73.9196 14.287 73.732C14.0995 73.5445 13.9941 73.2901 13.9941 73.0249C13.9941 72.7597 14.0995 72.5053 14.287 72.3178C14.4746 72.1303 14.7289 72.0249 14.9941 72.0249H16.9941C17.2594 72.0249 17.5137 72.1303 17.7012 72.3178C17.8888 72.5053 17.9941 72.7597 17.9941 73.0249C17.9941 73.2901 17.8888 73.5445 17.7012 73.732C17.5137 73.9196 17.2594 74.0249 16.9941 74.0249Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M19.9941 70.0239H9.99515C9.72993 70.0239 9.47558 69.9186 9.28804 69.731C9.1005 69.5435 8.99515 69.2891 8.99515 69.0239C8.99515 68.7587 9.1005 68.5044 9.28804 68.3168C9.47558 68.1293 9.72993 68.0239 9.99515 68.0239H19.9941C20.2594 68.0239 20.5137 68.1293 20.7013 68.3168C20.8888 68.5044 20.9941 68.7587 20.9941 69.0239C20.9941 69.2891 20.8888 69.5435 20.7013 69.731C20.5137 69.9186 20.2594 70.0239 19.9941 70.0239Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M10.9941 74.0239H6.99414C6.72892 74.0239 6.47457 73.9186 6.28703 73.731C6.0995 73.5435 5.99414 73.2892 5.99414 73.0239C5.99414 72.7587 6.0995 72.5044 6.28703 72.3168C6.47457 72.1293 6.72892 72.0239 6.99414 72.0239H10.9941C11.2594 72.0239 11.5137 72.1293 11.7012 72.3168C11.8888 72.5044 11.9941 72.7587 11.9941 73.0239C11.9941 73.2892 11.8888 73.5435 11.7012 73.731C11.5137 73.9186 11.2594 74.0239 10.9941 74.0239Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M11.9941 78.0254H3.99313C3.72792 78.0254 3.47356 77.92 3.28603 77.7325C3.09849 77.545 2.99313 77.2906 2.99313 77.0254C2.99313 76.7602 3.09849 76.5058 3.28603 76.3183C3.47356 76.1308 3.72792 76.0254 3.99313 76.0254H11.9941C12.2593 76.0254 12.5137 76.1308 12.7012 76.3183C12.8888 76.5058 12.9941 76.7602 12.9941 77.0254C12.9941 77.2906 12.8888 77.545 12.7012 77.7325C12.5137 77.92 12.2593 78.0254 11.9941 78.0254Z"
          fill="white"
        />
        <Path
          opacity="0.3"
          d="M80.0039 118H54.002C53.7368 118 53.4824 117.895 53.2949 117.707C53.1073 117.52 53.002 117.265 53.002 117C53.002 116.735 53.1073 116.48 53.2949 116.293C53.4824 116.105 53.7368 116 54.002 116H80.004C80.2692 116 80.5236 116.105 80.7111 116.293C80.8986 116.48 81.004 116.735 81.004 117C81.004 117.265 80.8986 117.52 80.7111 117.707C80.5236 117.895 80.2692 118 80.004 118H80.0039Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M85.0039 118H83.0049C82.7397 118 82.4853 117.895 82.2978 117.707C82.1103 117.52 82.0049 117.265 82.0049 117C82.0049 116.735 82.1103 116.48 82.2978 116.293C82.4853 116.105 82.7397 116 83.0049 116H85.0039C85.2691 116 85.5235 116.105 85.711 116.293C85.8986 116.48 86.0039 116.735 86.0039 117C86.0039 117.265 85.8986 117.52 85.711 117.707C85.5235 117.895 85.2691 118 85.0039 118Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M47 118H43.001C42.7358 118 42.4814 117.895 42.2939 117.707C42.1064 117.52 42.001 117.265 42.001 117C42.001 116.735 42.1064 116.48 42.2939 116.293C42.4814 116.105 42.7358 116 43.001 116H47C47.2652 116 47.5196 116.105 47.7071 116.293C47.8947 116.48 48 116.735 48 117C48 117.265 47.8947 117.52 47.7071 117.707C47.5196 117.895 47.2652 118 47 118Z"
          fill="#6D6DAA"
        />
        <Path
          opacity="0.3"
          d="M51.001 118H50.002C49.7368 118 49.4824 117.895 49.2949 117.707C49.1073 117.52 49.002 117.265 49.002 117C49.002 116.735 49.1073 116.48 49.2949 116.293C49.4824 116.105 49.7368 116 50.002 116H51.001C51.2662 116 51.5206 116.105 51.7081 116.293C51.8956 116.48 52.001 116.735 52.001 117C52.001 117.265 51.8956 117.52 51.7081 117.707C51.5206 117.895 51.2662 118 51.001 118Z"
          fill="#6D6DAA"
        />
      </G>
      <Path
        d="M64 117C87.196 117 106 98.196 106 75C106 51.804 87.196 33 64 33C40.804 33 22 51.804 22 75C22 98.196 40.804 117 64 117Z"
        fill="#FF9797"
      />
      <Path
        opacity="0.2"
        d="M64.0001 113.001C53.2077 113 42.8297 108.845 35.019 101.398C27.2083 93.95 22.5644 83.7813 22.0507 73.0011C22.0195 73.6643 22.0001 74.3305 22.0001 75.0013C22.0001 80.5168 23.0865 85.9783 25.1972 91.074C27.3079 96.1697 30.4016 100.8 34.3016 104.7C38.2017 108.6 42.8317 111.694 47.9274 113.804C53.0231 115.915 58.4846 117.001 64.0001 117.001C69.5156 117.001 74.9771 115.915 80.0728 113.804C85.1685 111.694 89.7985 108.6 93.6986 104.7C97.5987 100.8 100.692 96.1697 102.803 91.074C104.914 85.9783 106 80.5168 106 75.0013C106 74.3304 105.981 73.6643 105.95 73.0011C105.436 83.7813 100.792 93.9499 92.9813 101.398C85.1705 108.845 74.7925 113 64.0001 113.001Z"
        fill="#750000"
      />
      <Path
        opacity="0.5"
        d="M64.0001 37.0017C74.7925 37.0022 85.1705 41.1572 92.9813 48.6049C100.792 56.0526 105.436 66.2213 105.95 77.0015C105.981 76.3383 106 75.6721 106 75.0013C106 63.8622 101.575 53.1793 93.6986 45.3028C85.8221 37.4263 75.1392 33.0013 64.0001 33.0013C52.861 33.0013 42.1782 37.4263 34.3016 45.3028C26.4251 53.1793 22.0001 63.8622 22.0001 75.0013C22.0001 75.6721 22.0195 76.3383 22.0507 77.0015C22.5643 66.2213 27.2082 56.0526 35.019 48.6049C42.8297 41.1572 53.2077 37.0022 64.0001 37.0017Z"
        fill="white"
      />
      <Path
        d="M64 118.001C55.4954 118.001 47.1818 115.48 40.1105 110.755C33.0392 106.03 27.5277 99.3141 24.2732 91.4568C21.0186 83.5996 20.1671 74.9538 21.8262 66.6126C23.4854 58.2714 27.5807 50.6095 33.5944 44.5959C39.6081 38.5822 47.2699 34.4869 55.6111 32.8277C63.9523 31.1685 72.5982 32.0201 80.4554 35.2746C88.3126 38.5292 95.0283 44.0406 99.7532 51.1119C104.478 58.1833 107 66.4969 107 75.0015C106.987 86.4018 102.453 97.3315 94.3913 105.393C86.3301 113.454 75.4003 117.989 64 118.001ZM64 34.0015C55.891 34.0015 47.964 36.4061 41.2216 40.9112C34.4792 45.4163 29.2241 51.8197 26.1209 59.3114C23.0177 66.8032 22.2058 75.0469 23.7878 83.0002C25.3698 90.9534 29.2747 98.2589 35.0086 103.993C40.7426 109.727 48.0481 113.632 56.0013 115.214C63.9545 116.796 72.1982 115.984 79.69 112.881C87.1818 109.777 93.5851 104.522 98.0902 97.7798C102.595 91.0374 105 83.1105 105 75.0015C104.988 64.1314 100.664 53.71 92.9778 46.0237C85.2915 38.3374 74.8701 34.0138 64 34.0015Z"
        fill="#6D6DAA"
      />
      <Path
        opacity="0.3"
        d="M64 101C67.3137 101 70 98.3137 70 95C70 91.6863 67.3137 89 64 89C60.6863 89 58 91.6863 58 95C58 98.3137 60.6863 101 64 101Z"
        fill="#D63C74"
      />
      <Path
        opacity="0.3"
        d="M63.8322 88.8672L56.9139 67.0309C56.5673 65.9218 56.4865 64.7466 56.678 63.6005C56.8695 62.4543 57.328 61.3693 58.0163 60.433C58.7046 59.4968 59.6036 58.7356 60.6404 58.211C61.6773 57.6864 62.8231 57.413 63.9851 57.413C65.1472 57.413 66.2929 57.6864 67.3298 58.211C68.3667 58.7356 69.2656 59.4968 69.9539 60.433C70.6423 61.3693 71.1007 62.4543 71.2922 63.6005C71.4837 64.7466 71.4029 65.9218 71.0564 67.0309L64.138 88.8672H63.8322Z"
        fill="#D63C74"
      />
      <Path
        d="M64 86.76C63.0032 86.76 62.0287 87.0556 61.1999 87.6094C60.3711 88.1632 59.7251 88.9503 59.3436 89.8713C58.9622 90.7922 58.8624 91.8056 59.0568 92.7833C59.2513 93.7609 59.7313 94.659 60.4362 95.3638C61.141 96.0687 62.0391 96.5487 63.0167 96.7432C63.9944 96.9376 65.0078 96.8378 65.9287 96.4564C66.8496 96.0749 67.6368 95.4289 68.1906 94.6001C68.7444 93.7713 69.04 92.7968 69.04 91.8C69.04 91.1381 68.9096 90.4827 68.6564 89.8713C68.4031 89.2598 68.0319 88.7041 67.5638 88.2361C67.0958 87.7681 66.5402 87.3969 65.9287 87.1436C65.3172 86.8903 64.6619 86.76 64 86.76ZM64 53.16C63.0313 53.16 62.0762 53.3879 61.2118 53.8252C60.3475 54.2626 59.5982 54.8971 59.0244 55.6776C58.4506 56.458 58.0684 57.3625 57.9088 58.318C57.7492 59.2734 57.8166 60.253 58.1055 61.1776L64 80.04L69.8944 61.1776C70.1834 60.253 70.2508 59.2734 70.0911 58.318C69.9315 57.3625 69.5494 56.458 68.9756 55.6776C68.4018 54.8971 67.6525 54.2626 66.7881 53.8252C65.9238 53.3879 64.9687 53.16 64 53.16Z"
        fill="#EEF6FF"
      />
      <Path
        d="M58.3356 60.714C58.8154 59.6105 59.607 58.6711 60.6133 58.0113C61.6196 57.3515 62.7967 57 64 57C65.2033 57 66.3804 57.3515 67.3867 58.0113C68.393 58.6711 69.1846 59.6105 69.6644 60.714L69.8945 59.9777C71 57 68.1663 53.16 64 53.16C59.8337 53.16 57 57 58.1055 59.9776L58.3356 60.714Z"
        fill="white"
      />
      <Path
        d="M64 86.76C63.3381 86.76 62.6827 86.8903 62.0712 87.1436C61.4598 87.3969 60.9041 87.7681 60.4361 88.2361C59.9681 88.7041 59.5969 89.2598 59.3436 89.8713C59.0903 90.4827 58.96 91.1381 58.96 91.8C58.96 92.7228 59.2261 91.776 59.659 92.5199C60.0961 91.7544 60.7279 91.1181 61.4903 90.6756C62.2527 90.233 63.1185 90 64 90C64.8815 90 65.7473 90.233 66.5097 90.6756C67.2721 91.1181 67.9038 91.7544 68.341 92.5199C68.7739 91.776 69.04 92.7228 69.04 91.8C69.04 91.1381 68.9097 90.4827 68.6564 89.8713C68.4031 89.2598 68.0319 88.7041 67.5639 88.2361C67.0958 87.7681 66.5402 87.3969 65.9287 87.1436C65.3173 86.8903 64.6619 86.76 64 86.76Z"
        fill="white"
      />
      <Path
        d="M64 80.8799C63.7869 80.88 63.5794 80.812 63.4077 80.6857C63.2361 80.5595 63.1093 80.3817 63.0459 80.1782L57.1514 61.3159C56.8155 60.2416 56.7372 59.1034 56.9226 57.9931C57.108 56.8829 57.5519 55.8319 58.2186 54.925C58.8853 54.0181 59.756 53.2808 60.7603 52.7726C61.7646 52.2644 62.8744 51.9996 64 51.9996C65.1256 51.9996 66.2354 52.2644 67.2397 52.7726C68.244 53.2808 69.1147 54.0181 69.7814 54.925C70.4481 55.8319 70.8921 56.8829 71.0775 57.9931C71.2629 59.1034 71.1845 60.2416 70.8486 61.3159L64.9541 80.1782C64.8907 80.3817 64.7639 80.5595 64.5923 80.6857C64.4206 80.812 64.2131 80.88 64 80.8799ZM64 54C63.1882 54 62.3877 54.191 61.6634 54.5575C60.939 54.924 60.311 55.4558 59.8301 56.1099C59.3492 56.7639 59.0288 57.5219 58.895 58.3226C58.7612 59.1234 58.8175 59.9443 59.0596 60.7192L64 76.5273L68.9404 60.7192C69.1825 59.9443 69.2389 59.1234 69.105 58.3226C68.9712 57.5219 68.6509 56.7639 68.17 56.1099C67.689 55.4558 67.061 54.924 66.3367 54.5575C65.6123 54.191 64.8118 54 64 54Z"
        fill="#6D6DAA"
      />
      <Path
        d="M64.04 98C62.8454 98 61.6776 97.6458 60.6844 96.9821C59.6911 96.3184 58.9169 95.3751 58.4598 94.2714C58.0026 93.1677 57.883 91.9533 58.1161 90.7817C58.3491 89.61 58.9244 88.5338 59.7691 87.6891C60.6138 86.8444 61.69 86.2691 62.8617 86.0361C64.0333 85.803 65.2477 85.9226 66.3514 86.3798C67.4551 86.8369 68.3984 87.6111 69.0621 88.6044C69.7258 89.5976 70.08 90.7654 70.08 91.96C70.0781 93.5613 69.4412 95.0965 68.3089 96.2289C67.1765 97.3612 65.6413 97.9981 64.04 98ZM64.04 87.9199C63.241 87.9199 62.4599 88.1569 61.7955 88.6008C61.1311 89.0447 60.6133 89.6757 60.3075 90.4139C60.0017 91.1521 59.9217 91.9644 60.0776 92.7481C60.2335 93.5318 60.6183 94.2516 61.1833 94.8166C61.7483 95.3816 62.4682 95.7664 63.2518 95.9223C64.0355 96.0782 64.8478 95.9982 65.586 95.6924C66.3243 95.3866 66.9552 94.8688 67.3991 94.2044C67.8431 93.54 68.08 92.759 68.08 91.9599C68.0787 90.8888 67.6527 89.862 66.8953 89.1046C66.1379 88.3472 65.1111 87.9212 64.04 87.9199Z"
        fill="#6D6DAA"
      />
    </SVG>
  );
};
