import React from 'react';
import { TabSpec } from './TabSpec';

export interface TabLink extends TabSpec {
  comp: React.ComponentType
}
