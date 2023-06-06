import * as React from 'react';
import { Stack } from 'components/ui/layout';
import SocialLinks from 'components/socialLinks';

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

      <SocialLinks />
    </>
  );
};
