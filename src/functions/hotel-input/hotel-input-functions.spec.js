import { hotelFilter, hotelSort } from './hotel-input-functions';
import MockData from '../../services/hotel-mock-api-data';

    //pull hotels array of objects out of the Mock API call data as it is passed on props in components
const MockDataProp = MockData.results.hotels;

console.log('MockDataProp', MockDataProp);

describe('HotelInputFunctions - Filter', () => {

        //create array of filter input values for testing
    const filterTests = {
        filterInput: {
            emptyInput: "",
            falsyInput: [undefined, null, NaN, 0, false],
            noResultStringInput: "!",
            oneResultValidInput: "TestName2",
            partialValidInput: ["Omni", "& Suites", "cent Mile"],
            whitespaceTrimInput: ["      TestName3", "TestName3      "],
            casedInput: "TESTNAME2",
        },
        filterOutput: {
            emptyOutput: MockDataProp,
            falsyOutput: false,
            noResultStringOutput: false,
            oneResultValidOutput: [MockDataProp[1]],
            partialValidOutput: [MockDataProp[0]],
            whitespaceTrimOutput: [MockDataProp[2]],
            casedOutput: [MockDataProp[1]],
        }
    };

    it('passes through the input data when filterInput is empty string (DEFAULT)', () => {
        expect(
            hotelFilter(MockDataProp, filterTests.filterInput.emptyInput)
        )
        .toStrictEqual(
            filterTests.filterOutput.emptyOutput
        );       
    });

    it('returns false when the filterInput is falsey and not empty string', () => {
        filterTests.filterInput.falsyInput.forEach((input) => {
            expect(
                hotelFilter(MockDataProp, input)
            )
            .toStrictEqual(
                filterTests.filterOutput.falsyOutput
            );
        });
    });

    it('returns false when called with a valid, unmatched input term', () => {
        expect(
            hotelFilter(MockDataProp, filterTests.filterInput.noResultStringInput)
        )
        .toStrictEqual(
            filterTests.filterOutput.noResultStringOutput
        );
    });

    it('returns filteredData object when called with a valid input term', () => {
        expect(
            hotelFilter(MockDataProp, filterTests.filterInput.oneResultValidInput)
        )
        .toEqual(
            filterTests.filterOutput.oneResultValidOutput
        );
    });

    it('returns filteredData object when called with a partially matched valid input term', () => {
        filterTests.filterInput.partialValidInput.forEach((input) => {
            expect(
                hotelFilter(MockDataProp, input)
            )
            .toStrictEqual(
                filterTests.filterOutput.partialValidOutput
            );
        });
    });

    it('returns filteredData object when called with a valid input term with whitespace characters', () => {
        filterTests.filterInput.whitespaceTrimInput.forEach((input) => {
            expect(
                hotelFilter(MockDataProp, input)
            )
            .toStrictEqual(
                filterTests.filterOutput.whitespaceTrimOutput
            );
        });
    });
});

describe('HotelInputFunctions - Sort', () => {

        //create array of selector input values for testing
    const sortTests = {
        sortInput: {
            validRecommendedInput: 'recommended',
            validDescendingInput: 'descending',
            validAscendingInput: 'ascending',
            emptyStringInput: '',
            falseySelectorInput: [undefined, null, NaN, 0, false],
            capitalInput: 'Recommended',
            partialInput: ['rec', 'ommended'],
            numberAndCharsInput: 'FH*SVG1',
            misterRobotInput: '#DROP_TABLE Mainframe;'
        },
        sortOutput: {
            validRecommendedOutput: [MockDataProp[2], MockDataProp[1], MockDataProp[0]],
            validDescendingOutput: [MockDataProp[0], MockDataProp[2], MockDataProp[1]],
            validAscendingOutput: [MockDataProp[1], MockDataProp[2], MockDataProp[0]],
            emptyStringOutput: [MockDataProp[2], MockDataProp[1], MockDataProp[0]],
            falseySelectorOutput: false,
            capitalOutput: false,
            partialOutput: false,
            numberAndCharsOutput: false,
            misterRobotOutput: false
        }
    };

    it('returns properly sorted array by recommendation when passed valid input value from selector', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.validRecommendedInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validRecommendedOutput
        );
    });

    it('returns properly sorted array by descending price when passed valid input value from selector', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.validDescendingInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validDescendingOutput
        );
    });

    it('returns properly sorted array by ascending price when passed valid input value from selector', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.validAscendingInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validAscendingOutput
        );
    });

    it('returns properly sorted default (recommended) array by ascending price when passed empty string', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.emptyStringInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.emptyStringOutput
        );
    });

    it('returns false when the selector value is falsey', () => {
        sortTests.sortInput.falseySelectorInput.forEach((input) => {
            expect(
                hotelSort(MockDataProp, input)
            )
            .toStrictEqual(
                sortTests.sortOutput.falseySelectorOutput
            );
        });
    });

    it('returns false when the selector value is invalid by capitalization', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.capitalIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.capitalOutput
        );
    });

    it('returns false when the selector value is invalid by partial string', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.partialIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.partialOutput
        );
    });

    it('returns false when the selector value is invalid alpha-numeric and character input', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.numberAndCharsIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.numberAndCharsOutput
        );
    });

    it('returns false when the selector value is a hacker', () => {
        expect(
            hotelSort(MockDataProp, sortTests.sortInput.misterRobotIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.misterRobotOutput
        );
    });
});