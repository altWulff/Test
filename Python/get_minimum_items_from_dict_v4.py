#! /bin/env python3

# Write a Python function that print the minimum key and value
# from the following dictionary


class MinimumItems:
    def _return_number_from_str(self, n: str | int | float):
        """
        Give string or int, float
        And return number type
        """
        if type(n) is int:
            return n
        return float(n)

    def _search_min_values(self, values: list) -> int | float | str:
        """
        Search min values
        """
        min_val = None
        first, *values = values
        for v in values:
            value_type = type(v)
            v = self._return_number_from_str(v)
            if float(first) >= v:
                min_val = value_type(v)
            else:
                min_val = first
        return min_val

    def __call__(self, items_dict):
        minimum_key = min(items_dict.keys())
        minimum_value = self._search_min_values(items_dict.values())
        print(f'{minimum_key=} {minimum_value=}')
        return minimum_key, minimum_value


def main(numbers, expect_result):
    get_minimum_items_dict = MinimumItems()
    result = get_minimum_items_dict(numbers)
    assert result == expect_result, f'Result {result} not correct, expected {expect_result}'


if __name__ == '__main__':
    Numbers = {
        "number_1": "10.5",
        "number_2": 20,
        "number_3": 3.5
    }

    Numbers2 = {
        "number_1": 10.5,
        "number_2": 20,
        "number_3": '3.5'
    }

    main(Numbers, ('number_1', 3.5))
    main(Numbers2, ('number_1', '3.5'))
