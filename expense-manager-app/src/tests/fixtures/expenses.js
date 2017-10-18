import moment from 'moment'

// baseline test data

export default [{
  id: '1',
  description: 'Car loan',
  note: '',
  amount: 225,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 102300,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 6300,
  createdAt: moment(0).add(4, 'days').valueOf()
}];