import { hotelFilter, hotelSort } from './hotel-input-functions';
import MockData from '../../services/hotel-mock-api-data';

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
            emptyOutput: MockData,
            falsyOutput: false,
            noResultStringOutput: false,
            oneResultValidOutput: [MockData.results.hotels[1]],
            partialValidOutput: [MockData.results.hotels[0]],
            whitespaceTrimOutput: [MockData.results.hotels[2]],
            casedOutput: [MockData.results.hotels[1]],
        }
    };

    it('passes through the input data when filterInput is empty string (DEFAULT)', () => {
        expect(
            hotelFilter(MockData, filterTests.filterInput.emptyInput)
        )
        .toStrictEqual(
            filterTests.filterOutput.emptyOutput
        );       
    });

    it('returns false when the filterInput is falsey and not empty string', () => {
        filterTests.filterInput.falsyInput.forEach((input) => {
            expect(
                hotelFilter(MockData, input)
            )
            .toStrictEqual(
                filterTests.filterOutput.falsyOutput
            );
        });
    });

    it('returns false when called with a valid, unmatched input term', () => {
        expect(
            hotelFilter(MockData, filterTests.filterInput.noResultStringInput)
        )
        .toStrictEqual(
            filterTests.filterOutput.noResultStringOutput
        );
    });

    it('returns filteredData object when called with a valid input term', () => {
        expect(
            hotelFilter(MockData, filterTests.filterInput.oneResultValidInput)
        )
        .toEqual(
            filterTests.filterOutput.oneResultValidOutput
        );
    });

    it('returns filteredData object when called with a partially matched valid input term', () => {
        filterTests.filterInput.partialValidInput.forEach((input) => {
            expect(
                hotelFilter(MockData, input)
            )
            .toStrictEqual(
                filterTests.filterOutput.partialValidOutput
            );
        });
    });

    it('returns filteredData object when called with a valid input term with whitespace characters', () => {
        filterTests.filterInput.whitespaceTrimInput.forEach((input) => {
            expect(
                hotelFilter(MockData, input)
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
            falseySelectorInput: ['', undefined, null, NaN, 0, false],
            capitalInput: 'Recommended',
            partialInput: ['rec', 'ommended'],
            numberAndCharsInput: 'FH*SVG1',
            misterRobotInput: '#DROP_TABLE Mainframe;'
        },
        sortOutput: {
            validRecommendedOutput: [MockData.results.hotels[2], MockData.results.hotels[1], MockData.results.hotels[0]],
            validDescendingOutput: [MockData.results.hotels[0], MockData.results.hotels[2], MockData.results.hotels[1]],
            validAscendingOutput: [MockData.results.hotels[1], MockData.results.hotels[2], MockData.results.hotels[0]],
            falseySelectorOutput: false,
            capitalOutput: false,
            partialOutput: false,
            numberAndCharsOutput: false,
            misterRobotOutput: false
        }
    };

    it('returns properly sorted array by recommendation when passed valid input value from selector', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.validRecommendedInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validRecommendedOutput
        );
    });

    it('returns properly sorted array by descending price when passed valid input value from selector', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.validDescendingInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validDescendingOutput
        );
    });

    it('returns properly sorted array by ascending price when passed valid input value from selector', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.validAscendingInput)
        )
        .toStrictEqual(
            sortTests.sortOutput.validAscendingOutput
        );
    });

    it('returns false when the selector value is falsey', () => {
        sortTests.sortInput.falseySelectorInput.forEach((input) => {
            expect(
                hotelSort(MockData, input)
            )
            .toStrictEqual(
                sortTests.sortOutput.falseySelectorOutput
            );
        });
    });

    it('returns false when the selector value is invalid by capitalization', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.capitalIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.capitalOutput
        );
    });

    it('returns false when the selector value is invalid by partial string', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.partialIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.partialOutput
        );
    });

    it('returns false when the selector value is invalid alpha-numeric and character input', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.numberAndCharsIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.numberAndCharsOutput
        );
    });

    it('returns false when the selector value is a hacker', () => {
        expect(
            hotelSort(MockData, sortTests.sortInput.misterRobotIntput)
        )
        .toStrictEqual(
            sortTests.sortOutput.misterRobotOutput
        );
    });

});