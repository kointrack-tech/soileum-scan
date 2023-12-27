import type { EnsDomainDetailed, EnsDomainEvent } from 'types/api/ens';

import { ADDRESS_PARAMS, ADDRESS_HASH } from './addressParams';
import { TX_HASH } from './tx';

export const ENS_DOMAIN: EnsDomainDetailed = {
  id: '0x126d74db13895f8d3a1d362410212731d1e1d9be8add83e388385f93d84c8c84',
  name: 'kitty.cat.eth',
  token_id: '0x686f4041f059de13c12563c94bd32b8edef9e4d86c931f37abb8cb69ecf25fd6',
  owner: ADDRESS_PARAMS,
  resolved_address: ADDRESS_PARAMS,
  registrant: ADDRESS_PARAMS,
  registration_date: '2023-12-20T01:29:12.000Z',
  expiry_date: '2099-01-02T01:29:12.000Z',
  other_addresses: {
    ETH: ADDRESS_HASH,
  },
};

export const ENS_DOMAIN_EVENT: EnsDomainEvent = {
  transaction_hash: TX_HASH,
  timestamp: '2022-06-06T08:43:15.000000Z',
  from_address: ADDRESS_PARAMS,
  action: '0xf7a16963',
};
