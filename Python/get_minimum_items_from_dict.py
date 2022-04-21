#! /bin/env python3

# Write a Python function that print the minimum key and value
# from the following dictionary


def get_minimum_items_dict(numbers_dict: dict) -> tuple:
    """
    That function print the minimum key and value
    from the following dictionary
    """

    def return_number_from_str(n: str | int | float):
        """
        Give string or int, float
        And return number type
        """
        if type(n) is int:
            return n
        return float(n)

    minimum_key = min(numbers_dict)
    minimum_value = min(
        map(return_number_from_str, numbers_dict.values())
    )
    print(f'{minimum_key=} {minimum_value=}')
    return minimum_key, minimum_value


def main(numbers):
    result = get_minimum_items_dict(numbers)
    assert result == ("number_1", 3.5)


if __name__ == '__main__':
    Numbers = {
        "number_1": "10.5",
        "number_2": 20,
        "number_3": 3.5
    }

    main(Numbers)
