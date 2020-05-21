import React from "react";
import { render } from "@testing-library/react";

const Letter = (props) => {
  const {
    firstColor = "black",
    secColor = "olive",
    width = "34",
    height = "35",
  } = props;
  return (
    <>
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.929 17.4248V5.56299H18.5404L17.1261 8.15221H25.3909V12.0165L27.929 17.4248Z"
          fill={firstColor}
        />
        <path
          d="M9.11504 8.15221H10.9006L12.0967 5.56299H6.57694V10.1299H9.11504V8.15221Z"
          fill={firstColor}
        />
        <path
          d="M25.3909 26.9331C25.1443 27.7904 23.5273 32.4108 17.3996 32.4108C10.7759 32.4108 9.44664 28.0477 9.39704 27.8728L6.94822 28.5537C7.01908 28.8168 8.77066 34.9985 17.3996 34.9985C22.507 34.9985 25.4589 32.3023 26.9001 29.8302L25.3909 25.1896V26.9331Z"
          fill={firstColor}
        />
        <path
          d="M31.3244 28.8052L23.0073 10.8585L19.9207 10.8021L24.2104 19.8189H10.2176L17.1899 4.27778H20.2523L19.4106 2.60801L17.9424 2.59934H17.9438L21.2146 2.61958L21.2302 0.0303594L16.3184 0L16.3169 0.00433705H12.9852V2.59356H15.1549L3.25942 29.1103L0 29.1522L0.0325942 31.7414L4.89763 31.6778L9.05694 22.4081H25.4419L29.7174 31.3945H34V28.8052H31.3244Z"
          fill={secColor}
        />
      </svg>
    </>
  );
};

const Mug = (props) => {
  const { width = "34", height = "35" } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 200 200`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M115.332 200C151.05 200 180.005 194.262 180.005 187.183C180.005 180.105 151.05 174.367 115.332 174.367C79.6135 174.367 50.6581 180.105 50.6581 187.183C50.6581 194.262 79.6135 200 115.332 200Z"
        fill="#D6BEA1"
      />
      <path
        d="M68.0092 98.3176C68.0092 98.3176 67.5642 86.384 57.182 85.5702C46.7999 84.7565 30.3389 87.4703 29.7425 118.116C29.1507 148.762 43.5335 173.305 68.0047 155.272V181.442C68.0047 181.442 69.1929 169.916 61.7746 170.461C54.3606 171.002 30.3344 171.547 22.026 143.477C13.7221 115.406 23.5079 87.747 39.2302 81.0986C54.9525 74.4544 68.4631 80.4192 70.3855 82.7261L68.0092 98.3176Z"
        fill="#232323"
      />
      <path
        d="M68.0092 155.272V178.025C67.7377 174.672 66.5095 170.115 61.779 170.461C60.573 170.55 58.922 170.636 56.9773 170.603V160.826C60.3772 159.976 64.0619 158.181 68.0092 155.272Z"
        fill="#232323"
      />
      <path
        d="M70.39 82.7261L68.0092 98.3216C68.0092 98.3216 67.5641 86.388 57.182 85.5742C57.1152 85.5702 57.044 85.5661 56.9773 85.5579V78.1813C64.1642 78.7753 69.2641 81.3753 70.39 82.7261Z"
        fill="#232323"
      />
      <path
        d="M66.2291 70.8005H171.853V181.418H171.804C171.835 181.642 171.853 181.87 171.853 182.106C171.853 189.938 144.769 193.315 118.304 193.315C91.8396 193.315 66.2291 189.645 66.2291 182.106C66.2291 181.874 66.2469 181.646 66.2781 181.418H66.2291V70.8005V70.8005Z"
        fill="#333333"
      />
      <path
        d="M66.2291 70.8005H82.5477L81.1637 190.3C68.7034 188.03 66.2291 184.331 66.2291 182.102C66.2291 181.87 66.2469 181.642 66.2781 181.414H66.2291V70.8005Z"
        fill="#232323"
      />
      <path
        d="M66.2291 70.8006C66.2291 75.2803 91.8396 77.4652 118.304 77.4652C144.769 77.4652 171.853 75.4552 171.853 70.8006C171.853 64.9782 144.769 63.3181 118.304 63.3181C91.844 63.3181 66.2291 64.9782 66.2291 70.8006Z"
        fill="white"
      />
      <path
        d="M70.39 69.7793C70.39 72.1432 91.8441 74.0596 118.309 74.0596C144.774 74.0596 166.228 72.1432 166.228 69.7793C166.228 67.4153 144.774 64.9781 118.309 64.9781C91.8441 64.9781 70.39 67.4153 70.39 69.7793Z"
        fill="#CBB6A6"
      />
      <path
        d="M74.137 71.4434C81.404 69.7589 98.4435 68.3837 118.304 68.3837C138.17 68.3837 155.209 69.7589 162.472 71.4434C155.205 72.9814 138.165 74.0596 118.304 74.0596C98.4435 74.0596 81.404 72.9773 74.137 71.4434Z"
        fill="#2D0F02"
      />
      <path
        d="M59.367 82.6733C56.5679 81.9897 53.6308 81.7741 50.7071 81.9287C47.7833 82.0792 44.8552 82.6651 42.1094 83.7271C39.3682 84.8094 36.9161 86.5386 35.0649 88.6665C33.0846 90.7457 32.199 93.4311 31.5715 95.97C31.9097 95.3759 32.2302 94.79 32.5283 94.2001C32.822 93.606 33.1202 93.0242 33.5652 92.5075L34.7133 90.9003L36.0884 89.4681C38.0064 87.6616 40.2493 86.152 42.8037 85.1715C45.3358 84.1624 48.0637 83.5399 50.8406 83.1493C53.6308 82.8035 56.4833 82.596 59.367 82.6733Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M166.086 81.2045V180.116C166.086 180.116 161.876 183.379 150.532 184.348V83.3894C150.532 83.3894 164.697 82.7506 166.086 81.2045Z"
        fill="url(#paint0_linear)"
      />
      <path
        opacity="0.5"
        d="M109.351 0C112.791 6.13569 114.758 12.2185 114.157 17.4143C113.881 20.0102 112.906 22.3497 111.603 24.5997C111.224 25.149 110.895 25.7146 110.566 26.2801L109.24 27.8873L107.722 29.824C107.055 30.6134 106.467 31.4637 105.902 32.3385C103.655 35.8336 102.395 39.9268 102.177 43.9141C101.981 47.9178 102.765 51.7831 104.193 55.2538C105.639 58.7244 107.629 61.8615 110.049 64.616C112.484 67.3502 115.234 69.8159 118.527 71.6387C116.124 65.0839 114.108 58.9604 113.427 53.1299C112.72 47.2912 113.641 42.1849 116.395 37.8639C116.734 37.3146 117.081 36.7653 117.503 36.2445L118.166 35.3494C118.465 34.9425 118.767 34.5438 119.048 34.1247C119.613 33.2947 120.187 32.4809 120.73 31.6387C121.193 30.7273 121.651 29.8159 122.065 28.8882C123.64 25.1572 124.383 20.9256 123.636 16.926C122.906 12.9387 121.015 9.37036 118.505 6.51409C115.977 3.66595 112.88 1.37931 109.351 0Z"
        fill="#C1C1C1"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="158.308"
          y1="81.2034"
          x2="158.308"
          y2="184.346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Logo = (props) => {
  const { type, size, color } = props;
  return <>{type === "mug" ? <Mug /> : <Letter color={color} />}</>;
};

export default Logo;
