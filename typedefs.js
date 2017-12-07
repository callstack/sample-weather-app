/* @flow */
/* eslint-disable */

declare type Styles = Object | Object[] | number | number[];

declare type Weather = {
  town: ?string,
  temp: ?string,
  condition: {
    icon: ?string,
    text: ?string,
  },
  date: ?Date,
};