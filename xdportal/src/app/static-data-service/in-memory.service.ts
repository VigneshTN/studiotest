
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const xdusers = [
      {
        'email': 'antony.a.reegon@accenture.com',
        'name': 'A Reegon, Antony',
        'id': 1,
        'imageUrl': ''
      },
      {
        'email': 'm.i.balakrishnan@accenture.com',
        'name': 'Balakrishnan, M. I.',
        'id': 2,
        'imageUrl': ''
      },
      {
        'email': 'shruti.bera@accenture.com',
        'name': 'Bera, Shruti',
        'id': 3,
        'imageUrl': ''
      },
      {
        'email': 'j.a.chidambaram@accenture.com',
        'name': 'Chidambaram, J. A.',
        'id': 4,
        'imageUrl': ''
      },
      {
        'email': 'keerthirajan.cm@accenture.com',
        'name': 'Cm, Keerthirajan',
        'id': 5,
        'imageUrl': ''
      },
      {
        'email': 'jaikumar.devadoss@accenture.com',
        'name': 'Devadoss, Jaikumar',
        'id': 6,
        'imageUrl': ''
      },
      {
        'email': 'tamilanban.devadoss@accenture.com',
        'name': 'Devadoss, Tamilanban',
        'id': 7,
        'imageUrl': ''
      },
      {
        'email': 'rajan.duggal@accenture.com',
        'name': 'Duggal, Rajan',
        'id': 8,
        'imageUrl': ''
      },
      {
        'email': 'lokesh.duraivelu@accenture.com',
        'name': 'Duraivelu, Lokesh',
        'id': 9,
        'imageUrl': ''
      },
      {
        'email': 'ramachandran.ganesh@accenture.com',
        'name': 'Ganesh, Ramachandran',
        'id': 10,
        'imageUrl': ''
      },
      {
        'email': 'deepak.gurumurthy@accenture.com',
        'name': 'Gurumurthy, Deepak',
        'id': 11,
        'imageUrl': ''
      },
      {
        'email': 'raghavi.hariharan@accenture.com',
        'name': 'Hariharan, Raghavi',
        'id': 12,
        'imageUrl': ''
      },
      {
        'email': 'vijaya.r.hariharan@accenture.com',
        'name': 'Hariharan, Vijaya R.',
        'id': 13,
        'imageUrl': ''
      },
      {
        'email': 'kumari.janu.priya@accenture.com',
        'name': 'Janu Priya, Kumari',
        'id': 14,
        'imageUrl': ''
      },
      {
        'email': 'm.jeyapandian@accenture.com',
        'name': 'Jeyapandian, M.',
        'id': 15,
        'imageUrl': ''
      },
      {
        'email': 'ramnath.kr@accenture.com',
        'name': 'Kr, Ramnath',
        'id': 16,
        'imageUrl': ''
      },
      {
        'email': 'divya.i.kumar@accenture.com',
        'name': 'Kumar, Divya I.',
        'id': 17,
        'imageUrl': ''
      },
      {
        'email': 'raghul.kumaran@accenture.com',
        'name': 'Kumaran, Raghul',
        'id': 18,
        'imageUrl': ''
      },
      {
        'email': 'swarna.manoharan@accenture.com',
        'name': 'Manoharan, Swarna',
        'id': 19,
        'imageUrl': ''
      },
      {
        'email': 'jeeva.muthukumar@accenture.com',
        'name': 'Muthukumar, Jeeva',
        'id': 20,
        'imageUrl': ''
      },
      {
        'email': 'kavitha.narayanan@accenture.com',
        'name': 'Narayanan, Kavitha',
        'id': 21,
        'imageUrl': ''
      },
      {
        'email': 'm.navaneethakrishnan@accenture.com',
        'name': 'NavaneethaKrishnan, M.',
        'id': 22,
        'imageUrl': ''
      },
      {
        'email': 'anusudha.nellairaj@accenture.com',
        'name': 'Nellairaj, Anusudha',
        'id': 23,
        'imageUrl': ''
      },
      {
        'email': 'hari.palleboina@accenture.com',
        'name': 'Palleboina, Hari',
        'id': 24,
        'imageUrl': ''
      },
      {
        'email': 'karthik.parameswaran@accenture.com',
        'name': 'Parameswaran, Karthik',
        'id': 25,
        'imageUrl': ''
      },
      {
        'email': 'netaji.prabu.j@accenture.com',
        'name': 'Prabu J, Netaji',
        'id': 26,
        'imageUrl': ''
      },
      {
        'email': 'thimothy.r.raj.kumar@accenture.com',
        'name': 'Raj Kumar, Thimothy R.',
        'id': 27,
        'imageUrl': ''
      },
      {
        'email': 'm.k.ramachandran@accenture.com',
        'name': 'Ramachandran, M. K.',
        'id': 28,
        'imageUrl': ''
      },
      {
        'email': 'balakumar.ramasankar@accenture.com',
        'name': 'Ramasankar, Balakumar',
        'id': 29,
        'imageUrl': ''
      },
      {
        'email': 's.rao.nagineni@accenture.com',
        'name': 'Rao Nagineni, S.',
        'id': 30,
        'imageUrl': ''
      },
      {
        'email': 'arunkumar.raveendran@accenture.com',
        'name': 'Raveendran, Arunkumar',
        'id': 31,
        'imageUrl': ''
      },
      {
        'email': 'subhesh.rr@accenture.com',
        'name': 'Rr, Subhesh',
        'id': 32,
        'imageUrl': ''
      },
      {
        'email': 'deepika.selvam@accenture.com',
        'name': 'Selvam, Deepika',
        'id': 33,
        'imageUrl': ''
      },
      {
        'email': 'nagarajan.sethu@accenture.com',
        'name': 'Sethu, Nagarajan',
        'id': 34,
        'imageUrl': ''
      },
      {
        'email': 'v.sivaraj@accenture.com',
        'name': 'Sivaraj, V.',
        'id': 35,
        'imageUrl': ''
      },
      {
        'email': 'wincybeulah.solomon@accenture.com',
        'name': 'Solomon, Wincybeulah',
        'id': 36,
        'imageUrl': ''
      },
      {
        'email': 'v.c.soundararajan@accenture.com',
        'name': 'Soundararajan, V. C.',
        'id': 37,
        'imageUrl': ''
      },
      {
        'email': 'd.sreenivasan@accenture.com',
        'name': 'Sreenivasan, D.',
        'id': 38,
        'imageUrl': ''
      },
      {
        'email': 'suriya.s.sundaram@accenture.com',
        'name': 'Sundaram, Suriya S.',
        'id': 39,
        'imageUrl': ''
      },
      {
        'email': 'nivedha.tamilselvan@accenture.com',
        'name': 'Tamilselvan, Nivedha',
        'id': 40,
        'imageUrl': ''
      },
      {
        'email': 'suresh.thangarasu@accenture.com',
        'name': 'Thangarasu, Suresh',
        'id': 41,
        'imageUrl': ''
      },
      {
        'email': 'v.thimma.natarajan@accenture.com',
        'name': 'Thimma Natarajan, V.',
        'id': 42,
        'imageUrl': '11583154.jpg'
      },
      {
        'email': 'c.thiruvayepati@accenture.com',
        'name': 'Thiruvayepati, C.',
        'id': 43,
        'imageUrl': ''
      },
      {
        'email': 'p.a.vaidyanathan@accenture.com',
        'name': 'Vaidyanathan, P. A.',
        'id': 44,
        'imageUrl': ''
      },
      {
        'email': 'e.venkatesan@accenture.com',
        'name': 'Venkatesan, E.',
        'id': 45,
        'imageUrl': ''
      },
      {
        'email': 'preethi.g.vijendran@accenture.com',
        'name': 'Vijendran, Preethi G.',
        'id': 46,
        'imageUrl': ''
      },
      {
        'email': 'v.g.viswanathan@accenture.com',
        'name': 'Viswanathan, V. G.',
        'id': 47,
        'imageUrl': ''
      },
      {
        'email': 'anandi.yogeesan@accenture.com',
        'name': 'Yogeesan, Anandi',
        'id': 48,
        'imageUrl': ''
      }
    ];
    return { xdusers };
  }
}
