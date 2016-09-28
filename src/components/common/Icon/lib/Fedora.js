import React, { Component } from 'react';
import svg from './_Svg';

@svg(80)
class Fedora extends Component {
  render() {
    return (
      <g>
        <defs>
          <linearGradient x1="80.263%" y1="14.913%" x2="2.631%" y2="96.491%" id="fedora-icon">
            <stop stopColor="#002F57" offset="0%" />
            <stop stopColor="#00539A" offset="100%" />
          </linearGradient>
        </defs>
        <path d="M25.483.02C11.527.285.29 11.78.28 25.92v20.054c.007 3.247 2.623 5.874 5.846 5.874H25.99c14.187-.005 25.683-11.605 25.683-25.914C51.673 11.62 40.168.02 25.976.02c-.11 0-.22-.002-.33 0-.056 0-.108-.002-.163 0zm7.41 7.863c.092-.002.184 0 .275 0 .896 0 1.462.088 2.31.313.972.256 1.69 1.058 1.69 1.79.002 1.072-.585 1.698-1.81 1.698-.66 0-.976-.15-2.19-.15-3.835 0-6.967 3.158-6.973 7.026v5.285c0 .968.8 1.783 1.76 1.783h3.988c1.004 0 1.788.776 1.79 1.79 0 1.014-.786 1.79-1.79 1.79h-5.748V36.285c0 5.914-4.73 10.69-10.595 10.69-.896 0-1.46-.087-2.31-.31-.97-.258-1.69-1.067-1.69-1.8 0-1.07.585-1.69 1.81-1.69.658 0 .977.15 2.19.15 3.836 0 6.968-3.16 6.974-7.026v-5.32c0-.97-.8-1.77-1.76-1.77h-3.995c-1.007 0-1.783-.775-1.783-1.79 0-1.02.788-1.79 1.817-1.79h5.72v-7.054c0-5.822 4.582-10.545 10.32-10.69zm5.608.412c3.668 1.937 6.17 5.807 6.17 10.272 0 5.99-4.505 10.878-10.283 11.487.706-.66 1.148-1.593 1.148-2.636 0-1.127-.522-2.136-1.33-2.798 2.862-.5 5.064-3.03 5.064-6.053 0-2.192-1.156-4.118-2.883-5.2 1.515-.424 2.586-1.772 2.586-3.38 0-.623-.176-1.196-.472-1.692zM14.397 24.77c-.71.656-1.156 1.602-1.156 2.648 0 1.128.517 2.13 1.325 2.792-2.862.506-5.058 3.056-5.058 6.08 0 2.193 1.15 4.114 2.874 5.194-1.51.426-2.584 1.775-2.584 3.38 0 .624.17 1.195.465 1.692C6.6 44.618 4.098 40.753 4.098 36.29c0-5.994 4.513-10.916 10.3-11.52z" transform="translate(14 14)" fill="url(#fedora-icon)" fillRule="evenodd" />
      </g>
    );
  }
}

export default Fedora;
