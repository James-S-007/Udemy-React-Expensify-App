import moment from 'moment'
import { setStartDate, setEndDate } from '../../actions/filters'

test('setStartDate', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('setEndDate', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})


test('setTextFilter', () => {
    const text = 'Something in';
    expect(setTextFilter(text)).toEqual({
      type: 'SET_TEXT_FILTER',
      text
    });
});


test('setTextFilter default', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('sortByDate', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('sortByAmount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});
