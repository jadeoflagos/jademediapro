import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={21.45}
    height={21.45}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11.586} cy={10.797} r={10.722} fill="#fff" />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.123 6.108a3.513 3.513 0 0 1 0 4.968l-1.361 1.361-4.968 4.968-4.968-4.968-1.36-1.36a3.513 3.513 0 0 1 4.969-4.968l1.36 1.36-2.102 2.1a1.923 1.923 0 0 0-.008.009l2.109-2.11 2.433 2.434a2.549 2.549 0 0 0-.034-.034l-2.399-2.4 1.36-1.36a3.513 3.513 0 0 1 4.969 0Z"
      />
    </mask>
    <path
      d="m18.123 11.076-.707-.707.707.707Zm0-4.968-.707.707.707-.707Zm-1.361 6.329-.707-.707-.693.693.679.707.721-.693Zm0 0 .707.707.693-.693-.679-.707-.721.693Zm-4.968 4.968-.707.707.707.707.707-.707-.707-.707Zm-4.968-4.968-.708-.707-.706.707.707.707.707-.707Zm0 0 .708.707.706-.708-.707-.706-.707.707Zm-1.36-1.36.708-.707-.707.707Zm0-4.968.708.707-.707-.707Zm4.969 0-.707.707.707-.707Zm-.742 3.46-.707-.706.707.707Zm-.008.009-.71-.705 1.417 1.412-.707-.707Zm2.109-2.11.707-.706-.707-.707-.707.707.707.707Zm2.433 2.434-.707.707 1.423-1.405-.716.698Zm-.034-.034.707-.707-.707.707Zm-1.038-3.76-.707-.707.707.707Zm5.675 5.675a4.513 4.513 0 0 0 0-6.382l-1.414 1.414a2.513 2.513 0 0 1 0 3.554l1.414 1.414Zm-1.36 1.361 1.36-1.36-1.414-1.415-1.361 1.36 1.414 1.415Zm-1.43-.014 1.443-1.386-1.442 1.386Zm.015-1.4-4.968 4.968 1.414 1.414 4.968-4.968-1.414-1.414ZM12.5 16.698 7.533 11.73l-1.414 1.414 4.968 4.968 1.414-1.414Zm-4.968-3.554L6.12 11.73l1.414 1.414Zm-2.773-1.36 1.359 1.36 1.414-1.414-1.36-1.36-1.413 1.415Zm0-6.382a4.513 4.513 0 0 0 0 6.382l1.414-1.414a2.513 2.513 0 0 1 0-3.554L4.76 5.402Zm6.382 0a4.513 4.513 0 0 0-6.382 0l1.414 1.414a2.513 2.513 0 0 1 3.554 0l1.414-1.414Zm1.36 1.36-1.36-1.36-1.414 1.414 1.36 1.36L12.5 6.762Zm-1.415 0-2.101 2.1 1.414 1.415 2.101-2.101-1.414-1.414Zm-2.101 2.1a3.16 3.16 0 0 0-.01.01l1.418 1.41.006-.005-1.414-1.414Zm1.406 1.423 2.11-2.109-1.415-1.414L8.978 8.87l1.414 1.414Zm.695-2.109 2.433 2.433 1.414-1.414L12.5 6.762l-1.414 1.414Zm3.856 1.028a5.02 5.02 0 0 0-.043-.043l-1.414 1.414.024.024 1.433-1.395Zm-.043-.043-2.399-2.4-1.414 1.415 2.4 2.399L14.9 9.16ZM12.448 5.4l-1.36 1.36L12.5 8.177l1.361-1.36L12.448 5.4Zm6.382 0a4.513 4.513 0 0 0-6.382 0l1.414 1.414a2.513 2.513 0 0 1 3.554 0l1.414-1.414Z"
      fill="#77459B"
      mask="url(#a)"
    />
  </svg>
);

export default SvgComponent;
