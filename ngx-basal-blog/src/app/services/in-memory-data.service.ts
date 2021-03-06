import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as fake from './moke';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado222' }
        ];
        const testData = [{
            'id': 'btcusdt',
            'name': 'BTC/USDT',
            'base_unit': 'btc',
            'quote_unit': 'usdt',
            'ask_fixed': 7,
            'bid_fixed': 9,
            'fee': null
        }, {
            'id': 'bchusdt',
            'name': 'BCH/USDT',
            'base_unit': 'bch',
            'quote_unit': 'usdt',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 3,
                'trade_pair': 'BCH/USDT',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'etcusdt',
            'name': 'ETC/USDT',
            'base_unit': 'etc',
            'quote_unit': 'usdt',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 4,
                'trade_pair': 'ETC/USDT',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'ltcusdt',
            'name': 'LTC/USDT',
            'base_unit': 'ltc',
            'quote_unit': 'usdt',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 5,
                'trade_pair': 'LTC/USDT',
                'bid': '0.00999',
                'ask': '0.00001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-11-13T06:31:11.000Z'
            }
        }, {
            'id': 'eosusdt',
            'name': 'EOS/USDT',
            'base_unit': 'eos',
            'quote_unit': 'usdt',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 6,
                'trade_pair': 'EOS/USDT',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'ethbtc',
            'name': 'ETH/BTC',
            'base_unit': 'eth',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 7,
                'trade_pair': 'ETH/BTC',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'bchbtc',
            'name': 'BCH/BTC',
            'base_unit': 'bch',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 8,
                'trade_pair': 'BCH/BTC',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'etcbtc',
            'name': 'ETC/BTC',
            'base_unit': 'etc',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 9,
                'trade_pair': 'ETC/BTC',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'ltcbtc',
            'name': 'LTC/BTC',
            'base_unit': 'ltc',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 10,
                'trade_pair': 'LTC/BTC',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'eosbtc',
            'name': 'EOS/BTC',
            'base_unit': 'eos',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': {
                'id': 11,
                'trade_pair': 'EOS/BTC',
                'bid': '0.001',
                'ask': '0.001',
                'status': 'Publish',
                'created_at': '2018-09-26T05:10:49.000Z',
                'updated_at': '2018-09-26T05:10:49.000Z'
            }
        }, {
            'id': 'btccad',
            'name': 'BTC/CAD',
            'base_unit': 'btc',
            'quote_unit': 'cad',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': null
        }, {
            'id': 'soarbtc',
            'name': 'SOAR/BTC',
            'base_unit': 'soar',
            'quote_unit': 'btc',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': null
        }, {
            'id': 'btcusd',
            'name': 'BTC/USD',
            'base_unit': 'btc',
            'quote_unit': 'usd',
            'ask_fixed': 4,
            'bid_fixed': 8,
            'fee': null
        }];
        const fakeData = fake.manyHosts(4);
        return { heroes, testData, fakeData };
    }
}
