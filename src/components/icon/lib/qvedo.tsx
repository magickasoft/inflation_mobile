import React from 'react';
import SVG, {Path} from 'react-native-svg';

export const qvedo = ({color = '#24B0FF', ...rest}) => {
  return (
    <SVG viewBox="0 0 3252 654" {...rest}>
      <Path
        d="M1180.86 38.2747C1192.01 12.1654 1222.94 -0.00203371 1248.04 11.1515C1274.15 21.4177 1286.32 52.2166 1276.05 77.4387L1045.35 622.819C1044.85 623.833 1034.96 653.618 998.835 653.618C962.71 653.618 951.936 623.706 951.049 622.819L722.381 77.5654C711.1 52.3433 723.269 21.4177 750.394 11.1515C775.619 -0.00203371 805.533 12.0387 816.688 38.2747L998.835 470.726L1180.86 38.2747Z"
        fill={color}
      />
      <Path
        d="M1773.32 0C1800.44 0 1824.65 22.4337 1824.65 51.3314C1824.65 80.2291 1800.31 103.677 1773.32 103.677H1520.31V274.528H1737.82C1765.84 274.528 1789.16 298.863 1789.16 325.859C1789.16 354.757 1765.84 378.205 1737.82 378.205H1520.31V550.07H1773.32C1800.44 550.07 1824.65 573.391 1824.65 602.415C1824.65 630.426 1800.31 653.746 1773.32 653.746H1470.75C1469.1 653.746 1468.98 652.986 1468.85 652.859L1467.96 653.746C1439.06 653.746 1416.62 630.426 1416.62 602.415V51.3314C1416.62 22.4337 1439.06 0 1467.96 0H1773.32Z"
        fill={color}
      />
      <Path
        d="M2155.23 0H2045.08C2016.18 0 1993.74 22.4337 1993.74 51.3314V602.288C1993.74 630.299 2016.18 653.62 2045.08 653.62H2155.23C2335.47 653.62 2481.11 506.977 2481.11 325.859C2481.11 146.643 2335.47 0 2155.23 0ZM2155.23 550.07H2097.3V103.677H2155.23C2278.43 103.677 2377.43 203.551 2377.43 325.986C2377.43 450.195 2278.56 549.183 2155.23 550.07Z"
        fill={color}
      />
      <Path
        d="M2924.76 0C2744.26 0 2597.86 146.39 2597.86 326.873C2597.86 507.357 2744.26 653.746 2924.76 653.746C3105.26 653.746 3251.67 507.357 3251.67 326.873C3251.67 146.39 3105.39 0 2924.76 0ZM2924.76 548.676C2802.19 548.676 2702.94 449.308 2702.94 326.873C2702.94 204.438 2802.32 105.071 2924.76 105.071C3047.21 105.071 3146.59 204.438 3146.59 326.873C3146.59 449.308 3047.34 548.676 2924.76 548.676Z"
        fill={color}
      />
      <Path
        d="M623.891 623.835L602.09 602.035L593.09 593.036L591.569 591.515L589.667 589.614L576.992 576.94L558.105 558.055C617.3 498.865 653.806 417.242 653.806 326.873C653.806 146.39 507.403 0 326.903 0C146.403 0 0 146.39 0 326.873C0 507.357 146.403 653.747 326.903 653.747C373.929 653.747 418.674 643.734 459.109 625.736C463.038 623.962 466.841 622.187 470.644 620.413C473.686 618.892 476.728 617.371 479.77 615.85C480.024 615.723 480.277 615.596 480.658 615.47C487.122 612.174 494.854 613.315 500.051 618.512L530.726 649.184C533.768 652.226 537.951 654 542.261 654H575.091H604.371H611.596C627.06 653.747 634.919 634.862 623.891 623.835ZM513.361 518.003H484.587H480.658H475.714H474.7H470.771H466.461C466.207 518.003 465.954 518.003 465.7 518.003C464.179 518.003 462.531 518.003 461.01 518.003C459.489 518.003 458.095 518.003 456.574 518.003C455.94 518.003 455.306 518.003 454.673 518.003C453.912 518.003 453.151 518.003 452.391 518.003C451.63 518.003 450.997 518.003 450.236 518.003C449.729 518.003 449.222 518.003 448.715 518.003H444.912C443.138 518.003 441.237 517.877 439.462 518.257C438.068 518.637 436.927 519.398 435.786 520.031C434.645 520.792 433.378 521.426 432.11 522.059C431.983 522.186 431.857 522.186 431.73 522.313C431.477 522.44 431.223 522.566 430.969 522.693C428.688 523.834 426.533 524.974 424.251 526.115C424.124 526.115 423.998 526.242 423.871 526.242C422.35 527.002 420.702 527.763 419.181 528.397C418.801 528.523 418.421 528.777 418.04 528.904C416.519 529.664 414.871 530.298 413.35 530.931C412.717 531.185 412.209 531.438 411.576 531.692C410.942 531.945 410.308 532.199 409.674 532.452C407.773 533.213 405.872 533.973 403.97 534.734C401.942 535.494 400.041 536.128 398.013 536.888C397.759 537.015 397.379 537.142 397.126 537.142C396.999 537.142 396.999 537.142 396.872 537.269C395.605 537.649 394.337 538.029 393.07 538.536C391.295 539.043 389.394 539.677 387.619 540.184C386.858 540.437 385.971 540.691 385.21 540.817C383.436 541.324 381.535 541.831 379.633 542.212C378.746 542.465 377.985 542.592 377.098 542.845C375.197 543.226 373.296 543.733 371.521 544.113C370.634 544.24 369.873 544.493 368.986 544.62C367.085 545 365.056 545.38 363.155 545.634C362.395 545.76 361.634 545.887 360.747 546.014C358.719 546.394 356.564 546.648 354.536 546.901C353.902 547.028 353.141 547.028 352.508 547.155C350.099 547.408 347.691 547.662 345.156 547.915C345.029 547.915 344.902 547.915 344.775 547.915C344.142 547.915 343.508 548.042 342.874 548.042C340.846 548.169 338.691 548.295 336.663 548.422C335.903 548.422 335.269 548.549 334.508 548.549C331.846 548.676 329.185 548.676 326.523 548.676C203.95 548.676 104.7 449.308 104.7 326.873C104.7 204.438 204.077 105.071 326.523 105.071C448.969 105.071 548.345 204.438 548.345 326.873C548.345 350.955 544.416 374.149 537.317 395.822C537.064 396.709 536.684 397.597 536.43 398.484C535.923 400.005 535.289 401.526 534.782 403.173C534.529 403.934 534.148 404.821 533.895 405.581C533.261 407.229 532.627 408.75 531.994 410.398C531.74 411.031 531.487 411.665 531.233 412.299C530.473 414.073 529.712 415.848 528.952 417.495V417.622C526.036 423.959 522.994 430.17 519.571 436.127C518.938 437.141 518.304 438.281 517.924 439.549C517.417 441.323 517.67 443.224 517.67 444.999V448.801C517.67 449.308 517.67 449.815 517.67 450.322C517.67 451.083 517.67 451.716 517.67 452.477C517.67 453.237 517.67 453.998 517.67 454.758C517.67 455.392 517.67 456.026 517.67 456.659C517.67 456.786 517.67 457.04 517.67 457.166V461.095V465.785V470.728V475.671V480.614V485.43V486.824V513.314C517.67 514.581 517.163 515.722 516.276 516.609C515.769 517.37 514.628 518.003 513.361 518.003Z"
        fill={color}
      />
      <Path
        d="M518.048 450.324C518.048 451.084 518.048 451.718 518.048 452.478C518.048 453.239 518.048 453.999 518.048 454.76C518.048 455.393 518.048 456.027 518.048 456.661C518.048 456.788 518.048 457.041 518.048 457.168V461.097V465.786V470.729V475.672V480.615V485.432V486.826V513.315C518.048 514.583 517.542 515.724 516.654 516.611L558.103 558.056C571.286 544.875 583.328 530.553 594.102 515.343L518.302 439.55C517.795 441.325 518.048 443.226 518.048 445V448.803C518.048 449.31 518.048 449.817 518.048 450.324Z"
        fill="#2597D8"
      />
    </SVG>
  );
};