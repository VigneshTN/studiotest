
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
  createDb() {
    const xdusers = [
        {
          'email': 'antony.a.reegon@accenture.com',
          'name': 'A Reegon, Antony',
          'id': 1
        },
        {
          'email': 'm.i.balakrishnan@accenture.com',
          'name': 'Balakrishnan, M. I.',
          'id': 2
        },
        {
          'email': 'shruti.bera@accenture.com',
          'name': 'Bera, Shruti',
          'id': 3
        },
        {
          'email': 'j.a.chidambaram@accenture.com',
          'name': 'Chidambaram, J. A.',
          'id': 4
        },
        {
          'email': 'keerthirajan.cm@accenture.com',
          'name': 'Cm, Keerthirajan',
          'id': 5
        },
        {
          'email': 'jaikumar.devadoss@accenture.com',
          'name': 'Devadoss, Jaikumar',
          'id': 6
        },
        {
          'email': 'tamilanban.devadoss@accenture.com',
          'name': 'Devadoss, Tamilanban',
          'id': 7
        },
        {
          'email': 'rajan.duggal@accenture.com',
          'name': 'Duggal, Rajan',
          'id': 8
        },
        {
          'email': 'lokesh.duraivelu@accenture.com',
          'name': 'Duraivelu, Lokesh',
          'id': 9
        },
        {
          'email': 'ramachandran.ganesh@accenture.com',
          'name': 'Ganesh, Ramachandran',
          'id': 10
        },
        {
          'email': 'deepak.gurumurthy@accenture.com',
          'name': 'Gurumurthy, Deepak',
          'id': 11
        },
        {
          'email': 'raghavi.hariharan@accenture.com',
          'name': 'Hariharan, Raghavi',
          'id': 12
        },
        {
          'email': 'vijaya.r.hariharan@accenture.com',
          'name': 'Hariharan, Vijaya R.',
          'id': 13
        },
        {
          'email': 'kumari.janu.priya@accenture.com',
          'name': 'Janu Priya, Kumari',
          'id': 14
        },
        {
          'email': 'm.jeyapandian@accenture.com',
          'name': 'Jeyapandian, M.',
          'id': 15
        },
        {
          'email': 'ramnath.kr@accenture.com',
          'name': 'Kr, Ramnath',
          'id': 16
        },
        {
          'email': 'divya.i.kumar@accenture.com',
          'name': 'Kumar, Divya I.',
          'id': 17
        },
        {
          'email': 'raghul.kumaran@accenture.com',
          'name': 'Kumaran, Raghul',
          'id': 18
        },
        {
          'email': 'swarna.manoharan@accenture.com',
          'name': 'Manoharan, Swarna',
          'id': 19
        },
        {
          'email': 'jeeva.muthukumar@accenture.com',
          'name': 'Muthukumar, Jeeva',
          'id': 20
        },
        {
          'email': 'kavitha.narayanan@accenture.com',
          'name': 'Narayanan, Kavitha',
          'id': 21
        },
        {
          'email': 'm.navaneethakrishnan@accenture.com',
          'name': 'NavaneethaKrishnan, M.',
          'id': 22
        },
        {
          'email': 'anusudha.nellairaj@accenture.com',
          'name': 'Nellairaj, Anusudha',
          'id': 23
        },
        {
          'email': 'hari.palleboina@accenture.com',
          'name': 'Palleboina, Hari',
          'id': 24
        },
        {
          'email': 'karthik.parameswaran@accenture.com',
          'name': 'Parameswaran, Karthik',
          'id': 25
        },
        {
          'email': 'netaji.prabu.j@accenture.com',
          'name': 'Prabu J, Netaji',
          'id': 26
        },
        {
          'email': 'thimothy.r.raj.kumar@accenture.com',
          'name': 'Raj Kumar, Thimothy R.',
          'id': 27
        },
        {
          'email': 'm.k.ramachandran@accenture.com',
          'name': 'Ramachandran, M. K.',
          'id': 28
        },
        {
          'email': 'balakumar.ramasankar@accenture.com',
          'name': 'Ramasankar, Balakumar',
          'id': 29
        },
        {
          'email': 's.rao.nagineni@accenture.com',
          'name': 'Rao Nagineni, S.',
          'id': 30
        },
        {
          'email': 'arunkumar.raveendran@accenture.com',
          'name': 'Raveendran, Arunkumar',
          'id': 31
        },
        {
          'email': 'subhesh.rr@accenture.com',
          'name': 'Rr, Subhesh',
          'id': 32
        },
        {
          'email': 'deepika.selvam@accenture.com',
          'name': 'Selvam, Deepika',
          'id': 33
        },
        {
          'email': 'nagarajan.sethu@accenture.com',
          'name': 'Sethu, Nagarajan',
          'id': 34
        },
        {
          'email': 'v.sivaraj@accenture.com',
          'name': 'Sivaraj, V.',
          'id': 35
        },
        {
          'email': 'wincybeulah.solomon@accenture.com',
          'name': 'Solomon, Wincybeulah',
          'id': 36
        },
        {
          'email': 'v.c.soundararajan@accenture.com',
          'name': 'Soundararajan, V. C.',
          'id': 37
        },
        {
          'email': 'd.sreenivasan@accenture.com',
          'name': 'Sreenivasan, D.',
          'id': 38
        },
        {
          'email': 'suriya.s.sundaram@accenture.com',
          'name': 'Sundaram, Suriya S.',
          'id': 39
        },
        {
          'email': 'nivedha.tamilselvan@accenture.com',
          'name': 'Tamilselvan, Nivedha',
          'id': 40
        },
        {
          'email': 'suresh.thangarasu@accenture.com',
          'name': 'Thangarasu, Suresh',
          'id': 41
        },
        {
          'email': 'v.thimma.natarajan@accenture.com',
          'name': 'Thimma Natarajan, V.',
          'id': 42
        },
        {
          'email': 'c.thiruvayepati@accenture.com',
          'name': 'Thiruvayepati, C.',
          'id': 43
        },
        {
          'email': 'p.a.vaidyanathan@accenture.com',
          'name': 'Vaidyanathan, P. A.',
          'id': 44
        },
        {
          'email': 'e.venkatesan@accenture.com',
          'name': 'Venkatesan, E.',
          'id': 45
        },
        {
          'email': 'preethi.g.vijendran@accenture.com',
          'name': 'Vijendran, Preethi G.',
          'id': 46
        },
        {
          'email': 'v.g.viswanathan@accenture.com',
          'name': 'Viswanathan, V. G.',
          'id': 47
        },
        {
          'email': 'anandi.yogeesan@accenture.com',
          'name': 'Yogeesan, Anandi',
          'id': 48
        }
    ];
    return { xdusers };
  }
}
