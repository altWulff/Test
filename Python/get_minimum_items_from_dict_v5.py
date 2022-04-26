#! /bin/env python3

# Write a Python function that print the minimum key and value
# from the following dictionary


def get_minimum_items_dict(numbers_dict: dict) -> tuple:
    """
    That function print the minimum key and value
    from the following dictionary
    """
    minimum_key = min(numbers_dict)
    minimum_value = list(numbers_dict.values())
    minimum_value.sort(key=float)
    minimum_value = minimum_value[0]
    print(f'{minimum_key=} {minimum_value=}')
    return minimum_key, minimum_value


def main(numbers, expect_result):
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
