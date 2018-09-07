
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const xdusers = [
            {
              'email': 'antony.a.reegon@accenture.com',
              'name': 'A Reegon, Antony'
            },
            {
              'email': 'm.i.balakrishnan@accenture.com',
              'name': 'Balakrishnan, M. I.'
            },
            {
              'email': 'shruti.bera@accenture.com',
              'name': 'Bera, Shruti'
            },
            {
              'email': 'j.a.chidambaram@accenture.com',
              'name': 'Chidambaram, J. A.'
            },
            {
              'email': 'keerthirajan.cm@accenture.com',
              'name': 'Cm, Keerthirajan'
            },
            {
              'email': 'jaikumar.devadoss@accenture.com',
              'name': 'Devadoss, Jaikumar'
            },
            {
              'email': 'tamilanban.devadoss@accenture.com',
              'name': 'Devadoss, Tamilanban'
            },
            {
              'email': 'rajan.duggal@accenture.com',
              'name': 'Duggal, Rajan'
            },
            {
              'email': 'lokesh.duraivelu@accenture.com',
              'name': 'Duraivelu, Lokesh'
            },
            {
              'email': 'ramachandran.ganesh@accenture.com',
              'name': 'Ganesh, Ramachandran'
            },
            {
              'email': 'deepak.gurumurthy@accenture.com',
              'name': 'Gurumurthy, Deepak'
            },
            {
              'email': 'raghavi.hariharan@accenture.com',
              'name': 'Hariharan, Raghavi'
            },
            {
              'email': 'vijaya.r.hariharan@accenture.com',
              'name': 'Hariharan, Vijaya R.'
            },
            {
              'email': 'kumari.janu.priya@accenture.com',
              'name': 'Janu Priya, Kumari'
            },
            {
              'email': 'm.jeyapandian@accenture.com',
              'name': 'Jeyapandian, M.'
            },
            {
              'email': 'ramnath.kr@accenture.com',
              'name': 'Kr, Ramnath'
            },
            {
              'email': 'divya.i.kumar@accenture.com',
              'name': 'Kumar, Divya I.'
            },
            {
              'email': 'raghul.kumaran@accenture.com',
              'name': 'Kumaran, Raghul'
            },
            {
              'email': 'swarna.manoharan@accenture.com',
              'name': 'Manoharan, Swarna'
            },
            {
              'email': 'jeeva.muthukumar@accenture.com',
              'name': 'Muthukumar, Jeeva'
            },
            {
              'email': 'kavitha.narayanan@accenture.com',
              'name': 'Narayanan, Kavitha'
            },
            {
              'email': 'm.navaneethakrishnan@accenture.com',
              'name': 'NavaneethaKrishnan, M.'
            },
            {
              'email': 'anusudha.nellairaj@accenture.com',
              'name': 'Nellairaj, Anusudha'
            },
            {
              'email': 'hari.palleboina@accenture.com',
              'name': 'Palleboina, Hari'
            },
            {
              'email': 'karthik.parameswaran@accenture.com',
              'name': 'Parameswaran, Karthik'
            },
            {
              'email': 'netaji.prabu.j@accenture.com',
              'name': 'Prabu J, Netaji'
            },
            {
              'email': 'thimothy.r.raj.kumar@accenture.com',
              'name': 'Raj Kumar, Thimothy R.'
            },
            {
              'email': 'm.k.ramachandran@accenture.com',
              'name': 'Ramachandran, M. K.'
            },
            {
              'email': 'balakumar.ramasankar@accenture.com',
              'name': 'Ramasankar, Balakumar'
            },
            {
              'email': 's.rao.nagineni@accenture.com',
              'name': 'Rao Nagineni, S.'
            },
            {
              'email': 'arunkumar.raveendran@accenture.com',
              'name': 'Raveendran, Arunkumar'
            },
            {
              'email': 'subhesh.rr@accenture.com',
              'name': 'Rr, Subhesh'
            },
            {
              'email': 'deepika.selvam@accenture.com',
              'name': 'Selvam, Deepika'
            },
            {
              'email': 'nagarajan.sethu@accenture.com',
              'name': 'Sethu, Nagarajan'
            },
            {
              'email': 'v.sivaraj@accenture.com',
              'name': 'Sivaraj, V.'
            },
            {
              'email': 'wincybeulah.solomon@accenture.com',
              'name': 'Solomon, Wincybeulah'
            },
            {
              'email': 'v.c.soundararajan@accenture.com',
              'name': 'Soundararajan, V. C.'
            },
            {
              'email': 'd.sreenivasan@accenture.com',
              'name': 'Sreenivasan, D.'
            },
            {
              'email': 'suriya.s.sundaram@accenture.com',
              'name': 'Sundaram, Suriya S.'
            },
            {
              'email': 'nivedha.tamilselvan@accenture.com',
              'name': 'Tamilselvan, Nivedha'
            },
            {
              'email': 'suresh.thangarasu@accenture.com',
              'name': 'Thangarasu, Suresh'
            },
            {
              'email': 'v.thimma.natarajan@accenture.com',
              'name': 'Thimma Natarajan, V.'
            },
            {
              'email': 'c.thiruvayepati@accenture.com',
              'name': 'Thiruvayepati, C.'
            },
            {
              'email': 'p.a.vaidyanathan@accenture.com',
              'name': 'Vaidyanathan, P. A.'
            },
            {
              'email': 'e.venkatesan@accenture.com',
              'name': 'Venkatesan, E.'
            },
            {
              'email': 'preethi.g.vijendran@accenture.com',
              'name': 'Vijendran, Preethi G.'
            },
            {
              'email': 'v.g.viswanathan@accenture.com',
              'name': 'Viswanathan, V. G.'
            },
            {
              'email': 'anandi.yogeesan@accenture.com',
              'name': 'Yogeesan, Anandi'
            }
    ];
    return {xdusers};
  }
}
