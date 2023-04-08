import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const circleLoading = ({color = '#868A93', ...rest}) => {
  return (
    <SVG viewBox="0 0 36 40" {...rest}>
      <Path
        d="M17.9999 0C18.5303 0 19.039 0.210714 19.4141 0.585786C19.7892 0.960859 19.9999 1.46957 19.9999 2V8C19.9999 8.53043 19.7892 9.03914 19.4141 9.41421C19.039 9.78929 18.5303 10 17.9999 10C17.4694 10 16.9607 9.78929 16.5857 9.41421C16.2106 9.03914 15.9999 8.53043 15.9999 8V2C15.9999 1.46957 16.2106 0.960859 16.5857 0.585786C16.9607 0.210714 17.4694 0 17.9999 0ZM17.9999 30C18.5303 30 19.039 30.2107 19.4141 30.5858C19.7892 30.9609 19.9999 31.4696 19.9999 32V38C19.9999 38.5304 19.7892 39.0391 19.4141 39.4142C19.039 39.7893 18.5303 40 17.9999 40C17.4694 40 16.9607 39.7893 16.5857 39.4142C16.2106 39.0391 15.9999 38.5304 15.9999 38V32C15.9999 31.4696 16.2106 30.9609 16.5857 30.5858C16.9607 30.2107 17.4694 30 17.9999 30ZM35.3199 10C35.5851 10.4594 35.657 11.0053 35.5197 11.5176C35.3824 12.0299 35.0472 12.4668 34.5879 12.732L29.3919 15.732C29.1643 15.8654 28.9127 15.9525 28.6513 15.9882C28.39 16.0239 28.1242 16.0076 27.8692 15.9402C27.6142 15.8728 27.375 15.7556 27.1655 15.5954C26.956 15.4352 26.7802 15.2351 26.6484 15.0067C26.5165 14.7782 26.4311 14.526 26.3971 14.2644C26.3631 14.0029 26.3812 13.7372 26.4503 13.4826C26.5194 13.2281 26.6381 12.9897 26.7997 12.7813C26.9613 12.5728 27.1626 12.3984 27.3919 12.268L32.5879 9.268C33.0472 9.0028 33.5931 8.93093 34.1055 9.0682C34.6178 9.20548 35.0547 9.54065 35.3199 10ZM9.33988 25C9.60508 25.4594 9.67695 26.0053 9.53968 26.5176C9.4024 27.0299 9.06723 27.4668 8.60788 27.732L3.41188 30.732C3.18434 30.8654 2.93266 30.9525 2.67133 30.9882C2.41 31.0239 2.14419 31.0076 1.88919 30.9402C1.63419 30.8728 1.39504 30.7556 1.18552 30.5954C0.975998 30.4352 0.800235 30.2351 0.668352 30.0067C0.536469 29.7782 0.451071 29.526 0.417074 29.2644C0.383077 29.0029 0.401152 28.7372 0.47026 28.4826C0.539367 28.2281 0.658142 27.9897 0.819745 27.7813C0.981349 27.5728 1.18259 27.3984 1.41188 27.268L6.60788 24.268C7.06724 24.0028 7.61313 23.9309 8.12548 24.0682C8.63782 24.2055 9.07466 24.5407 9.33988 25ZM35.3199 30C35.0547 30.4593 34.6178 30.7945 34.1055 30.9318C33.5931 31.0691 33.0472 30.9972 32.5879 30.732L27.3919 27.732C26.9363 27.4649 26.6048 27.0284 26.4698 26.5178C26.3348 26.0072 26.4073 25.464 26.6713 25.0066C26.9354 24.5492 27.3697 24.2149 27.8794 24.0765C28.389 23.9381 28.9328 24.007 29.3919 24.268L34.5879 27.268C35.0472 27.5332 35.3824 27.9701 35.5197 28.4824C35.657 28.9947 35.5851 29.5406 35.3199 30ZM9.33988 15C9.07466 15.4593 8.63782 15.7945 8.12548 15.9318C7.61313 16.0691 7.06724 15.9972 6.60788 15.732L1.41188 12.732C1.18259 12.6016 0.981349 12.4272 0.819745 12.2187C0.658142 12.0103 0.539367 11.7719 0.47026 11.5174C0.401152 11.2628 0.383077 10.9971 0.417074 10.7356C0.451071 10.474 0.536469 10.2218 0.668352 9.99334C0.800235 9.76492 0.975998 9.56485 1.18552 9.40463C1.39504 9.24441 1.63419 9.12722 1.88919 9.0598C2.14419 8.99238 2.41 8.97607 2.67133 9.0118C2.93266 9.04753 3.18434 9.1346 3.41188 9.268L8.60788 12.268C9.06723 12.5332 9.4024 12.9701 9.53968 13.4824C9.67695 13.9947 9.60508 14.5406 9.33988 15Z"
        fill={color}
      />
    </SVG>
  );
};