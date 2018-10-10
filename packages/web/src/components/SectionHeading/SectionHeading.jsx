import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SectionHeading.scss';
import { Heading } from '../Heading';

const cx = classNames.bind(styles);

const SectionHeading = ({ title, info }) => (
  <div className={cx('root')}>
    <Heading className={cx('heading')}>{title}<br />Workshops</Heading>
    <p className={cx('subhead')}>{info}</p>
  </div>
);

SectionHeading.propTypes = {
  title: string.isRequired,
  info: string.isRequired,
};

export default SectionHeading;