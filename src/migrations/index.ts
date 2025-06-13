import * as migration_20250610_171640 from './20250610_171640';
import * as migration_20250612_201942 from './20250612_201942';
import * as migration_20250613_211510 from './20250613_211510';

export const migrations = [
  {
    up: migration_20250610_171640.up,
    down: migration_20250610_171640.down,
    name: '20250610_171640',
  },
  {
    up: migration_20250612_201942.up,
    down: migration_20250612_201942.down,
    name: '20250612_201942',
  },
  {
    up: migration_20250613_211510.up,
    down: migration_20250613_211510.down,
    name: '20250613_211510'
  },
];
