import React from 'react';
import { string, arrayOf } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SectionContent.scss';
import { Button } from '../Button';
import { Stacks } from '../Stacks';
import { SectionHeading } from '../SectionHeading';

const cx = classNames.bind(styles);

const SectionContent = ({ title, info, stacks }) => (
  <div className={cx('root')}>
    <SectionHeading title={title} info={info} />
    <Button>Take a look</Button>
    <Stacks className={cx('stacks')} stacks={stacks} />
  </div>
);

SectionContent.propTypes = {
  title: string.isRequired,
  info: string.isRequired,
  stacks: arrayOf().isRequired,
};

export default SectionContent;
