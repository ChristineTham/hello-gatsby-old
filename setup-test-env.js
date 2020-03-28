/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect'
import { createSerializer } from 'jest-emotion'
import * as emotion from '@emotion/core'
import { matchers } from 'jest-emotion';

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer(emotion))
