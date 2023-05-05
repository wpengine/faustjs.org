import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import * as SELECTORS from 'constants/selectors';
import styles from 'styles/components/Main.module.scss';

const cx = classNames.bind(styles);

function Main(
  props: PropsWithChildren<{
    className?: string;
  }>,
) {
  const { className, children } = props;

  return (
    <main
      id={SELECTORS.MAIN_CONTENT_ID}
      tabIndex={-1}
      className={cx(['component', className])}
      {...props}>
      {children}
    </main>
  );
}

export default Main;
