import React from 'react';

import * as Styles from './styles';

function Loading() {
  return (
    <Styles.Container>
      <div className="loader center">
        <Styles.Spinner className="fa fa-cog fa-spin" />
      </div>
    </Styles.Container>
  )
}

export default Loading;
