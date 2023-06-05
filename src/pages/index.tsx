import * as React from 'react';
import { Stack } from 'components/ui/layout';

import { IconButton } from 'components/ui/input';

export default () => {
  return (
    <>
      <Stack direction="column">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>

      <Stack>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Stack>

      <Stack direction="row">
        <IconButton size="small" />
        <IconButton size="medium" />
        <IconButton size="large" />
      </Stack>

      <IconButton
        size={{ xs: 'small', sm: 'small', md: 'large', lg: 'medium' }}
      />
    </>
  );
};
